import { SquareGroup } from "../SquareGroup";
import $ from "jquery"
import { Square } from "../Square";
import { createSquareGroup } from "../CreateSquareGroup";
import { SquareViewer } from "./SquareViever";
import { GameSize, Size } from "../Types";
import { Rules } from "../Rules";
export class GameViever{
    //当前SquareGroup
    private _cur:SquareGroup;
    //下一个SquareGroup
    private _next:SquareGroup;
    private _core:number = 0;
    //游戏状态
    private _state:boolean = true;
    // 游戏触底存储所有小方块的数组
    private _squares:Square[] = [];
    //游戏展示dom
    private _palyDom:JQuery<HTMLElement> = $("#tetris");
    //游戏分数展示dom
    private _coreDmo:JQuery<HTMLElement> = $("#core");
    // 展示当前得分
    private _currentCore:JQuery<HTMLElement> = $("#current-core");
    // over  游戏结束遮挡层
    private _over:JQuery<HTMLElement> = $("#over");
    //下落计时器
    private _timer:number;
    constructor(){
        this._next = createSquareGroup({x:3,y:2}); 
        this._palyDom.css({
            width:Size.width * GameSize.column,
            height:Size.height * GameSize.row
        });
        this.init();
    }

    //绑定事件
    private addEvent(){
        document.addEventListener("keydown",(e)=>{
           let keycode  = e.keyCode;
           if(keycode == 37){
               this._cur.goLeft(this._squares);
           }
           if(keycode == 38){
               this._cur.rotate();
           }
           if(keycode == 39){
               this._cur.goRight(this._squares);
           }
           if(keycode == 40){
               this._cur.goBottom(this._squares);
           }
           if(keycode == 32){
               this.reStart();
           }
        });
    }
    // 初始化
    private init(){
        this.addEvent();
        this._cur = this._next;
        this._next = createSquareGroup({x:3,y:2}); 
        this.appendToShowPlate();
        this.appentToPlate();
        this.autoDrop();
       
    }
    //重新开始
    private reStart(){
       history.go(0);
    }
    // 将下一个追加到提示面板中
    private appendToShowPlate(){
       this._next.getSquares().forEach(item =>{
          item.setIWiver(new SquareViewer(item,$("#core")));
       })
       //进行碰撞检测如果已出现即碰撞那么表示游戏结束
      let isCrash =  Rules.isCrash(this._squares,this._cur.getCenter(),this._cur.getShap());
      if(isCrash){
          this._state = false;
          this._over.show();
      }
    }
    //将当前追加到游戏面板中
    private appentToPlate(){
        this._cur.getSquares().forEach(item =>{
            item.setIWiver(new SquareViewer(item,$("#tetris")));
         })
    }
    // 切换方块
    private change(){
        // 将下一个赋值给当前
        this._cur = this._next;
        //首先需要移出当前的下一个展示
        this._next.getSquares().forEach(item=>{
            item.getIWiver().remove();
        })
        this.appentToPlate();
        //给新的下一个赋值
        this._next = createSquareGroup({x:3,y:2});
        this.appendToShowPlate(); 
    }
    //自动下落
    private autoDrop(){
         window.clearInterval(this._timer);
         this._timer =  setInterval(()=>{
            if(!this._state){
                window.clearInterval(this._timer);
                return;
            }
            let result =  this._cur.goBottom(this._squares);
            this.cancel();
            if(!result){
            //将当前的_cur 中的数组全部放进游戏数组中
            this._squares.push(...this._cur.getSquares());
            this.change();  
            }
        },1000) as unknown as number;
    }
    //消除
    private cancel(){
        if(this._squares.length  == 0){
           return;
        }
        //获得square数组中最大的y 和最小的y
        let max = 0;
        let min = GameSize.row;
        this._squares.forEach((item)=>{
           let y =  item.getPoint().y;
           if(max < y){
               max = y;
           }
           if(min > y){
               min = y;
           }
        })
        //统计每一行的方块数量
        
        for(let i = max; i>= min ;i--){
            let arr:Square[] = [];
            this._squares.forEach(item=>{
                let y = item.getPoint().y;
                if(y ==i){
                    arr.push(item);
                }
            })
            //表示这一行已经满了可以消除
           if(arr.length == GameSize.column){
                //从界面移出
                arr.forEach(item=>{
                    item.getIWiver().remove();
                    this._squares.forEach(squareItem=>{
                        if(squareItem == item){
                            this._squares.splice(this._squares.indexOf(item),1);
                        }
                    })
                })
                //将所有的y坐标大于被移除行的所有的y 加一
                this._squares.forEach(item=>{
                    let {x,y} = item.getPoint();
                    if(y < i){
                        item.setPoint({x:x,y:y+1});
                    }
                })
                this._core +=10;
                this._currentCore.text(this._core);
           }
        }
    }
}
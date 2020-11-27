import { Rules } from "./Rules";
import { Square } from "./Square";
import { Point } from "./Types";
import {Shaps} from "./Types"
import { randomColor, ruandom } from "./util";
export class SquareGroup{
    //存储小方块数组
    private squares:Square[];
    //顺时针
    protected cloak = false;
    constructor(private shape:Point[],private cnter:Point,private color:string){
        //根据形状数组和中心点构造出各种方块
       this.squares =  shape.map((item)=>{
          return  new Square({x:item.x + cnter.x,y:item.y + cnter.y},color);
        })

    }
    //设置中心点坐标
    setCenterPoint(point:Point){
        this.cnter = point;
        this.squares.forEach((item,index)=>{
            item.setPoint({x:this.shape[index].x +point.x,y:this.shape[index].y+point.y});
        })
    }
    // 获得所有的小方块
    getSquares(){
        return this.squares;
    }
    // 获得中心点做表
    getCenter(){
        return this.cnter;
    }
    // 获得形状
    getShap(){
        return this.shape;
    }
    
    //获得旋转后的形状
    rotateShap():Point[]{
        let newShap:Point[] = [];
        // 如果是顺时针那么就顺时针旋转
        if(this.cloak){
          //顺时针形状变为 (-y ,x)
            newShap = this.shape.map(item =>{
                let rotate:Point = {
                    x:-item.y,
                    y:item.x
                }
                return rotate;
            })
        }else{
            newShap = this.shape.map(item =>{
                let rotate:Point = {
                    x:item.y,
                    y:-item.x
                }
                return rotate;
            })
        }
        return newShap;
    }
    //旋转
    rotate(){
        // 获得旋转形状
      let rotateShap =   this.rotateShap();
      //首先判断是否是不能选转因为有的一旦旋转就旋转出界了
      let result =  Rules.canImove(rotateShap,this.cnter);
      if(!result){
          return;
      }
      this.shape = rotateShap;
      this.squares.forEach((item,index)=>{
          item.setPoint({x:this.cnter.x + this.shape[index].x,y:this.cnter.y + this.shape[index].y});
      })
    }

    // 上运动
    goTop(){
        let center = this.cnter;
        let newPoint:Point = {x:center.x,y:center.y-1};
      
        let isMove =   Rules.canImove(this.shape,newPoint);
       if(isMove){
        this.setCenterPoint( newPoint);
        return true;
       }
       return false;
    }
    // 下运动
    goBottom(squares:Square[]){
        let center = this.cnter;
        let newPoint:Point = {x:center.x,y:center.y+1};
        let crash =  Rules.isCrash(squares,newPoint,this.shape);
        let isMove =   Rules.canImove(this.shape,newPoint);
        if(isMove &&  !crash){
         this.setCenterPoint(newPoint);
         return true;
        }
        return false;
    }
    // 左运动
    goLeft(squares:Square[]){
        let center = this.cnter;
        let newPoint:Point = {x:center.x -1,y:center.y};
        let isMove =   Rules.canImove(this.shape,newPoint);
        let crash =  Rules.isCrash(squares,newPoint,this.shape);
        if(isMove&&  !crash){
            this.setCenterPoint(newPoint);
            return true;
        }
        return false;
    }
    // 右运动的
    goRight(squares:Square[]){
        let center = this.cnter;
        let newPoint:Point = {x:center.x +1,y:center.y};
        let isMove =   Rules.canImove(this.shape,newPoint);
        let crash =  Rules.isCrash(squares,newPoint,this.shape);
        if(isMove&&  !crash){
           this.setCenterPoint(newPoint);
           return true;
        }
        return false;
    }
}


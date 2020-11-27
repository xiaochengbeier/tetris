import { Square } from "./Square";
import { GameSize, Point } from "./Types";

export class Rules{
    static canImove(shap:Point[],point:Point):boolean{
        //现根据点计算出每个点的坐标
        let points =  shap.map((item)=>{
             let newPoint:Point = {x:item.x + point.x,y:item.y + point.y};       
             return newPoint;  
        })
       let result =   points.some((item)=>{
            if(item.x < 0 || item.y<0 || item.x > GameSize.column -1 || item.y>GameSize.row-1){
                    return true;
            }
        });
        return !result;
    }
    // 判断是否存在碰撞
    static isCrash(squares:Square[],center:Point,shap:Point[]){
        let newPoints = shap.map(item=>{
            let newPoint:Point ={
                x:item.x + center.x,
                y:item.y + center.y,
            }
            return newPoint;
        });

      let creashed =    squares.some(item=>{
            // 方块的点
            let point = item.getPoint();
            // 循序将要到达的点
            for(let i = 0;i < newPoints.length;i++){
                let newPoint = newPoints[i];
                if(newPoint.x == point.x && newPoint.y == point.y){
                    return true;
                }
            }
        });
        return creashed;
    }
}
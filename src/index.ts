import {Square} from  "./Square" 
import $ from "jquery";
import { SquareViewer } from "./viewer/SquareViever";
import { Rules } from "./Rules";
import { GameSize, Point, Size } from "./Types";
import { createSquareGroup } from "./CreateSquareGroup";
import { GameViever } from "./viewer/GameViever";
// $("#tetris").css({
//     width:Size.width * GameSize.column,
//     height:Size.height * GameSize.row
// })
// let squaGroup =  createSquareGroup({x:3,y:3});
// squaGroup.getSquares().forEach(item=>{
//     item.setIWiver(new SquareViewer(item,$("#tetris")));
// });


// $("#top").on("click",()=>{
//     let center = squaGroup.getCenter();
//     let newPoint:Point = {x:center.x,y:center.y-1};
//     let isMove =   Rules.canImove(squaGroup.getShap(),newPoint);
//    if(isMove){
//     squaGroup.setCenterPoint( newPoint);
//    }
    
// });
// $("#right").on("click",()=>{
//     let center = squaGroup.getCenter();
//     console.log(center,"right");
   
//     let newPoint:Point = {x:center.x +1,y:center.y};
//     let isMove =   Rules.canImove(squaGroup.getShap(),newPoint);
//     if(isMove){
//         squaGroup.setCenterPoint(newPoint);

//     }
    
// });
// $("#bottom").on("click",()=>{
//     let center = squaGroup.getCenter();
//     let newPoint:Point = {x:center.x,y:center.y+1};
//     let isMove =   Rules.canImove(squaGroup.getShap(),newPoint);
//     if(isMove){
//       squaGroup.setCenterPoint(newPoint);
//     }
// });
// $("#left").on("click",()=>{
//     let center = squaGroup.getCenter();
   

//     let newPoint:Point = {x:center.x -1,y:center.y};
//     let isMove =   Rules.canImove(squaGroup.getShap(),newPoint);
//     if(isMove){
//         squaGroup.setCenterPoint(newPoint);
//     }
// });
// $("#rotate").on("click",()=>{
//     squaGroup.rotate();
// });

let game = new GameViever();
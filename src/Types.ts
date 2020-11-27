import { SquareGroup } from "./SquareGroup";
import { randomColor } from "./util";

export class Point{
   readonly x:number
   readonly y:number
}


export interface IWiver{
    show():void;
    remove():void;
}
export enum Size{
    width=30,
    height=30
}
export enum GameSize{
    column = 14,
    row=20,
}
/**
 *           (0,-1)
 *  (-1,0)   (0,0) (1,0)
 * 
顺时针旋转
        (0,-1)<--(-1,0)
        (0, 0)<--(0,0)  (1,0)<---(0,-1)
        (0, 1)<--(1,0)

        (-y, x)

 */
export class Tshap extends SquareGroup{
    constructor(center:Point){
        super([{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}] ,center,randomColor());
    }
}
// export const  Tshap:Point[] = [{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}];
/**
 * 
 *          (0,-1)
 *  (-1,0)   (0,0) (1,0)
 *           
 *          (0,-1)
 *    (-1,0)(0,0)
 *          (0,1)
 *        
 */
export class TshapMirror extends SquareGroup{
    constructor(center:Point){
        super([{x:0,y:1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}] ,center,randomColor());
    }
}
// export const  TshapMirror:Point[] = [{x:0,y:1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}];
/**
 *                 (1,1)
 *  (-1,0)   (0,0) (1,0)
 * 
 *               (0,1)
 *               (0,0)   
 *       (-1,-1) (0,-1)              
 *        
 */      
export class  Lshap extends SquareGroup{
    constructor(center:Point){
        super([{x:1,y:1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}] ,center,randomColor());
    }
}
// export const Lshap:Point[] = [{x:1,y:1},{x:-1,y:0},{x:0,y:0},{x:1,y:0}];
/**
 *  (-1,0)(0,0)
 *        (0,1)
 *        (0,2)
 *         
 *                  
 *    (0,0)(1,0)(2,0)
 *    (0,1)
 *    (y,-x)
 */
export class  LshapMirror extends SquareGroup{
    constructor(center:Point){
        super([{x:-1,y:0},{x:0,y:0},{x:0,y:1},{x:0,y:2}] ,center,randomColor());
    }
}
// export const LshapMirror:Point[] = [{x:-1,y:0},{x:0,y:0},{x:0,y:1},{x:0,y:2}];
/**
 *  (-1,0)  (0,0) (1,0) (2,0)
 * 
 * (0,-1)  (0,0) (0,1) (0,2)
 */
export class  lshap extends SquareGroup{
    constructor(center:Point){
        super( [{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}],center,randomColor());
    }
    rotate(){
        super.rotate();
        this.cloak = !this.cloak;
    }
}
// export const lshap:Point[] = [{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}];
/**
 * (0,0) (1,0)
 * (0,1) (1,1)
 */
// export const Sshap:Point[] = [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}];
export class   Sshap extends SquareGroup{
    constructor(center:Point){
        super([{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],center,randomColor());
    }
    rotate(){
        
    }
}
/**
 *         (0,1)(1,1)
 *  (-1,0)(0,0)
 *  
 */
export class   SSshap extends SquareGroup{
    constructor(center:Point){
        super([{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:-1,y:0}],center,randomColor());
    }
    rotate(){
        super.rotate();
        this.cloak = !this.cloak;
    }
}
export const Shaps =[
    Tshap,
    TshapMirror,
    Lshap,
    LshapMirror,
    Sshap,
    lshap,
    SSshap
]
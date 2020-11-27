import { IWiver, Point } from "./Types";

export class Square{
    private _point:Point;
    private _color:string;
    private _IWiver:IWiver ;
    constructor(point:Point,color:string){
        this._point = point;
        this._color = color;
    }
    getColor(){
        return this._color;
    }
    getPoint(){
        return  this._point;
    }
    setIWiver(iv:IWiver){
        this._IWiver = iv;
        this._IWiver.show();
    }
    getIWiver(){
        return this._IWiver;
    }
    setPoint(point:Point){
        this._point = point;
        if(this._IWiver){
            this._IWiver.show();
        }
    }
}
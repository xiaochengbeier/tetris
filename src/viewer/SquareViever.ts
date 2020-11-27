import { Square } from "../Square";
import { IWiver, Size } from "../Types";
import $ from "jquery"
export class SquareViewer implements IWiver{
    private dom:JQuery<HTMLElement>;
    constructor(
        private square:Square,
        private fatherDmo:JQuery<HTMLElement>
    ){

    }
    show(): void {
       if(this.dom == null){
          this.dom = $("<div></div>");
          this.dom.css({
              position:"absolute",
              height:Size.height,
              width:Size.width,
              border:"1px solid yellow",
              backgroundColor:this.square.getColor(),
          }).appendTo(this.fatherDmo);
       }
       this.dom.css({
           left:this.square.getPoint().x * Size.height,
           top:this.square.getPoint().y * Size.height
       })
    }
    remove(): void {
        this.dom.remove();
    }
    
}
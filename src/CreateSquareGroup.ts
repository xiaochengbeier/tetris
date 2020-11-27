import { SquareGroup } from "./SquareGroup";
import { Point, Shaps } from "./Types";
import { ruandom } from "./util";

export function createSquareGroup(point:Point):SquareGroup{
    //随机获得一个类型
    let randmo = ruandom(0,Shaps.length);
    let shap = Shaps[randmo];
    let squaGroup = new shap(point);
   return squaGroup;
}
const color = ["red","blue","pink","green","white","orange"];
export function randomColor(){
    let rand = Math.floor(Math.random()*color.length);
    return color[rand];
}

export function ruandom(min:number,max:number){
    let ex = max - min;
    return Math.floor(Math.random()*ex + min);
}
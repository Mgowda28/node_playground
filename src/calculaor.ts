export class Calculator{
 add(a:number,b:number){
    return a+b;
 }
 subtract(a:number,b:number){
    return a-b;
 }
 multiply(a:number,b:number){
    return a*b;
 }
 divide(a:number,b:number){
    if(b!=0){
        return a/b;
    }
    else{
        return "b is 0";
    }
 }
}



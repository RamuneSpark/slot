//画面の大きさを決めます
const screenWidth = 1080;
const screenHeight = 2000;

let screenLong;

if(screenWidth >= screenHeight){
    
screenLong = "width";
    
}else{
    
screenLong = "height";
    
}

let windowWidthBasic = null;
let windowHeightBasic = null;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let ri = 0;
let screenScale = 40;

const rotate_switch = ["0","90"];

function monitorResize(){

phoneCheck();


if(windowWidthBasic !== window.innerWidth || windowHeightBasic !== window.innerHeight){
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

    
if((windowWidth >= windowHeight && screenLong == "width")||(windowWidth <= windowHeight && screenLong == "height")){
    
ri = 0;
    
}else{
    
//windowHeight = window.innerWidth;
//windowWidth = window.innerHeight;
ri = 0;
    
}
    
if(windowWidth/windowHeight >= screenWidth / screenHeight){
    //ウィンドウが横長な時
    
    //縦を軸に取る
    screenScale = (windowHeight / screenHeight) * 100;
    
}else{
   
    screenScale = (windowWidth / screenWidth) * 100;
    
}


transform(screen,Center,Center,rotate_switch[ri],screenScale)   

windowWidthBasic = window.innerWidth;
windowHeightBasic = window.innerHeight;

}


}
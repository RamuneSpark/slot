let dcy = -300;
let dct = 3000;
let dco = 0;

let div_controller = [];
for(let i = 1; i <= Player; i++){
document.write( "<div id= controller"+i+"> </div>" );
div_controller[i] = document.getElementById( "controller"+i );
defaultSet(div_controller[i],screen);
////プロパティ
putXY(div_controller[i],100*i+800,dcy)
translate(div_controller[i], Left,Top)
div_controller[i].style.zIndex = 1000000000;
div_controller[i].style.mixBlendMode = "normal";
////出力
setImage(div_controller[i],"");
}

let div_controllerType = [];
for(let i = 1; i <= Player; i++){
document.write( "<div id= controllerType"+i+"> </div>" );
div_controllerType[i] = document.getElementById( "controllerType"+i );
defaultSet(div_controllerType[i],screen);
////プロパティ
putXY(div_controllerType[i],100*i+800,dcy)
translate(div_controllerType[i], Left,Top)
div_controllerType[i].style.zIndex = 1000000001;
div_controllerType[i].style.mixBlendMode = "normal";
////出力
setImage(div_controllerType[i],"");
}



function displayController(){
    
 
    if(dct == 0){
     dcy = -300;  
    dco = 1;
    }
    
    if(dct < 3000){
        dct++;
        dcy += 20;
  
    }
    
    
    if(dcy >= 20){
        dcy = 20;
    }
    
    if(dct > 220){
        dco -= 0.1;
    }
    
    if(dco < 0){
        dct = 3000;
        dcy = -300;
        dco = 0;
    }
    
    for(let i = 1; i <= Player; i++){
        
    if(dct != 3000){
    setImage(div_controller[i],"sys/"+i+"P.png");
    
    if(i == kPlayer){
    setImage(div_controllerType[i],"sys/keyboard.png");
    }else if(padID[i] !== null){
    setImage(div_controllerType[i],"sys/gamepad.png");
    }else{
    Remove(div_controllerType[i]);
    }
    }else{
    Remove(div_controllerType[i]);
    Remove(div_controller[i]);
    }
    
    putXY(div_controller[i],100*i+800,dcy)
    putXY(div_controllerType[i],100*i+800,dcy)
        
    div_controller[i].style.opacity = dco;
    div_controllerType[i].style.opacity = dco;
        
    }
    
    
    
    
}
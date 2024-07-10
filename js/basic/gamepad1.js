let connectedGamepadIndex = [null,null,null,null,null,null];
let loopID;
let pad = [null,null,null,null,null,null];
let padID = [null,null,null,null,null,null];

let Stick = {
    L: {
        V:[],H:[]
    },
    R: {
        V:[],H:[]
    }
}

function kPlayCheck(){
    
    for(let i = 1; i <= Player; i++){
        
        if(padID[i] == null){
            kPlayer = i;
            break;
        }
        
    }
    
}



addEventListener("gamepadconnected", (e) => {
    if((e.gamepad.id).slice(0,18) !== "Surface Type Cover"){
    connectedGamepadIndex[kPlayer] = e.gamepad.index; 
    pad[kPlayer] = e.gamepad;
    padID[kPlayer] = e.gamepad.id;
    kPlayCheck();
   // console.log(e.gamepad)
    dct = 0;
        if(loopID == undefined){
    loopID = requestAnimationFrame(loop);
        }
}else{
}
});

addEventListener("gamepaddisconnected", (e) => {
    let ejectIndex = e.gamepad.index;
    let ejectNumber = null;
    let ejectController = e.gamepad.id;
    
     for(let i = 1; i <= Player; i++){
     
        if(ejectController === padID[i] && ejectIndex === connectedGamepadIndex[i]){
            
            ejectNumber = i;
            break;
            
        }
        
    }
    
  //  console.log(ejectNumber)
    
    connectedGamepadIndex[ejectNumber] = null;
    pad[ejectNumber] = null;
    padID[ejectNumber] = null;
    
    keyReset(ejectNumber);
    
    kPlayCheck();
    dct = 0;
    
    if(padID[1] == null && padID[2] == null && padID[3] == null && padID[4] == null && padID[5] == null){
        cancelAnimationFrame(loopID);
        loopID = undefined;
    }
    
});

// standardタイプのコントローラのマッピング
const BUTTON_A_INDEX     = 1;
const BUTTON_B_INDEX     = 0;
const BUTTON_X_INDEX     = 3;
const BUTTON_Y_INDEX     = 2;
const BUTTON_SELECT_INDEX  = 8;
const BUTTON_START_INDEX = 9;
const BUTTON_UP_INDEX    = 12;
const BUTTON_DOWN_INDEX  = 13;
const BUTTON_LEFT_INDEX  = 14;
const BUTTON_RIGHT_INDEX = 15;
const BUTTON_HOME_INDEX  = 16;
const BUTTON_L_INDEX    = 4;
const BUTTON_R_INDEX    = 5;
const BUTTON_ZL_INDEX    = 6;
const BUTTON_ZR_INDEX    = 7;

const AXIS_L_HORIZONTAL_INDEX = 0;
const AXIS_L_VERTICAL_INDEX = 1;
const AXIS_R_HORIZONTAL_INDEX = 2;
const AXIS_R_VERTICAL_INDEX = 3; 

 function loop(){ 
      
    
    // ゲームパッドの入力情報を毎フレーム取得
    let gamepads = navigator.getGamepads();
    let gp = [];
 
     for(let i = 0; i < 4; i++){
     gp[i] = gamepads[i];
     }
     
    // console.log(gp[0])
     
     let Button = {
     a: [],
     b: [],
     x: [],
     y: [],
     start: [],
     select: [],
     up: [],
     down: [],
     left: [],
     right: [],
     l: [],
     r: [],
     zl: [],
     zr: []
         
     }
    
let Axis = {
    L: {
        Horizontal: [], 
        Vertical: []
    },
    R: {
        Horizontal: [], 
        Vertical: []
    }
}
     

    
      
     for(let i = 1; i <= 4; i++){
         
         if(padID[i] !== null){
         
    // ボタンが押されているかどうかを取得
    
     
             
   gamepadInput(i,Button,gp,gamepads,Axis);
     }
     }
    
     requestAnimationFrame(loop);
     
 }



function keyReset(e){
    
    lrk[e] = false;
    udk[e] = false;
    
for(let i2 = 0; i2 < bt.length; i2++){
    k[bt[i2]][e] = false;
    
}

    
    
}
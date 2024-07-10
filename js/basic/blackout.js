//画像
const screen = document.getElementById( "screen" );
screen.style.opacity = 1;

let scene;
let nextScene = undefined;

let bs = 101; //100暗転、101暗転中、101ブラックイン
let shift = 0; //シーン内の暗転を伴わない遷移


let change = 0;
let change_level = 0.1;
let change_time = 0;

function blackout(){

if(nextScene != undefined　&& bs != 100 && bs != 101 && bs != -100){
    bs = 100;
}
    
    if(bs == 100){
        change -= change_level;
    
        if(change <= 0){
            change = 0;
            bs = 101;
        }
    
    }else if(bs == 101){
        
                  change_time++;
        
        if(change_time >= fps){
            
            scene = nextScene;
            
            change_time = 0;
            bs = -100;
            shift = 0;
            RemoveAll();   
        }
    
    }else if(bs == -100){
        
           change += change_level;
    
        if(change >= 1){
            change = 1;
            bs = 0;
            nextScene = undefined;
        }
        
    }

    
    
    screen.style.opacity = change;
}
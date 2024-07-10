const Player = 5; //ゲームの参加可能人数

let kPlayer = 1;

let lrk = [];
let udk = [];
let k = [];

const bt = ["A","B","X","Y","Start","Select","L1","R1","L2","R2"];

for(let i = 0; i < bt.length; i++){
   
    k[bt[i]] = [];
    
}


for(let i = 1; i <= Player; i++){
 
    lrk[i] = false;
    udk[i] = false;
    
for(let i2 = 0; i2 < bt.length; i2++){
    k[bt[i2]][i] = false;
    
}
}


//ボタン押下
 document.onkeydown = key_down;
 function key_down( e ){

 }

//ボタン離上
document.onkeyup = key_up;
function key_up( e ){
   
}
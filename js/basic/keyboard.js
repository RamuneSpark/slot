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

 e.preventDefault( );
let key = e.keyCode;
let lrkey = e.keyCode;
let udkey = e.keyCode;
let sidekey = e.keyCode;

     
 if( lrkey == 37 || lrkey == 65 ){
   lrk[kPlayer] = "left";
 }
 if( lrkey == 39 || lrkey == 68 ){
   lrk[kPlayer] = "right";
 }
 if( udkey == 38 || udkey == 87 ){
   udk[kPlayer] = "up";
 }
 if( udkey == 40 || udkey == 83 ){
   udk[kPlayer] = "down";
 }  
if(key == 13 ||  key == 90 ){ //Enterキー・Zキー
  k["A"][kPlayer] = true;
}  
if( key == 27 || key == 8 || key == 88){//ESCキー・BackSpace・Xキー
  k["B"][kPlayer] = true;
 }

if( key == 67 || key == 221 ){//Cキー・]キー
  k["Y"][kPlayer] = true;
 }
if( key == 86 || key == 219 ){//Vキー・[キー
  k["X"][kPlayer] = true;
 }

if( sidekey == 49){//1キー
  k["L1"][kPlayer] = true;
 }

if( sidekey == 48){//0キー
  k["R1"][kPlayer] = true;
 }

if( sidekey == 50){//2キー
  k["L2"][kPlayer] = true;
 }
     
if( sidekey == 57){//9キー
  k["R2"][kPlayer] = true;
 }

     
 if( key == 32 ){ //Spaceキー
   k["Start"][kPlayer] = true;
 }
     
if( key == 116 ){ //F5キー
   k["Select"][kPlayer] = true;
 }  
       
     
     
 }

//ボタン離上
document.onkeyup = key_up;
function key_up( e ){

 e.preventDefault( );
    
let key = e.keyCode;
let lrkey = e.keyCode;
let udkey = e.keyCode;
let sidekey = e.keyCode;


 if( ( lrkey == 37 || lrkey == 65 ) && lrk[kPlayer] == "left" ){
   lrk[kPlayer] = false;
 }
 if( ( lrkey == 39 || lrkey == 68 ) && lrk[kPlayer] == "right" ){
   lrk[kPlayer] = false;
 }
 if( ( udkey == 38 || udkey == 87 ) && udk[kPlayer] == "up" ){
   udk[kPlayer] = false;
 }
 if( ( udkey == 40 || udkey == 83 ) && udk[kPlayer] == "down"){
   udk[kPlayer] = false;
 }
    
if((key == 13 ||  key == 90) && k["A"][kPlayer] == true){ //Enterキー・Zキー
        k["A"][kPlayer] = false;
}  
if(( key == 27 || key == 8 || key == 88 ) && k["B"][kPlayer] == true){//ESCキー・BackSpace・Xキー
        k["B"][kPlayer] = false;
 }

if(( key == 67 || key == 221 ) && k["Y"][kPlayer] == true){//Cキー・][kPlayer]キー
        k["Y"][kPlayer] = false;
 }
if(( key == 86 || key == 219 ) && k["X"][kPlayer] == true){//Vキー・[キー
        k["X"][kPlayer] = false;
 }

if(( sidekey == 49) && k["L1"][kPlayer] == true){//1キー
        k["L1"][kPlayer] = false;
 }

if(( sidekey == 48) && k["R1"][kPlayer] == true){//0キー
        k["R1"][kPlayer] = false;
 }

if(( sidekey == 50) && k["L2"][kPlayer] == true){//2キー
        k["L2"][kPlayer] = false;
 }
     
if(( sidekey == 57) && k["R2"][kPlayer] == true){//9キー
        k["R2"][kPlayer] = false;
 }

     
 if(( key == 32 ) && k["Start"][kPlayer] == true){ //Spaceキー
   k["Start"][kPlayer] = false;
 }
     
if(( key == 116 ) && k["Select"][kPlayer] == true){ //F5キー
   k["Select"][kPlayer] = false;
 }  
    
    
}
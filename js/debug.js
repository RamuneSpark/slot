let debug_message = [];

let div_debug = [];

for(let i = 0; i <=Player+1; i++){
document.write( "<div id= debug"+i+"> </div>" );
div_debug[i] = document.getElementById( "debug"+i );
defaultSet(div_debug[i],screen);
////プロパティ
    if(i == Player+1){
putXY(div_debug[i],0,"100%")
translate(div_debug[i],Left,Bottom);
    }else if(i == 0){
putXY(div_debug[i],"100%","100%")
translate(div_debug[i],Right,Bottom);
             }else{
putXY(div_debug[i],((i-1)*20)+"%",20)
translate(div_debug[i],Left,Top);
    }

if(i == 0){
fontSet(div_debug[i],"#FFFFFF","Higashi","30","normal","right")
             }else{
fontSet(div_debug[i],"#FFFFFF","Higashi","30","normal","left")
             }

    
    
div_debug[i].style.zIndex = 10000;
////出力
setText(div_debug[i],"");
}


function debugMessage(){
    /*
    //ここにメッセージを入れてください！
  //   debug_message[0] = mouseX+"_"+mouseY+"<br>"+mouseC;
  
    //debug_message[Player+1] = "padID 1_"+padID[1]+"<br>padID 2_"+padID[2]+"<br>padID 3_"+padID[3]+"<br>padID 4_"+padID[4]+"<br>padID 5_"+padID[5]+"<br>"+kPlayer;
  
    
  for(let i = 1; i <= Player; i++){
   debug_message[i] = i+" Player"+"<br>"+
       "<br>AA_"+k["A"][i]+
       "<br>BB_"+k["B"][i]+
       "<br>XX_"+k["X"][i]+
       "<br>YY_"+k["Y"][i]+
       "<br>L1_"+k["L1"][i]+
       "<br>R1_"+k["R1"][i]+
       "<br>L2_"+k["L2"][i]+
       "<br>R2_"+k["R2"][i]+
       "<br>D1_"+lrk[i]+
      "<br>D2_"+udk[i]+
       "<br>START_"+k["Start"][i]+
      "<br>SELECT_"+k["Select"][i]+
      "<br>L_Ax_H_"+Stick.L.H[i]+
       "<br>L_Ax_V_"+Stick.L.V[i]+
       "<br>R_Ax_H_"+Stick.R.H[i]+
       "<br>R_Ax_V_"+Stick.R.V[i];
  
  }
    */
}

function debug(){
    /*
    debugMessage();
    
    for(let i = 0; i <= Player+1; i++){
    setText(div_debug[i],debug_message[i])
    }
*/
}


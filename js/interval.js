//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
    setImage(div_bg,"image/bg.jpg")
    

    
    for(let i = 0; i < 3; i++){
    number[i] = Math.floor(Math.random() * 10);
            

        setText(div_texts[i],number[i]);
    }
   
    

    
}

let number = [0,0,0];

let div_texts = [];
for(let i = 0; i < 3; i++){
document.write( "<div id= texts"+i+"> </div>" );
div_texts[i] = document.getElementById( "texts"+i );
defaultSet(div_texts[i],screen);
////プロパティ
putXY(div_texts[i],(25*(i+1))+"%","50%")
translate(div_texts[i], Center,Center)
fontSet(div_texts[i],"#FFFFFF","Higashi","100","normal","right")
div_texts[i].style.zIndex = 3;
////出力
setText(div_texts[i],"");
}
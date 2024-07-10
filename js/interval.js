//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
    setImage(div_bg,"image/bg.jpg")
    

    
    for(let i = 0; i < 3; i++){

    if(slot[i] === 0){
        number[i] = Math.floor(Math.random() * 10);
    }

        setText(div_texts[i],number[i]);
    }
   
    

    
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// /?id=aaa


let number = [0,0,0];
let slot = [0,0,0];

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

let data = localStorage.getItem("suacShokudo");

if(data !== null || data !== undefined){

    if(data.y === year && data.m === month && data.d === date){

        number = data.num;
        slot = data.sl;

    }else{

        localStorage.removeItem("suacShokudo")

    }

}

if((id == 0 || id == 1 || id == 2 ) && slot[id] === 0){

    slot[id] = 1;
    number[id] = Math.floor(Math.random() * 10);
    save();

}

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

function save(){

    localStorage.setItem("suacShokudo",JSON.stringify({y:year,m:month,d:date,sl:slot,num:number}))


}


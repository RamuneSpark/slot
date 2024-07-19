//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
    setImage(div_bg,"image/bg.png")
    

    if(t%2 === 0){

    for(let i = 0; i < 3; i++){

        slotTimer[i]++;

    if(slot[i] === 0 && slotTimer[i] >= slotTimerMax[i]){
        number[i] = Math.floor(Math.random() * 10);
        slotTimer[i] = 0;

    }else if(slot[i] === 1 && slotTimer[i] >= slotTimerMax[i]){
        number[i] = Math.floor(Math.random() * 10);
        slow++;
        slotTimer[i] = 0;
  

        if(slow >= slowTime.length){
            slot[i] = 2;

        }else{
            slotTimerMax[i] = slowTime[slow];
      
        }

    }if(slot[i] === 2){
        number[i] = Math.floor(Math.random() * 10);
        slot[i] = 3;
        save();
    }

        setImage(div_slotArts[i],"image/new"+number[i]+".png");
    }
}
   
    t++;
    
}

let t = 0;
let x = 2;



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
// /?id=aaa

id = Number(id);

if(id === null){ 
}

let slow = 0;

const slowTime = slowTimeSet(); 

function slowTimeSet(){

let a = [];
let j = 0;

for(let i = 2; i <= 7; i++){

    if(i === 2){
        for(let i2 = 0; i2 < 16; i2++){
            a[j] = i;
            j++;
        }
    }else if(i === 3){
        for(let i2 = 0; i2 < 8; i2++){
            a[j] = i;
            j++;
        }
    }else if(i === 4){
        for(let i2 = 0; i2 < 4; i2++){
            a[j] = i;
            j++;
        }
    }else if(i === 5 || i === 6){
            a[j] = i;
            j++;
    }else if(i === 7){
        a[j] = 25;
        j++;
}



}

return a;


}



let number = [0,0,0];
let slot = [0,0,0];

let slotTimer = [2,2,2];
let slotTimerMax = [2,2,2];

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

let data = localStorage.getItem("suacShokudo");
data = JSON.parse(data);

if(data !== null && data !== undefined){

    if(data.y === year && data.m === month && data.d === date && id !== 4622){

        number = data.num;
        slot = data.sl;

    }else{

        localStorage.removeItem("suacShokudo")

    }

}

if((id == 0 || id == 1 || id == 2 ) && slot[id] === 0){

    slot[id] = 1;
    save();
    

}

let div_slotArts = [];
for(let i = 0; i < 3; i++){
document.write( "<div id= slotArts"+i+"> </div>" );
div_slotArts[i] = document.getElementById( "slotArts"+i );
defaultSet(div_slotArts[i],screen);
////プロパティ
transform(div_slotArts[i], Center,Center,0,12)
div_slotArts[i].style.zIndex = 3;
////出力
setText(div_slotArts[i],"");
}

let div_slotArtsLoad = [];
for(let i = 0; i < 10; i++){
    document.write( "<div id= slotArtsLoad"+i+"> </div>" );
    div_slotArtsLoad[i] = document.getElementById( "slotArtsLoad"+i );
    screen.appendChild(div_slotArtsLoad[i]);
    ////プロパティ
    div_slotArtsLoad[i].style.opacity = 0;
    ////出力
    setText(div_slotArtsLoad[i],"image/new"+number[i]+".png");
}

putXY(div_slotArts[0],(29-1.5)+"%","51.5%")
putXY(div_slotArts[1],(50-1.5)+"%","51.5%")
putXY(div_slotArts[2],(71-1.5)+"%","51.5%")

function save(){

    localStorage.setItem("suacShokudo",JSON.stringify({y:year,m:month,d:date,sl:slot,num:number}))


}


//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
    setImage(div_bg,"image/bg.png")
    




    for(let i = 0; i < 3; i++){

        if(t%2 === 0){
        slotTimer[i]++;

        let newArt = 0;

    if(slot[i] === 0 && slotTimer[i] >= slotTimerMax[i]){


        
        
        while(true){

        newArt = Math.floor(Math.random() * 10);        

        if(newArt !== number[i]){
        number[i] = newArt;
        break;
        }

        }

        slotTimer[i] = 0;

    }else if(slot[i] === 1 && slotTimer[i] >= slotTimerMax[i]){
        
        while(true){

        newArt = Math.floor(Math.random() * 10);        

        if(newArt !== number[i]){
        number[i] = newArt;
        break;
        }

        }

        slow[i]++;
        save();
        slotTimer[i] = 0;
  

        if(slow[i] >= slowTime.length){
            slot[i] = 2;

        }else{
            slotTimerMax[i] = slowTime[slow[i]];
      
        }

    }if(slot[i] === 2){
        
        while(true){

        newArt = Math.floor(Math.random() * 10);        

        if(newArt !== number[i]){
        number[i] = newArt;
        break;
        }

        }


        slot[i] = 3;
        save();
    }

    }

    if(slot[i] === 3){

        setImage(div_slotArtsStop[i],"image/light.png");
        div_slotArtsStop[i].style.filter = 'brightness('+(150+Math.sin(0.2*t)*50)+'%)';
        div_slotArtsStop[i].style.opacity = t%2; 

        transform(div_slotArts[i],Center,Center,0,13+Math.sin(0.2*t)*1)
        div_slotArts[i].style.filter = 'brightness('+(100+Math.sin(0.2*t)*8)+'%)';
      
    }

        setImage(div_slotArts[i],"image/new"+number[i]+".png");
    

}
   
    t++;
    
}

let t = 0;
let t2 = 0;
let x = 2;



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
// /?id=aaa



if(id === null){ 
    //id = 1;
}else{
    id = Number(id);
}


let slow = [0,0,0];

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

//let slotScale = [0,0,0];

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
        slow = data.slw;

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
setImage(div_slotArts[i],"");
}

let div_slotArtsStop = [];
for(let i = 0; i < 3; i++){
document.write( "<div id= slotArtsStop"+i+"> </div>" );
div_slotArtsStop[i] = document.getElementById( "slotArtsStop"+i );
defaultSet(div_slotArtsStop[i],screen);
////プロパティ
transform(div_slotArtsStop[i], Center,Center,0,18)
div_slotArtsStop[i].style.zIndex = 3;
////出力
setImage(div_slotArtsStop[i],"");
}


putXY(div_slotArts[0],(29-1.5)+"%","51.5%")
putXY(div_slotArts[1],(50-1.5)+"%","51.5%")
putXY(div_slotArts[2],(71-1.5)+"%","51.5%")

putXY(div_slotArtsStop[0],(29-1.5)+"%","49%")
putXY(div_slotArtsStop[1],(50-1.5)+"%","49%")
putXY(div_slotArtsStop[2],(71-1.5)+"%","49%")

function save(){

    localStorage.setItem("suacShokudo",JSON.stringify({y:year,m:month,d:date,sl:slot,num:number,slw:slow}))


}

let div_slotArtsLoad = [];
for(let i = 0; i < 10; i++){
    document.write( "<div id= slotArtsLoad"+i+"> </div>" );
    div_slotArtsLoad[i] = document.getElementById( "slotArtsLoad"+i );
    screen.appendChild(div_slotArtsLoad[i]);
    ////プロパティ
    div_slotArtsLoad[i].style.opacity = 0;
    div_slotArtsLoad[i].style.position = "absolute";
    ////出力
    setImage(div_slotArtsLoad[i],"image/new"+i+".png");
}
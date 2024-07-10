let lCount = [];
let rCount = [];
let uCount = [];
let dCount = [];

//押したタイミング（長押し有効）
let lm = [];
let rm = [];
let um = [];
let dm = [];

let lCount_1t = [];
let rCount_1t = [];
let uCount_1t = [];
let dCount_1t = [];


//押したタイミング（長押し無効）
let lm_1t = [];
let rm_1t = [];
let um_1t = [];
let dm_1t = [];

let kCount = [];
let kCount_1t = [];
let km = [];
let km_1t = [];

for(let i = 0; i < bt.length; i++){
   
    kCount[bt[i]] = [];
    kCount_1t[bt[i]] = [];
    km[bt[i]] = [];
    km_1t[bt[i]] = [];
    
}


for(let i = 1; i <= Player; i++){
 
lCount[i] = 0;
rCount[i] = 0;
uCount[i] = 0;
dCount[i] = 0;

lCount_1t[i] = 0;
rCount_1t[i] = 0;
uCount_1t[i] = 0;
dCount_1t[i] = 0;

lm[i] = false;
rm[i] = false;
um[i] = false;
dm[i] = false;
    
lm_1t[i] = false;
rm_1t[i] = false;
um_1t[i] = false;
dm_1t[i] = false;
    
for(let i2 = 0; i2 < bt.length; i2++){
kCount[bt[i2]][i] = 0;
kCount_1t[bt[i2]][i] = 0;
km[bt[i2]][i] = false;
km_1t[bt[i2]][i] = false;
    
}
}

//2回目決定までの時間
let k2ndTime = 40;

//3回目以降の決定反応時間
let k3rdTime = 8;

function hold_down(){
    
    holdDownDpad();
    
    holdDownButton();
    
}

function holdDownButton(){
 
     for(let i = 1; i <= Player; i++){ 
    
         for(let i2 = 0; i2 < bt.length; i2++){
      
     //…を長押し時　タイマーもどし
    if(kCount[bt[i2]][i] >= k2ndTime){ 
       kCount[bt[i2]][i] -= k3rdTime;
    kCount_1t[bt[i2]][i] -= k3rdTime;

   }
        
        //…を押している時
   if(k[bt[i2]][i] == true){ 
       kCount[bt[i2]][i]++;
       kCount_1t[bt[i2]][i]++;
   }else{
       kCount[bt[i2]][i] = 0;
       kCount_1t[bt[i2]][i] = 0
   }
        
        if(bs != 100 && bs != 101 && bs != -100){
         //…を押してすぐ　または　少し経った時
      if(kCount[bt[i2]][i] == 1 || kCount[bt[i2]][i] == k2ndTime){ 
            km[bt[i2]][i] = true;
      }else{
          km[bt[i2]][i] = false;
      }
        //…を押してすぐ 
        if(kCount_1t[bt[i2]][i] == 1){　//…を押してすぐ
              km_1t[bt[i2]][i] = true;
          }else{
                km_1t[bt[i2]][i] = false;              
          }
        }else{
            kCount[bt[i2]][i] = 0;
            km_1t[bt[i2]][i] = false; 
             }
      
             
             
             
         }
     }
}


function holdDownDpad(){
    
    for(let i = 1; i <= Player; i++){

        
        //左
     //…を長押し時　タイマーもどし
    if(lCount[i] >= k2ndTime){ 
       lCount[i] -= k3rdTime;
    lCount_1t[i] -= k3rdTime;

   }
        
        //…を押している時
   if(lrk[i] == "left"){ 
       lCount[i]++;
       lCount_1t[i]++;
   }else{
       lCount[i] = 0;
       lCount_1t[i] = 0
   }
        
        if(bs != 100 && bs != 101 && bs != -100){
         //…を押してすぐ　または　少し経った時
      if(lCount[i] == 1 || lCount[i] == k2ndTime){ 
            lm[i] = true;
      }else{
          lm[i] = false;
      }
        //…を押してすぐ 
        if(lCount_1t[i] == 1){　//…を押してすぐ
              lm_1t[i] = true;
          }else{
                lm_1t[i] = false;              
          }
        }else{
            lCount[i] = 0;
            lm_1t[i] = false;
        }
        
           
        
        //右
     //…を長押し時　タイマーもどし
    if(rCount[i] >= k2ndTime){ 
       rCount[i] -= k3rdTime;
    rCount_1t[i] -= k3rdTime;

   }
        
        //…を押している時
   if(lrk[i] == "right"){ 
       rCount[i]++;
       rCount_1t[i]++;
   }else{
       rCount[i] = 0;
       rCount_1t[i] = 0
   }
        
        if(bs != 100 && bs != 101 && bs != -100){
         //…を押してすぐ　または　少し経った時
      if(rCount[i] == 1 || rCount[i] == k2ndTime){ 
            rm[i] = true;
      }else{
          rm[i] = false;
      }
        //…を押してすぐ 
        if(rCount_1t[i] == 1){　//…を押してすぐ
              rm_1t[i] = true;
          }else{
                rm_1t[i] = false;              
          }
        }else{
            rCount[i] = 0;
            rm_1t[i] = false;
             }
        
           
        
        //下
     //…を長押し時　タイマーもどし
    if(dCount[i] >= k2ndTime){ 
       dCount[i] -= k3rdTime;
    dCount_1t[i] -= k3rdTime;

   }
        
        //…を押している時
   if(udk[i] == "down"){ 
       dCount[i]++;
       dCount_1t[i]++;
   }else{
       dCount[i] = 0;
       dCount_1t[i] = 0
   }
        
        if(bs != 100 && bs != 101 && bs != -100){
         //…を押してすぐ　または　少し経った時
      if(dCount[i] == 1 || dCount[i] == k2ndTime){ 
            dm[i] = true;
      }else{
          dm[i] = false;
      }
        //…を押してすぐ 
        if(dCount_1t[i] == 1){　//…を押してすぐ
              dm_1t[i] = true;
          }else{
                dm_1t[i] = false;              
          }
        }else{
            dCount[i] = 0;
            dm_1t[i] = false;
        }
        
           
        
        //上
     //…を長押し時　タイマーもどし
    if(uCount[i] >= k2ndTime){ 
       uCount[i] -= k3rdTime;
    uCount_1t[i] -= k3rdTime;

   }
        
        //…を押している時
   if(udk[i] == "up"){ 
       uCount[i]++;
       uCount_1t[i]++;
   }else{
       uCount[i] = 0;
       uCount_1t[i] = 0
   }
        
        if(bs != 100 && bs != 101 && bs != -100){
         //…を押してすぐ　または　少し経った時
      if(uCount[i] == 1 || uCount[i] == k2ndTime){ 
            um[i] = true;
      }else{
          um[i] = false;
      }
        //…を押してすぐ 
        if(uCount_1t[i] == 1){　//…を押してすぐ
              um_1t[i] = true;
          }else{
                um_1t[i] = false;              
          }
        }else{
            uCount[i] = 0;
            um_1t[i] = false;              
        }
        
           
        
    }
}
    
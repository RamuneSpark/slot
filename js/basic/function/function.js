//-------------------------------------------------------------------------------------------------
// 要素表示の関数
//-------------------------------------------------------------------------------------------------

//画像を表示します。element…要素、src…出力したい画像パス
function setImage(element,src){

    // div要素内の最初のimg要素を取得
    let imgElement = element.getElementsByTagName('img')[0];

    // img要素が存在しない場合は、新たに作成して追加
    if (!imgElement) {
        imgElement = document.createElement('img');
        element.appendChild(imgElement);
    }

    // 画像のsrc属性が新しいURLと異なる場合にのみ、src属性を新しいURLに書き換え
    if (imgElement.src !== src) {
        imgElement.src = src;
    }
    
}

//画像を表示します(widthプロパティあり)。element…要素、src…出力したい画像パス、widthSet…widthプロパティ
function setImageWidth(element,src,widthSet){

      // div要素内の最初のimg要素を取得
    let imgElement = element.getElementsByTagName('img')[0];

    // img要素が存在しない場合は、新たに作成して追加
    if (!imgElement) {
        imgElement = document.createElement('img');
        element.appendChild(imgElement);
    }

    // 画像のsrc属性が新しいURLと異なる場合にのみ、src属性を新しいURLに書き換え
    if (imgElement.src !== src) {
        imgElement.src = src;
    }

    // 画像のwidth属性が新しいwidthと異なる場合にのみ、width属性を新しいwidthに書き換え
    if (imgElement.width !== widthSet) {
        imgElement.width = widthSet;
    }
}


//文字を表示します。element…要素、text…出力したい文字
function setText(element,text){

    if(element.innerHTML !== "<nobr>"+text+"</nobr>"){
    element.innerHTML = "<nobr>"+text+"</nobr>";
    }
    
}

//element…要素　で　画像や文字を消します
function Remove(element){
 
    if (element.innerHTML !== "") {
      element.innerHTML = ""; 
  }
    
}

//-------------------------------------------------------------------------------------------------
// 要素位置・変形の関数
//-------------------------------------------------------------------------------------------------


//element…要素、x,y…置きたい座標(left, topプロパティ)、動かしたくないときは"no"と指定。
function putXY(element,x,y){ 
 
    if(x !== "no"){
element.style.left = x;
    }
    
    if(y !== "no"){
element.style.top = y;
    }
    
}

const Center = -50+"%";
const Left = "0%";
const Top = Left;
const Right = -100+"%";
const Bottom = Right;

//element…要素、x, y…ずらし（ずらしは、"-50%"などと記載するか、Leftを使ってください）
function translate(element,x,y){
    
    element.style.transform = "translate("+x+", "+y+") rotate(0deg) scale(100%)";
    
}

//element…要素、x, y…ずらし、r…回転角度（deg）、s…拡大率（%）
function transform(element,x,y,r,s){
    
    element.style.transform = "translate("+x+", "+y+") rotate("+r+"deg) scale("+s+"%)";
    
}

//-------------------------------------------------------------------------------------------------
// 文字編集の関数
//-------------------------------------------------------------------------------------------------

//フリガナをふります。
function Rb(e,f){
    
   return "<ruby>"+e+"<rt>"+f+"</rt></ruby>"
    
}

//element…要素、c…カラーコード、f…フォント、s…サイズ、b…太さ、a…align
function fontSet(element,c,f,s,b,a){

if(c == "green"){
    c = "#BFFFB0"
}else if(c == "blue"){
    c = "#AFD0FF"
}else if(c == "red"){
    c = "#FFC6BB"
}
    
if(element.style.color !== c){
element.style.color = c;
}
if(element.style.fontFamily !==　f){
element.style.fontFamily =　f;    
}   
if(element.style.fontSize !==　s){
element.style.fontSize =　s;
}
if(element.style.fontWeight !== b){
element.style.fontWeight = b;
}
if(element.style.textAlign !== a){
element.style.textAlign = a;
}
    
}

//element…要素、c…カラーコードのみ変更
function fontColorSet(element,c){

if(c == "green"){
    c = "#BFFFB0"
}else if(c == "blue"){
    c = "#AFD0FF"
}else if(c == "red"){
    c = "#FFC6BB"
}
    
if(element.style.color !== c){
element.style.color = c;
}   
}

//element…要素、f…ふちの太さ、c…ふちのカラーコード
function textEdge(element,f,c){
 
    if(f != 0){
    let s = [];
    
    for(let i = 1; i <= f; i++){
    
s[i] = Math.sqrt(i);

    }
    
if(c == "green"){
    c = "#17890B"
}else if(c == "blue"){
    c = "#012DD4"
}else if(c == "red"){
    c = "#CE2807"
}
        
       let edge = "";
    
    for(let i = 1; i <= f; i++){
        
        
        edge += ""+i+"px 0px 0px "+c+", "
            +(-i)+"px 0px 0px "+c+", "
            +"0px "+i+"px 0px "+c+", "
            +"0px "+(-i)+"px 0px "+c+",";
        
    }

     for(let i = 1; i <= f; i++){
        
         if(i != f){
      edge += ""+s[i]+"px "+s[i]+"px 0px "+c+", "
            +(-s[i])+"px "+s[i]+"px 0px "+c+", "
            +""+s[i]+"px "+(-s[i])+"px 0px "+c+", "
            +""+(-s[i])+"px "+(-s[i])+"px 0px "+c+",";
         }else{
           
        edge += ""+s[i]+"px "+s[i]+"px 0px "+c+", "
            +(-s[i])+"px "+s[i]+"px 0px "+c+", "
            +""+s[i]+"px "+(-s[i])+"px 0px "+c+", "
            +""+(-s[i])+"px "+(-s[i])+"px 0px "+c;
      
             
         }
         
         
      }
    
    if(element.style.textShadow !== edge){
    element.style.textShadow = edge;
    }
        
    }else if(f == 0){
     
        if(element.style.textShadow !== ""){
    element.style.textShadow = "";
    }
        
    }
    
}

//-------------------------------------------------------------------------------------------------
// 画像初期設定用関数
//-------------------------------------------------------------------------------------------------


let allDiv = [];

//画像の初期設定をする関数です。element…要素名、p…親要素
function defaultSet(element,p){
    
p.appendChild(element);
allDiv.push(element);
element.style.position = "absolute";
    
}

//-------------------------------------------------------------------------------------------------
// スマートフォン判定関数
//-------------------------------------------------------------------------------------------------


let phone;

//スマホなら変数phoneにtrue、違うならfalseを返します。
function phoneCheck(){
   if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    phone = true;
  } else {
      phone = false;
  }
}
phoneCheck();

//-------------------------------------------------------------------------------------------------
// ベクトル計算用関数
//-------------------------------------------------------------------------------------------------

let lastVec = {}; //「Vector系関数使用後の値の取り出し」以外には使わないでください。

//（fX,fY）→(tX,tY)の単位ベクトルを、グローバル変数(lastVec.x,lastVec.y)に返します。
function Vector(fX,fY,tX,tY){
    
    let tfX = tX - fX; //X座標距離
    let tfY = tY - fY; //Y座標距離
    
    let tf = tfX*tfX + tfY*tfY;
    
    tf = Math.sqrt(tf);
    
    if(tf == 0){
    lastVec.x = 0;
    lastVec.y = 1;
    lastVec.z = 1
        
        
    }else{
    lastVec.x = tfX/tf;
    lastVec.y = tfY/tf;
    lastVec.z = tf;
    }
        
 }

//（fX,fY）→(tX,tY)のベクトルを、グローバル変数(lastVec.x,lastVec.y)に返します。
function Vector2(fX,fY,tX,tY){
    
    let tfX = tX - fX; //X座標距離
    let tfY = tY - fY; //Y座標距離
    
    let tf = tfX*tfX + tfY*tfY;
    
    tf = Math.sqrt(tf);
    
    if(tf == 0){
    lastVec.x = 0;
    lastVec.y = 1;
    lastVec.z = 1
        
        
    }else{
    lastVec.x = tfX;
    lastVec.y = tfY;
    lastVec.z = tf;
    }
    
    
    
 }

//=（fX,fY）→(tX,tY)のベクトルを、上下左右のいずれかで判定します。
function Vector3(fX,fY,tX,tY){
    
    let tfX = tX - fX; //X座標距離
    let tfY = tY - fY; //Y座標距離
    
    let result;
    
   if(Math.abs(tfY)>Math.abs(tfX)){
            
            if(tfY>=0){
                result = "down";
            }else{
                result = "up";
            }
            
        }else if(Math.abs(tfY)<Math.abs(tfX)){
            
            if(tfX>0){
                result = "right";
            }else{
                result = "left";
            }
            
        }else{
          
            result = [];
            
            result[0] = "diagonal";
            
            if(tfY>=0){
                result[1] = "down";
            }else{
                result[1] = "up";
            }
            
            if(tfX>0){
                result[2] = "right";
            }else{
                result[2] = "left";
            }
            
            
        }
    
    console.log(result);
    
    return result;
        
        
    } 
   
    
//-------------------------------------------------------------------------------------------------
// 要素接触時発火関数
//-------------------------------------------------------------------------------------------------

//=要素e1とe2が少しでも重なったときに、resultにtrueを返します。
function touchElement(e1,e2){
    
    let rect = [];
    let upDown = false;
    let leftRight = false;
    let result = false;
    
    rect[1] = e1.getBoundingClientRect();
    rect[2] = e2.getBoundingClientRect();
    
    
    if(rect[1].top < rect[2].top){ //rect[1]が上に位置する
        rect[2] = e1.getBoundingClientRect();
        rect[1] = e2.getBoundingClientRect();
    }    
    
    if(rect[2].bottom > rect[1].top){
     upDown = true;   
    }
    
    rect[1] = e1.getBoundingClientRect();
    rect[2] = e2.getBoundingClientRect();
    
    
        if(rect[2].left < rect[1].left){ //rect[2]が左に位置する
        rect[2] = e1.getBoundingClientRect();
        rect[1] = e2.getBoundingClientRect();
    }    
    
    if(rect[1].right > rect[2].left){
     leftRight = true;   
    }
    
    if(leftRight == true && upDown == true){
        result = true;
    }else{
        result = false;
    }
    
    return result;
    
}

//=要素e1とe2が少しでも重なったときに、e1がe2に対してどの方向に属するかを伝えます。
function touchElement2(e1,e2){
    
    let rect = [];
    
    let touch = touchElement(e1,e2);
    let result = false;
    
    rect[1] = e1.getBoundingClientRect();
    rect[2] = e2.getBoundingClientRect(); 
    
    let el = []; el[1] = {}; el[2] = {};
    
    let x, y;
    
    if(touch == true){
     
        el[1].y = (rect[1].top + rect[1].bottom)/2;
        el[2].y = (rect[2].top + rect[2].bottom)/2;
        
        el[1].x = (rect[1].left + rect[1].right)/2;
        el[2].x = (rect[2].left + rect[2].right)/2;
        
        result = Vector3(el[2].x, el[2].y, el[1].x, el[1].y)
        
        
        
        
    }
    
    return result;
    
    
}
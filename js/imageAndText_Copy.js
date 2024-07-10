//コピペ・テスト用 画像
document.write( "<div id= element> </div>" );
const div_element = document.getElementById( "element" );
defaultSet(div_element,screen);
////プロパティ
putXY(div_element,0,0)
translate(div_element, Center,Center)
div_element.style.zIndex = 0;
div_element.style.mixBlendMode = "normal";
////出力
setImage(div_element,"");

//コピペ・テスト用 文字
document.write( "<div id= text> </div>" );
const div_text = document.getElementById( "text" );
defaultSet(div_text,screen);
////プロパティ
putXY(div_text,0,0)
translate(div_text,Left,Top);
fontSet(div_text,"#FFFFFF","Higashi","50","normal","right")
div_text.style.zIndex = 10000;
////出力
setText(div_text,"");

//コピペ・テスト用 配列画像
let div_elements = [];
for(let i = 0; i < 4; i++){
document.write( "<div id= elements"+i+"> </div>" );
div_elements[i] = document.getElementById( "elements"+i );
defaultSet(div_elements[i],screen);
////プロパティ
putXY(div_elements[i],100,100*i)
translate(div_elements[i], Left,Top)
div_elements[i].style.zIndex = 0;
div_elements[i].style.mixBlendMode = "normal";
////出力
setImage(div_elements[i],"");
}



//コピペ・テスト用 配列文字
let div_texts = [];
for(let i = 0; i < 4; i++){
document.write( "<div id= texts"+i+"> </div>" );
div_texts[i] = document.getelementById( "texts"+i );
defaultSet(div_texts[i],screen);
////プロパティ
putXY(div_texts[i],200,100*i)
translate(div_texts[i], Left,Top)
fontSet(div_texts[i],"#FFFFFF","Higashi","50","normal","right")
div_texts[i].style.zIndex = 0;
////出力
setText(div_texts[i],"");
}




//背景
document.write( "<div id= bg> </div>" );
const div_bg = document.getElementById( "bg" );
defaultSet(div_bg,screen);
////プロパティ
putXY(div_bg,"50%","50%")
translate(div_bg, Center,Center)
div_bg.style.zIndex = 0;
////出力
setImage(div_bg,"");

document.write( "<div id= test> </div>" );
const div_test = document.getElementById( "test" );
defaultSet(div_test,screen);
////プロパティ
putXY(div_test,0,0)
transform(div_test, Center,Center,0,100)
div_test.style.zIndex = 1001;
////出力
setImage(div_test,"");

document.write( "<div id= test2> </div>" );
const div_test2 = document.getElementById( "test2" );
defaultSet(div_test2,screen);
////プロパティ
putXY(div_test2,500,500)
transform(div_test2, Center,Center,0,100)
div_test2.style.zIndex = 1000;
////出力
setImage(div_test2,"");

let test = {x:100,y:100};
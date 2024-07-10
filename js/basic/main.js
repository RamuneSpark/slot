const fps = 50;
const fps2 = (1000/fps);
  
//ゲーム進行    

setTimeout(()=>{
const id = setInterval("move()", fps2 );    
},500)


function move( ) {    
    
    //画面サイズ調整
    monitorResize();
    
    //コントローラ
    displayController();
    
    //長押し判定関数
    hold_down();
    
    //実行
    run();
    
    //ブラックアウト関数
    blackout();
    
    //デバッグ
    debug();
    
    
}

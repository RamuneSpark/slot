//拡大無効


 document.body.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, {passive: false});

     //長タップ禁止
 
 
 
    window.oncontextmenu = function(e) {
     e.stopPropagation();
     return false;
};

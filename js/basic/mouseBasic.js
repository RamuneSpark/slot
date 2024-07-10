let mouseX;
let mouseY;
let mouseC = "no";

screen.addEventListener('mousedown', (e)=> {
    mouseC = "click!";
})

screen.addEventListener('mouseup', (e)=> {
    mouseC = "no";
})

screen.addEventListener('mousemove', (e)=> {
    e.preventDefault;
	mouseX = e.offsetX;
    mouseY = e.offsetY;
})
const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//ctx variables

//strokeStyle - color of the draw in canvas

ctx.strokeStyle = '#BADA55';
//lineJoin property - Interaction between drawns lines
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 5; 
let direction = false;




function draw(event){
	if(!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue},100%,50%)`
	ctx.lineWidth= `${lineWidth}`
	ctx.beginPath();
	ctx.moveTo(lastX,lastY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke()
	lastX = event.offsetX
	lastY = event.offsetY
	hue++;
	if(lineWidth >= 100 || lineWidth <= 1){
		direction=!direction
	}
	if(direction){
		lineWidth++
	}else{
		lineWidth--
	}
	console.log(lineWidth)
}


canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown',function(event){ 
	isDrawing = true
	lastX = event.offsetX
	lastY = event.offsetY
})
canvas.addEventListener('mouseup',function(){ isDrawing = false})
canvas.addEventListener('mouseout',function(){ isDrawing = false})
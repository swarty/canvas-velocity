document.addEventListener('DOMContentLoaded', function() {

	let canvasWr = document.querySelector('.canvas__wr');
	let canvas = document.createElement('canvas');

	// canvas style settings
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.left = '0';
	canvas.style.backgroundImage = 'url("./net.png")';
	canvas.style.width = '100%';
	canvas.style.height = '100%';

	// canvas append element to document
	canvas.width = canvasWr.clientWidth;
	canvas.height = canvasWr.clientHeight;
	canvasWr.appendChild(canvas);
	
	let ctx = canvas.getContext('2d');
	ctx.lineWidth = 10;


	function drawFunction(e) {
		let x = e.offsetX,
				y = e.offsetY;
		ctx.beginPath();
		ctx.fillRect(x - 5, y - 5, 10, 10);
	}

	function removeDrawOnMouse(){
		canvas.removeEventListener('mousemove', drawFunction)
	}

	// event on draw
	canvas.addEventListener('click', drawFunction)
	canvas.addEventListener('mousedown', function() {
		ctx.fillStyle = 'rgb(' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ',' + getRandomInt(0, 256) + ')';
		canvas.addEventListener('mousemove', drawFunction)
	})

	// event on stop draw
	canvas.addEventListener('mouseup', removeDrawOnMouse);
	canvas.addEventListener('mouseleave', removeDrawOnMouse)








	// random function
	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
	}

})
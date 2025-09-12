let canvas = document.getElementsByClassName('rain')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

function RainDrops(x, y, endy, velocity, opacity) {

	this.x = x;
	this.y = y;
	this.endy = endy;
	this.velocity = velocity;
	this.opacity = opacity;

	this.draw = function() {
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.y - this.endy);
		c.lineWidth = 1;
		c.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
		c.stroke();
	}

	this.update = function() {
		let rainEnd = window.innerHeight + 100;
		if (this.y >= rainEnd) {
			this.y = this.endy - 100;
		} else {
			this.y = this.y + this.velocity;
		}
		this.draw();
	}

}

let rainArray = [];

for (let i = 0; i < 140; i++) {
	let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	let rainYLocation = Math.random() * -500;
	let randomRainHeight = randomNum(10, 2);
	let randomSpeed = randomNum(20, .2);
	let randomOpacity = Math.random() * .55;
	rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}

function animateRain() {

	requestAnimationFrame(animateRain);
	c.clearRect(0,0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < rainArray.length; i++) {
		rainArray[i].update();
	}

}

animateRain();


// const canvas = document.querySelector('.rain');
// canvas.width = window.innerWidth / 2;
// canvas.height = window.innerHeight / 2;

// const ctx = canvas.getContext('2d');
// ctx.scale(2, 2);

// function randomNum(max, min) {
//   return Math.random() * (max - min) + min;
// }

// class RainDrop {
//   constructor(x, y, endy, velocity, opacity) {
//     this.x = x;
//     this.y = y;
//     this.endy = endy;
//     this.velocity = velocity;
//     this.opacity = opacity;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     ctx.lineTo(this.x, this.y - this.endy);
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
//     ctx.stroke();
//   }

//   update() {
//     const rainEnd = canvas.height * 2 + 100;
//     if (this.y >= rainEnd) {
//       this.y = this.endy - 100;
//     } else {
//       this.y += this.velocity;
//     }
//     this.draw();
//   }
// }

// const rainArray = [];
// const rainCount = 150; // увеличили количество капель

// for (let i = 0; i < rainCount; i++) {
//   const x = randomNum(window.innerWidth, 0);
//   const y = randomNum(-500, 0);
//   const height = randomNum(10, 2);
//   const speed = randomNum(15, 0.5);
//   const opacity = Math.random() * 0.5;
//   rainArray.push(new RainDrop(x, y, height, speed, opacity));
// }

// // FPS-лимитер
// let lastTime = 0;
// const fps = 40; // чуть выше для плавности
// const interval = 1000 / fps;

// function animate(time) {
//   requestAnimationFrame(animate);

//   const delta = time - lastTime;
//   if (delta < interval) return;

//   lastTime = time;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   rainArray.forEach(drop => drop.update());
// }

// animate();


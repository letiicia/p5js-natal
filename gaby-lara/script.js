/**
 * p5js boilerplate
 * 
 * 
 */
 
var floco1;
var floco2;
var floco3;
var floco4;
var floco1img;
var floco2img;
var floco3img;
var floco4img;
var estrela;
var posestrela;
var jingle;
var fundo;
var movimento = false;
var vetor
var flocom;
var floco5;
var floco6;
var floco7;
var floco8;
var floco8;
var floco9;
var floco10;
var floco11;
var floco12;
var floco13;
var floco14;
var floco15;
var floco16;
var floco17;
var floco18;
var floco19;
var floco20;
var floco21;
var floco22;
var floco23;
var floco24;

function preload (){
	floco1img = loadImage("floco1.png");
	floco2img = loadImage("floco2.png");
	floco3img = loadImage("floco3.png");
	floco4img = loadImage("floco4.png");
	estrela	= loadImage("estrela.png");
	fundo = loadImage("fundo.png");
	soundFormats('mp3');
	jingle = loadSound("jingle.mp3");
}   

function setup() {	
    jingle.play();
	jingle.setVolume(1.0);
	jingle.loop;
	createCanvas(900,400);
	posestrela = createVector(1100,1);
	floco1 = createVector(10,10);
	floco2 = createVector(60,10);
	floco3 = createVector(120,10);
	floco4 = createVector(160,10);
	floco5 = createVector(220,10);
	floco6 = createVector(260,10);
	floco7 = createVector(300,10);
	floco8 = createVector(340,10);
	floco9 = createVector(380,10);
	floco10 = createVector(400,10);
	floco11 = createVector(440,10);
	floco12 = createVector(480,10);
	floco13 = createVector(520,10);
	floco14 = createVector(560,10);
	floco15 = createVector(600,10);
	floco16 = createVector(640,10);
	floco17 = createVector(680,10);
	floco18 = createVector(720,10);
	floco19 = createVector(760,10);
	floco20 = createVector(800,10);
	floco21 = createVector(840,10);
	floco22 = createVector(880,10);
	floco23 = createVector(920,10);
	floco24= createVector(960,10);
	flocom = createVector(1,1);
	
}

function draw() {
	// pinta o fundo de preto
	background(fundo);
	image(estrela,posestrela.x,posestrela.y, 100,100);
	
	if(posestrela.x < -100) {
	   posestrela.x = 1400;
	   posestrela.y = 5;
	   movimento = false;
    }
	
	if(movimento) {
		posestrela.x -= 20;
		posestrela.y += 1;
	}	
	
	image(floco1img,floco1.x,floco1.y, 50,50);
	floco1.add(flocom);
	if(floco1.y > 500) {
	   floco1.y = 10;
	   floco1.x = 10;
	}
	image(floco2img,floco2.x,floco2.y, 50,50);
	floco2.add(flocom);
	if(floco2.y > 500) {
	   floco2.y = 10;
	   floco22.x = 10;
	}
	image(floco3img,floco3.x,floco3.y, 50,50);
	floco3.add(flocom);
	if(floco3.y > 500) {
	   floco3.y = 10;
	   floco3.x = 10;
	}
	image(floco4img,floco4.x,floco4.y, 50,50);
	floco4.add(flocom);
	if(floco4.y > 500) {
	   floco4.y = 10;
	   floco4.x = 10;
	}
	image(floco1img,floco5.x,floco5.y, 50,50);
	floco5.add(flocom);
	if(floco5.y > 500) {
	   floco5.y = 10;
	   floco5.x = 10;
	}
	image(floco2img,floco6.x,floco6.y, 50,50);
	floco6.add(flocom);
	if(floco6.y > 500) {
	   floco6.y = 10;
	   floco6.x = 10;
	}
	image(floco3img,floco7.x,floco7.y, 50,50);
	floco7.add(flocom);
	if(floco7.y > 500) {
	   floco7.y = 10;
	   floco7.x = 10;
	}
	image(floco4img,floco8.x,floco8.y, 50,50);
	floco8.add(flocom);
	if(floco8.y > 500) {
	   floco8.y = 10;
	   floco8.x = 10;
	}
	image(floco1img,floco9.x,floco9.y, 50,50);
	floco9.add(flocom);
	if(floco9.y > 500) {
	   floco9.y = 10;
	   floco9.x = 10;
	}
	image(floco2img,floco10.x,floco10.y, 50,50);
	floco10.add(flocom);
	if(floco10.y > 500) {
	   floco10.y = 10;
	   floco10.x = 10;
	}
	image(floco3img,floco11.x,floco11.y, 50,50);
	floco11.add(flocom);
	if(floco11.y > 500) {
	   floco11.y = 10;
	   floco11.x = 10;
	}
	image(floco4img,floco12.x,floco12.y, 50,50);
	floco12.add(flocom);
	if(floco12.y > 500) {
	   floco12.y = 10;
	   floco12.x = 10;
	}
	image(floco1img,floco13.x,floco13.y, 50,50);
	floco13.add(flocom);
	if(floco13.y > 500) {
	   floco13.y = 10;
	   floco13.x = 10;
	}
	image(floco2img,floco14.x,floco14.y, 50,50);
	floco14.add(flocom);
	if(floco14.y > 500) {
	   floco14.y = 10;
	   floco14.x = 10;
	}
	image(floco3img,floco15.x,floco15.y, 50,50);
	floco15.add(flocom);
	if(floco15.y > 500) {
	   floco15.y = 10;
	   floco15.x = 10;
	}
	image(floco4img,floco16.x,floco16.y, 50,50);
	floco16.add(flocom);
	if(floco16.y > 500) {
	   floco16.y = 10;
	   floco16.x = 10;
	}
	image(floco1img,floco17.x,floco17.y, 50,50);
	floco17.add(flocom);
	if(floco17.y > 500) {
	   floco17.y = 10;
	   floco17.x = 10;
	}
	image(floco2img,floco18.x,floco18.y, 50,50);
	floco18.add(flocom);
	if(floco18.y > 500) {
	   floco18.y = 10;
	   floco18.x = 10;
	}
	image(floco3img,floco19.x,floco19.y, 50,50);
	floco19.add(flocom);
	if(floco19.y > 500) {
	   floco19.y = 10;
	   floco19.x = 10;
	}
	image(floco4img,floco20.x,floco20.y, 50,50);
	floco20.add(flocom);
	if(floco20.y > 500) {
	   floco20.y = 10;
	   floco20.x = 10;
	}
	image(floco1img,floco21.x,floco21.y, 50,50);
	floco21.add(flocom);
	if(floco1.y > 500) {
	   floco1.y = 10;
	   floco1.x = 10;
	}
	image(floco2img,floco22.x,floco22.y, 50,50);
	floco22.add(flocom);
	if(floco22.y > 500) {
	   floco22.y = 10;
	   floco22.x = 10;
	}
	image(floco3img,floco23.x,floco23.y, 50,50);
	floco23.add(flocom);
	if(floco23.y > 500) {
	   floco23.y = 10;
	   floco23.x = 10;
	}
	   
	image(floco4img,floco24.x,floco24.y, 50,50);
	floco24.add(flocom);
	if(floco24.y > 500) {
	   floco24.y = 10;
	   floco24.x = 10;
	}
	
	
}

function mouseClicked() {
	if(posestrela.x = 1100) {
		movimento = true;
	}
}


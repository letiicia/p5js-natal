/**
 * p5js boilerplate
 * 
 * 
 */
var img, img_fundo;
var img_arvore;
var img_boneco;
var img_estrela;
var veloc_estrela;
var pos_estrela;
var pos_boneco;
var pos_arvore;
var mySound;
var img_floco1;
var pos_floco1;
var img_floco2;
var pos_floco2;
var img_floco3;
var pos_floco3;
var img_floco4;
var pos_floco4;
var img_floco5;
var pos_floco5;
var img_floco6;
var pos_floco6;
var img_floco7;
var pos_floco7;
var img_floco8;
var pos_floco8;
var img_floco9;
var pos_floco9;
var img_floco10;
var pos_floco10;
var img_floco11;
var pos_floco11;
var img_floco12;
var pos_floco12;
var img_floco13;
var pos_floco13;
var img_floco14;
var pos_floco14;
var img_floco15;
var pos_floco15;
var img_floco16;
var pos_floco16;
var img_floco17;
var pos_floco17;
var img_floco18;
var pos_floco18;
var img_floco19;
var pos_floco19;
var img_floco20;
var pos_floco20;
var lista=[];

function preload() {

     img_fundo = loadImage('paisagem.jpg');
     img_arvore = loadImage('arvonem.png');
     img_boneco = loadImage('bonecom.png');
     img_estrela = loadImage('estrelam.png');
     soundFormats('mp3');
     mySound = loadSound('Jingle-Bell-Rock.mp3');
     img_floco1 = loadImage ('floco1.png');
	 img_floco2 = loadImage ('floco2.png');
	 img_floco3 = loadImage ('floco3.png');
	 img_floco4 = loadImage ('floco4.png');
	 img_floco5 = loadImage ('floco1.png');
	 img_floco6 = loadImage ('floco2.png');
	 img_floco7 = loadImage ('floco4.png');
	 img_floco8 = loadImage ('floco3.png');
	 img_floco9 = loadImage ('floco2.png');
	 img_floco10 = loadImage ('floco1.png');
	 img_floco11 = loadImage ('floco4.png');
	 img_floco12 = loadImage ('floco3.png');
	 img_floco13 = loadImage ('floco4.png');
	 img_floco14 = loadImage ('floco1.png');
	 img_floco15 = loadImage ('floco3.png');
	 img_floco16 = loadImage ('floco2.png');
	 img_floco17 = loadImage ('floco4.png');
	 img_floco18 = loadImage ('floco2.png');
	 img_floco19 = loadImage ('floco3.png');
	 img_floco20 = loadImage ('floco2.png');
}
// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);
	mySound.loop();
	veloc_estrela = createVector((0 - 898) / (60 * 1), (50 - (-100)) / (60 * 1));
	pos_arvore = createVector(77, 118);
	pos_boneco = createVector(700, 160);
	pos_estrela = createVector(898, -100);

	pos_floco1 = createVector(400, 10);
	pos_floco2 = createVector(500, 20);
	pos_floco3 = createVector(300, 10);
	pos_floco4 = createVector(600, 30);
	pos_floco5 = createVector(700, 10);
	pos_floco6 = createVector(200, 50);
	pos_floco7 = createVector(500, 70);
	pos_floco8 = createVector(800, 10);
	pos_floco9 = createVector(100, 80);
	pos_floco10 = createVector(150, 90);
	pos_floco11 = createVector(250, 10);
	pos_floco12 = createVector(350, 100);
	pos_floco13 = createVector(450, 54);
	pos_floco14 = createVector(550, 90);
	pos_floco15 = createVector(650, 80);
	pos_floco16 = createVector(750, 77);
	pos_floco17 = createVector(50, 57);
	pos_floco18 = createVector(0, 10);
	pos_floco19 = createVector(850, 90);
	pos_floco20 = createVector(950, 80);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(img_fundo);
	image(img_arvore, 77, 118, 156, 179);
	image(img_boneco, 700, 160, 149, 138);
	image(img_estrela, 470, 25, 97, 78);
	if (pos_estrela.x > -200) pos_estrela.add(veloc_estrela);
	image(img_floco1, pos_floco1.x, pos_floco1.y, 50, 50);
	image(img_floco2, pos_floco2.x, pos_floco2.y, 40, 40);
	image(img_floco3, pos_floco3.x, pos_floco3.y, 60, 60);
	image(img_floco4, pos_floco4.x, pos_floco4.y, 70, 70);
	image(img_floco5, pos_floco5.x, pos_floco5.y, 50, 50);
	image(img_floco6, pos_floco6.x, pos_floco6.y, 40, 40);
	image(img_floco7, pos_floco7.x, pos_floco7.y, 40, 40);
	image(img_floco8, pos_floco8.x, pos_floco8.y, 50, 50);
	image(img_floco9, pos_floco9.x, pos_floco9.y, 50, 50);
	image(img_floco10, pos_floco10.x, pos_floco10.y, 50, 50);
	image(img_floco11, pos_floco11.x, pos_floco11.y, 50, 50);
	image(img_floco12, pos_floco12.x, pos_floco12.y, 50, 50);
	image(img_floco13, pos_floco13.x, pos_floco13.y, 50, 50);
	image(img_floco14, pos_floco14.x, pos_floco14.y, 50, 50);
	image(img_floco15, pos_floco15.x, pos_floco15.y, 50, 50);
	image(img_floco16, pos_floco16.x, pos_floco16.y, 50, 50);
	image(img_floco17, pos_floco17.x, pos_floco17.y, 50, 50);
	image(img_floco18, pos_floco18.x, pos_floco18.y, 50, 50);
	image(img_floco19, pos_floco19.x, pos_floco19.y, 50, 50);
	image(img_floco20, pos_floco20.x, pos_floco20.y, 50, 50);
	for (i = 0; i < lista.length; i ++) {
		image(img_floco1, lista[i].x, lista[i].y, 50, 50);
		lista[i].y++;
		if (lista[i].y > height) {
			lista[i].y = -50;
		}
	}

	//faz os flocos se moverem
	pos_floco1.y++;
	pos_floco2.y++;
	pos_floco3.y++;
	pos_floco4.y++;
	pos_floco5.y++;
	pos_floco6.y++;
	pos_floco7.y++;
	pos_floco8.y++;
	pos_floco9.y++;
	pos_floco10.y++;
	pos_floco11.y++;
	pos_floco12.y++;
	pos_floco13.y++;
	pos_floco14.y++;
	pos_floco15.y++;
	pos_floco16.y++;
	pos_floco17.y++;
	pos_floco18.y++;
	pos_floco19.y++;
	pos_floco20.y++;

	if (pos_floco1.y > height) {
		pos_floco1.y = 10;
		pos_floco2.y = 20;
		pos_floco3.y = 10;
		pos_floco4.y = 30;
		pos_floco5.y = 10;
		pos_floco6.y = 50;
		pos_floco7.y = 70;
		pos_floco8.y = 10;
		pos_floco9.y = 80;
		pos_floco10.y = 90;
		pos_floco11.y = 10;
		pos_floco12.y = 100;
		pos_floco13.y = 54;
		pos_floco14.y = 90;
		pos_floco15.y = 80;
		pos_floco16.y = 77;
		pos_floco17.y = 57;
		pos_floco18.y = 10;
		pos_floco19.y = 90;
		pos_floco20.y = 80;
	}


}
function mousePressed(){
  // console.log(mouseX + ' ' + mouseY);
  pos_estrela.x = 898;
  pos_estrela.y = -100;

  lista.push(createVector(mouseX, mouseY));
}


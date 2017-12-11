/**
 * p5js boilerplate
 * 
 * 
 */

// chamada no inicio do programa

var fundo;
var estrela;
var arvore;
var boneco;
var imgfloco1;
var imgfloco2;
var imgfloco3;
var imgfloco4;
var floco1;
var floco2;
var floco3;
var floco4; 
var musica;
var velocidade;
var lista = [];
var angulo;

var musica;

function preload() {
	fundo = loadImage("fundo.png");
	arvore = loadImage("arvore.png");
	estrela = loadImage("estrela.png");
	boneco = loadImage("boneco.png");
	imgfloco1 = loadImage("floco1.png");
	imgfloco2 = loadImage("floco2.png");
	imgfloco3 = loadImage("floco3.png");
	imgfloco4 = loadImage("floco4.png");
	
	soundFormats('mp3');
	musica = loadSound("natal.mp3")	
	
}


function setup() {
	angleMode(DEGREES);
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 500);
	lista.push(criaFloco(50,50,2, 1));
	lista.push(criaFloco(100,50,1.5, 2));



	for (var i = 0; i < 100; i++) {
		lista.push(criaFloco(random(0, width), random(0, height), random(1, 3), random(0.5, 1.5)));
	}


	posicao = createVector(800,20);
	// velocidade = p5.Vector.fromAngle(PI - 7*PI/8).mult(1000/120);
	velocidade = createVector(-12, 2);

	angulo=0;

	musica.setVolume(1.0);
  	musica.loop()
	
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(fundo);
	image(boneco,500,360,150,150);
	image(arvore,200,350,150,150);
	image(estrela,posicao.x,posicao.y,75,75);
	
	// image(imgfloco1, lista[0].x, lista[0].y, 40, 40);
	// image(imgfloco1, 100, 50, 40, 40);
	// image(imgfloco2, 150, 50, 40, 40);
	// image(imgfloco3, 200, 50, 40, 40);
	// image(imgfloco4, 250, 50, 40, 40);
	// image(imgfloco1, 300, 50, 40, 40);
	// image(imgfloco2, 350, 50, 40, 40);
	// image(imgfloco3, 400, 50, 40, 40);
	// image(imgfloco4, 450, 50, 40, 40);
	// image(imgfloco1, 500, 50, 40, 40);
	// image(imgfloco2, 550, 50, 40, 40);
	// image(imgfloco3, 600, 50, 40, 40);
	// image(imgfloco4, 650, 50, 40, 40);
	// image(imgfloco4, 650, 50, 40, 40);
	// image(imgfloco1, 700, 50, 40, 40);
	// image(imgfloco2, 750, 50, 40, 40);
	// image(imgfloco3, 800, 50, 40, 40);
	// image(imgfloco4, 850, 50, 40, 40);

	// image(imgfloco1, 50, 100, 40, 40);
	// image(imgfloco1, 100, 100, 40, 40);
	// image(imgfloco2, 150, 100, 40, 40);
	// image(imgfloco3, 200, 100, 40, 40);
	// image(imgfloco4, 250, 100, 40, 40);
	// image(imgfloco1, 300, 100, 40, 40);
	// image(imgfloco2, 350, 100, 40, 40);
	// image(imgfloco3, 400, 100, 40, 40);
	// image(imgfloco4, 450, 100, 40, 40);
	// image(imgfloco1, 500, 100, 40, 40);
	// image(imgfloco2, 550, 100, 40, 40);
	// image(imgfloco3, 600, 100, 40, 40);
	// image(imgfloco4, 650, 100, 40, 40);
	// image(imgfloco1, 700, 100, 40, 40);
	// image(imgfloco2, 750, 100, 40, 40);
	// image(imgfloco3, 800, 100, 40, 40);
	// image(imgfloco4, 850, 100, 40, 40);

	// image(imgfloco1, 50, 150, 40, 40);
	// image(imgfloco1, 100, 150, 40, 40);
	// image(imgfloco2, 150, 150, 40, 40);
	// image(imgfloco3, 200, 150, 40, 40);
	// image(imgfloco4, 250, 150, 40, 40);
	// image(imgfloco1, 300, 150, 40, 40);
	// image(imgfloco2, 350, 150, 40, 40);
	// image(imgfloco3, 400, 150, 40, 40);
	// image(imgfloco4, 450, 150, 40, 40);
	// image(imgfloco1, 500, 150, 40, 40);
	// image(imgfloco2, 550, 150, 40, 40);
	// image(imgfloco3, 600, 150, 40, 40);
	// image(imgfloco4, 650, 150, 40, 40);
	// image(imgfloco1, 700, 150, 40, 40);
	// image(imgfloco2, 750, 150, 40, 40);
	// image(imgfloco3, 800, 150, 40, 40);
	// image(imgfloco4, 850, 150, 40, 40);

	
	


	for (var i = 0; i < lista.length; i++) {
		push();
		translate(lista[i].x,lista[i].y);
		rotate(lista[i].a);
		if (i % 4 == 0)  {
			image(imgfloco1,-20, -20,40,40);			
		} else if (i % 4 == 1)  {
			image(imgfloco2,-20, -20,40,40);			
		} else if (i % 4 == 2)  {
			image(imgfloco3,-20, -20,40,40);			
		} else {
			image(imgfloco4,-20, -20,40,40);			
		}
		lista[i].y += lista[i].v;
		// angulo mais igual velocidade angular
		lista[i].a += lista[i].w;

		if (lista[i].y > height) lista[i].y = -40;
		pop();
	}
	

	posicao = posicao.add(velocidade);

	
	
}

function mousePressed() {
	posicao.x = 800;
	posicao.y = 20;
}

function criaFloco(x,y,v,w) {
	return {
		x: x,
		y: y, 
		v: v,
		a: 0,
		w: w
	};
}

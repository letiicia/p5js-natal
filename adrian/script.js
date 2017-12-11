
	var cenario;
	var estrela;
	var boneco;
	var arvore;
	var floco1;
	var floco2;
	var floco3;
	var floco4;
	var posestrela;
	var mover = false;
	var musica;
	var lista = [];

function preload() {

	cenario = loadImage('cenario.png');
	estrela = loadImage('estrela.png');
	boneco = loadImage('boneco.png');
	arvore = loadImage('arvore.png');
	floco1 = loadImage('floco1.png');
	floco2 = loadImage('floco2.png');
	floco3 = loadImage('floco3.png');
	floco4 = loadImage('floco4.png');

	soundFormats('mp3');

	musica = loadSound('musica.mp3');

}

function setup() {
	createCanvas(1200, 700);

	posestrela = createVector(1400, 1);



	
	tocaMusica();
}


function draw() {
	background(cenario);

	image(boneco, 200, 420, 150, 200);
	image(arvore, 700, 150, 400, 500);
	image(estrela, posestrela.x, posestrela.y, 200, 150);

	if(posestrela.x < -200) {
		posestrela.x = 1400;
		posestrela.y = 5;
		mover = false;
	}

	if(mover) {
		posestrela.x -= 20;
		posestrela.y += 1;
	}

	for (var i = 0; i < lista.length; i++) {
		desenha_floco(lista[i]);
		atualiza_posicao_floco(lista[i]);

	}

	image(floco1, 100, 100, 50, 50);
	image(floco4, 100, 300, 50, 50);
	image(floco2, 250, 50, 50, 50);
	image(floco3, 250, 200, 50, 50);
	image(floco1, 230, 500, 50, 50);
	image(floco1, 350, 140, 50, 50);
	image(floco4, 350, 420, 50, 50);
	image(floco2, 400, 300, 50, 50);
	image(floco1, 500, 100, 50, 50);
	image(floco3, 520, 400, 50, 50);
	image(floco3, 480, 250, 50, 50);
	image(floco4, 600, 200, 50, 50);
	image(floco2, 650, 350, 50, 50);
	image(floco1, 650, 50, 50, 50);
	image(floco1, 730, 200, 50, 50);
	image(floco2, 770, 300, 50, 50);
	image(floco3, 810, 60, 50, 50);
	image(floco4, 900, 100, 50, 50);
	image(floco1, 900, 500, 50, 50);
	image(floco4, 1000, 400, 50, 50);
	image(floco3, 1000, 300, 50, 50);
	image(floco2, 1100, 250, 50, 50);
	image(floco4, 1050, 100, 50, 50);
	image(floco2, 600, 500, 50, 50);
	image(floco1, 700, 450, 50, 50);
	image(floco3, 1080, 50, 50, 50);

}

function tocaMusica() {

	musica.setVolume(1.0);
	musica.loop();

}

function mouseClicked() {
	if(posestrela.x = 1400) {
	mover = true;
	}

	lista.push(cria_floco(mouseX, mouseY, (random(1, 10) / 5)));
}

function cria_floco(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}

function desenha_floco(floco) {
	image(floco1, floco.x, floco.y, 50, 50);
}

function atualiza_posicao_floco(floco) {
	floco.y += floco.v;
	if (floco.y > height) floco.y = -10;
}
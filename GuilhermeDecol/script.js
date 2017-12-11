var fundo;
var estrela;
var floco1img;
var floco2img;
var floco3img;
var floco4img;
var posestrela;
var mestrela = false;
var musica;
var lista1 = [];
var lista2 =[];
var lista3 = [];
var lista4 = [];

function preload() {
	fundo = loadImage("fundo.jpg");
	estrela = loadImage("estrela.png");
	floco1img = loadImage("floco1.png");
	floco2img = loadImage("floco2.png");
	floco3img = loadImage("floco3.png");
	floco4img = loadImage("floco4.png");
	soundFormats('mp3');
	musica = loadSound("musica.mp3");
	
}

function setup() {
	createCanvas(1633, 920);
	musica.play();
	musica.setVolume(0.5);
	musica.loop();
	posestrela = createVector(1800, 1);
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista1.push(cria_floco1((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista2.push(cria_floco2((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista3.push(cria_floco3((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
	lista4.push(cria_floco4((random(1, 1636)),(random(1, 920)), (random(1, 10) / 5)));
}


function draw() {
	background(fundo);
	image(estrela, posestrela.x, posestrela.y, 200, 150);
	if(posestrela.x < -200) {
		posestrela.x = 1800;
		posestrela.y = 5;
		mestrela = false;
	}
	if(mestrela) {
		posestrela.x -= 20;
		posestrela.y += 1;
	}
	for (var i = 0; i < lista1.length; i++) {
		desenha_floco1(lista1[i]);
		atualiza_posicao_floco1(lista1[i]);
	}
	for (var i = 0; i < lista2.length; i++) {
		desenha_floco2(lista2[i]);
		atualiza_posicao_floco2(lista2[i]);
	}
	for (var i = 0; i < lista3.length; i++) {
		desenha_floco3(lista3[i]);
		atualiza_posicao_floco3(lista3[i]);
	}
	for (var i = 0; i < lista4.length; i++) {
		desenha_floco4(lista4[i]);
		atualiza_posicao_floco4(lista4[i]);
	}	
}

function mouseClicked() {
	if(posestrela.x = 1800) {
	mestrela = true;
	}
}

function cria_floco1(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}
function cria_floco2(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}
function cria_floco3(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}
function cria_floco4(x, y, v) {
	return {
		x: x,
		y: y,
		v: v
	}
}
function desenha_floco1(floco1) {
	image(floco1img, floco1.x, floco1.y, 50, 50);
	
}
function atualiza_posicao_floco1(floco1) {
	floco1.y += floco1.v;
	if (floco1.y > height) floco1.y = -10;
}
function desenha_floco2(floco2) {
	image(floco2img, floco2.x, floco2.y, 50, 50);
}
function atualiza_posicao_floco2(floco2) {
	floco2.y += floco2.v;
	if (floco2.y > height) floco2.y = -10;
}
function desenha_floco3(floco3) {
	image(floco3img, floco3.x, floco3.y, 50, 50);
}
function atualiza_posicao_floco3(floco3) {
	floco3.y += floco3.v;
	if (floco3.y > height) floco3.y = -10;
}
function desenha_floco4(floco4) {
	image(floco4img, floco4.x, floco4.y, 50, 50);
}
function atualiza_posicao_floco4(floco4) {
	floco4.y += floco4.v;
	if (floco4.y > height) floco4.y = -10;
}
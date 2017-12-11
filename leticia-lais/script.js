/**
 * p5js boilerplate
 * 
 * 
 */
var boneco;
var estrela = null; //Pois não terá ponto fixo
var invernoFundo;
var floco1;
var floco2;
var floco3;
var floco4;
var musica;
var x, y;
var floco;

var ultima_posicao_mouse;

var lista_flocos = [];

 //carrega as imagens
 function preload(){
	 invernoFundo = loadImage ("invernoFundo.jpg");
	 boneco = loadImage ("boneco.png");
	 estrela = loadImage ("estrela.png");
	 floco1 = loadImage ("floco1_pequeno.png");
	 floco2 = loadImage ("floco2.png");
	 floco3 = loadImage ("floco3.png");
	 floco4 = loadImage ("floco4.png");
	 
     musica = loadSound("musica.mp3");
     
 }

// chamada no inicio do programa
function setup() {
	angleMode(DEGREES);

	// cria o quadro, com dimensoes 900 x 400
	x = 40;//dei um valor pra x
  	y = 10;//dei um valor pra y
	createCanvas(900, 400);//criei um quadro de (900, 400)

	


	musica.play();// para tocar música
    

	floco = cria_floco(50, 0, 1, 0, 1); // cria flocos nas seguintes proporções

	lista_flocos.push(floco);// fiz uma lista para poder adicionar varios flocos aleatóriamente (random)

	for (var i = 0; i < 150; i++) {
		lista_flocos.push(cria_floco(random(0, width), random(0 , height), random(1, 10) / 4, floor(random(0, 4)), random(1, 3)));	
	}

	ultima_posicao_mouse = width / 2;
	
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(invernoFundo);//desenha fundo
	image(estrela, x, y, 60, 50);//desenha estrela
	image(boneco, 200, 150, 300, 270);//desenha boneco

	var vento = random(3, 10);// cria a variavél vento aleatório entre (3, 10)

	if (ultima_posicao_mouse > mouseX) {// Se a ultima posiçaõ do vento for maior que mouseX vai ventar
		vento *= -1;
	}

	// if (ultima_posicao_mouse == mouseX) vento = 0;

	ultima_posicao_mouse = mouseX;

	for (var i = 0; i < lista_flocos.length; i++) {
		lista_flocos[i].desenha();
		lista_flocos[i].atualiza(vento);
	}


	// como fazer estrela se mover
	// Jiggling randomly on the horizontal axis
  x = x + 8; //random(1, 3);
  // VELOCIDADE
  y = y + 2;
  
  // Reset 
  if (x < 0) {
    x = height;
  }
}
	
function desenha_floco() {
	push();
	translate(this.x, this.y);
	rotate(this.angulo);
	if (this.tipo == 0) {
		image(floco1, -15, -15, 30, 30);		
	} else if (this.tipo == 1) {
		image(floco2, -15, -15, 30, 30);		
	} else if (this.tipo == 2) {
		image(floco3, -15, -15, 30, 30);		
	} else {
		image(floco4, -15, -15, 30, 30);		
	}

	pop();
}
//desenha os flocos de 0 a 3 aleatoriamente
function atualiza_posicao_floco(vento) {
	this.y += this.velocidade;
	this.x += (vento / random(5, 10)) || 0;

	if (this.y > height) this.y = -30;
	if (this.x > width) this.x = 0;
	if (this.x < 0) this.x = width;

	this.angulo += this.velocidade_giro;
}
	
function cria_floco(x, y, velocidade, tipo, velocidade_giro) {
	return {
		x: x,
		y: y,
		velocidade: velocidade,
		tipo: tipo,
		angulo: 0,
		velocidade_giro: velocidade_giro,
		desenha: desenha_floco,
		atualiza: atualiza_posicao_floco
	};
}


function mousePressed() {
	// lista_flocos.push(cria_floco(mouseX, mouseY, random(1, 10) / 4));
	x = 40;
	y = 10;
	}

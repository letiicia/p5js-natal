/**
 * p5js boilerplate
 * 
 * 
 */

var neve;//Declara as variaveis
var olaf;
var cadente = null;
var pinheiro;
var rosaClaro;
var rosa;
var lilas;
var vermelho;

var flocoUm,
	rosaClaro_pos,
	rosa_pos,
	lilas_pos,
	vermelho_pos;

var merry;

var x, y;

var posicao_mouse_anterior = 0;
var posicao_mouse_atual = 0;

var lista_flocos = [];

//Carrega arquivos externos para dentro do codigo
function preload() {
	neve = loadImage('essa_aqui.jpg');//Carrega a imagem de fundo
	olaf = loadImage('boneco.png');//Carrega a imagem do boneco de neve
	cadente = loadImage('estrela.png');//Carrega a imagem da estrela
	pinheiro = loadImage('arvore-normal.png');//Carrega a imagem da arvore
	rosaClaro = loadImage('floco1.png');//Carrega a imagem do floco 1
	rosa = loadImage('floco2.png');//Carrega a imagem do floco 2
	lilas = loadImage('floco3.png');//Carreg a imagem do floco 3
	vermelho = loadImage('floco4.png');//Carrega a imagem do floco 4
	soundFormats('wav');//Define o formato do som
	merry = loadSound('merry-christmas.wav');//Carrega a musica que vai tocar
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(800, 560);

	x = 40;//Posicao do x da estrela
	y = 10;//Posicao do y da estrela
	
	//Cria o vetor
	//Escreve as coordenadas para desenhar o floco
	rosaClaro_pos = createVector(325, 125);
	// flocoUm = new FlocoUm(325, 125, 55, -1); // -1 gera um erro
	flocoUm = new FlocoUm(425, 85, 55, 3, random(1, 3));//Posicao x e y, tamanho e velocidade em que o floco vai girar 
	outroFlocoUm = new FlocoUm(135, 35, 85, 8, random(1, 3));//Desenha outro floco; posicao x e y, tamanho e velocidade 
	
	rosa_pos = createVector(525, 135);
	flocoDois = new FlocoDois(65, 90, 50, 9, random(1, 3));//Posicao x e y, tamanho e velocidade 
	outroFlocoDois = new FlocoDois(495, 50, 80, 2, random(1, 3));//Desenha outro floco; posicao x e y, tamanho e velocidade
	
	lilas_pos = createVector(435, 145);
	flocoTres = new FlocoTres(600, 95, 35, 5, random(1, 3));
	outroFlocoTres = new FlocoTres(330, 55, 65, 7, random(1, 3));
	
	vermelho_pos = createVector(675, 155);
	flocoQuatro = new FlocoQuatro(245, 85, 45, 4, random(1, 3));
	outroFlocoQuatro = new FlocoQuatro(680, 55, 75, 6, random(1, 3));

	merry.setVolume(1.0);//Define o volume da musica
	merry.loop();//Faz a musica repitir, quando terminar

	var floco;
	for(var i = 0; i < 100; i++) {
		if (i % 4 == 0) floco = new FlocoUm(random(0, width), random(0, height), random(20, 80), random(0, 10), random(1, 3));
		if (i % 4 == 1) floco = new FlocoDois(random(0, width), random(0, height), random(20, 80), random(0, 10), random(1, 3));
		if (i % 4 == 2) floco = new FlocoTres(random(0, width), random(0, height), random(20, 80), random(0, 10), random(1, 3));
		if (i % 4 == 3) floco = new FlocoQuatro(random(0, width), random(0, height), random(20, 80), random(0, 10), random(1, 3));
		lista_flocos.push(floco);
	}
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	posicao_mouse_atual = mouseX;

	if (posicao_mouse_atual > posicao_mouse_anterior) velocidade_vento = 1;
	else if (posicao_mouse_atual == posicao_mouse_anterior) velocidade_vento = 0;
	else velocidade_vento = -1;

	// pinta o fundo de preto
	background(neve);//Coloca a imagem de fundo

	//Desenha as imagens, do boneco do pinheiro e da estrela e as posicoes x e y e o tamanho
	image(olaf, 587, 377, 150, 150);

	image(cadente, x, y, 100, 100);

	x = x + 8;
	//Velocidade 
	y = y + 2;

	//Faz a estrela ficar repetindo
	if (x < 0) {
		x = height;
	}

	image(pinheiro, 0, 107, 300, 300);

	//Declara a funcao para desenhar os flocos
	flocoUm.desenha();
	flocoUm.mover(velocidade_vento);
	outroFlocoUm.desenha();
	outroFlocoUm.mover(velocidade_vento);

	flocoDois.desenha();//image(rosa, rosa_pos.x, rosa_pos.y, 50,50);
	flocoDois.mover(velocidade_vento);
	outroFlocoDois.desenha();
	outroFlocoDois.mover(velocidade_vento);

	flocoTres.desenha();//image(lilas, lilas_pos.x, lilas_pos.y, 35,35);
	flocoTres.mover(velocidade_vento);
	outroFlocoTres.desenha();
	outroFlocoTres.mover(velocidade_vento);

	flocoQuatro.desenha();//image(vermelho, vermelho_pos.x, vermelho_pos.y, 45,45);
	flocoQuatro.mover(velocidade_vento);
	outroFlocoQuatro.desenha();
	outroFlocoQuatro.mover(velocidade_vento);

	if (frameCount % 60 == 0) posicao_mouse_anterior = mouseX;

	for(var i = 0; i < lista_flocos.length; i++) {
		lista_flocos[i].desenha();
		lista_flocos[i].mover(velocidade_vento);
	}

}

//Cria a funcao para desenhar o floco  
//usa as variaveis com a posicao, tamanho e velocidade do giro, que ja estao armazenadas 
function FlocoUm(x, y, tamanho, velocidade_giro, velocidade_queda) {
	if (velocidade_giro < 0 || velocidade_giro > 10) throw "velocidade_giro deve estar entre 0 e 10";//Envia um erro em relacao a velocidade do giro
	this.pos = createVector(x, y);//Determina a posicao do floco
	this.angulo = 0;//Determina o angulo em que o floco vai girar
	this.tamanho = tamanho;//Determina o tamanho do floco
	this.velocidade_giro = velocidade_giro;//Determina a velocidade com que o floco vai girar
	this.velocidade_queda = velocidade_queda;
	return this;//Retorna o floco, com a posicao, angulo, tamanho e velocidade do giro	
}

//Cria a classe para desenhar o floco
FlocoUm.prototype.desenha = function () {
	push();//Inicia a transformacao
	translate(this.pos.x + this.tamanho / 2, this.pos.y + this.tamanho / 2);//Muda o eixo do floco em relacao a posicao e ao tamanho 
	rotate(this.angulo);//Define o giro do floco em relacao ao angulo
	image(rosaClaro, -this.tamanho / 2, -this.tamanho / 2, this.tamanho, this.tamanho);//Desenha e define o local em que o floco vai estar
	this.angulo += 0.01 * this.velocidade_giro/5;//Faz o floco girar
	pop();//Descarta as alteracoes feitas anteriormente pela transformacao
}

//Cria a classe para desenhar o floco
FlocoUm.prototype.mover = function (velocidade_vento) {
	this.pos.y += this.velocidade_queda;
	if (this.pos.y > height) this.pos.y = -this.tamanho;
	this.pos.x += velocidade_vento;
	if (this.pos.x > width + this.tamanho) this.pos.x = -this.tamanho;
	if (this.pos.x < -this.tamanho) this.pos.x = width + this.tamanho;
}

function FlocoDois(x, y, tamanho, velocidade_giro, velocidade_queda) {
	this.pos = createVector(x, y);
	this.angulo = 0;
	this.tamanho = tamanho;
	this.velocidade_giro = velocidade_giro;
	this.velocidade_queda = velocidade_queda;
	return this;
}

FlocoDois.prototype.desenha = function () {
	push();
	translate(this.pos.x + this.tamanho / 2, this.pos.y + this.tamanho / 2);
	rotate(this.angulo);
	image(rosa, -this.tamanho / 2, -this.tamanho / 2, this.tamanho, this.tamanho);
	this.angulo += 0.01 * this.velocidade_giro/5;
	pop();
}

FlocoDois.prototype.mover = function (velocidade_vento) {
	this.pos.y += this.velocidade_queda;
	if (this.pos.y > height) this.pos.y = -this.tamanho;
	this.pos.x += velocidade_vento;
	if (this.pos.x > width + this.tamanho) this.pos.x = -this.tamanho;
	if (this.pos.x < -this.tamanho) this.pos.x = width + this.tamanho;
}

function FlocoTres(x, y, tamanho, velocidade_giro, velocidade_queda) {
	this.pos = createVector(x, y);
	this.angulo = 0;
	this.tamanho = tamanho;
	this.velocidade_giro = velocidade_giro;
	this.velocidade_queda = velocidade_queda;
	return this;
}

FlocoTres.prototype.desenha = function () {
	push();
	translate(this.pos.x + this.tamanho / 2, this.pos.y + this.tamanho / 2);
	rotate(this.angulo);
	image(lilas, -this.tamanho / 2, -this.tamanho / 2, this.tamanho, this.tamanho);
	this.angulo += 0.01 * this.velocidade_giro/5;
	pop();
}

FlocoTres.prototype.mover = function (velocidade_vento) {
	this.pos.y += this.velocidade_queda;
	if (this.pos.y > height) this.pos.y = -this.tamanho;
	this.pos.x += velocidade_vento;
	if (this.pos.x > width + this.tamanho) this.pos.x = -this.tamanho;
	if (this.pos.x < -this.tamanho) this.pos.x = width + this.tamanho;
}

function FlocoQuatro(x, y, tamanho, velocidade_giro, velocidade_queda) {
	this.pos = createVector(x, y);
	this.angulo = 0;
	this.tamanho = tamanho;
	this.velocidade_giro = velocidade_giro;
	this.velocidade_queda = velocidade_queda;
	return this;
}

FlocoQuatro.prototype.desenha = function () {
	push();
	translate(this.pos.x + this.tamanho / 2, this.pos.y + this.tamanho / 2);
	rotate(this.angulo);
	image(vermelho, -this.tamanho / 2, -this.tamanho / 2, this.tamanho, this.tamanho);
	this.angulo += 0.01 * this.velocidade_giro/5;
	pop();
}

FlocoQuatro.prototype.mover = function (velocidade_vento) {
	this.pos.y += this.velocidade_queda;
	if (this.pos.y > height) this.pos.y = -this.tamanho;
	this.pos.x += velocidade_vento;
	if (this.pos.x > width + this.tamanho) this.pos.x = -this.tamanho;
	if (this.pos.x < -this.tamanho) this.pos.x = width + this.tamanho;
}

//Funcao acionada toda vez que o mouse for pressionado
function mousePressed() {
	x = 40;//Cada vez que pressiona o mouse posicao x recebe o valor
	y = 10;//Cada vez que pressiona o mouse posicao y recebe o valor
}
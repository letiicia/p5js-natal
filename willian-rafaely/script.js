/**
 * p5js boilerplate
 * 
 * 
 */

var fundo, musica, estrelaV, estrelaA, bonecoPos, eu, vento, somVento, floco1, floco2, floco3, floco4, flocoPos;
var contador = 0;
var voltar = false;
var voar = false;

var lista = [];

var vento = 0;
var posicao_mouse_anterior = 0, posicao_mouse_atual = 0;

function preload() {
    fundo = loadImage("img/fundo.jpg");
    estrelaV = loadImage("img/estrelaV.png");
    estrelaA = loadImage("img/estrelaA.png");
    musica = loadSound("musica.mp3");
    boneco = loadImage("img/alisson.png");
    eu = loadImage("img/eu.png");
    floco1 = loadImage("img/floco1.png");
    floco2 = loadImage("img/floco2.png");
    floco3 = loadImage("img/floco3.png");
    floco4 = loadImage("img/floco4.png");
   // vento = loadSound("vento2.mp3");
}

// chamada no inicio do programa
function setup() {
    angleMode(DEGREES);

	// cria o quadro, com dimensoes 900 x 400
	createCanvas(800, 600);
    musica.loop();
    bonecoPos = createVector(300, 300);
    euPos = createVector(-400, 50);
    flocoPos = createVector(0, 0);

    for (var i = 0; i < 150; i++) {
        lista.push(criaFloco(random(0, width), random(0, height), random(1, 3), random(0.1, 2.0)));
    }
    
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
    posicao_mouse_atual = mouseX;

    if (posicao_mouse_atual > posicao_mouse_anterior) {
        vento = 1;
    } else if (posicao_mouse_atual < posicao_mouse_anterior) {
        vento = -1;
    } else {
        vento = 0;
    }


	// pinta o fundo de preto
	background(fundo);
    
    chamarContador();
    
    chamarBoneco();
    
    chamarEuVoando();
    // image(floco1, 0, flocoPos.y, 100, 100);
    // image(floco2, 100, flocoPos.y, 100, 100);
    // image(floco3, 200, flocoPos.y, 100, 100);
    // image(floco4, 300, flocoPos.y, 100, 100);
    // image(floco1, 400, flocoPos.y, 100, 100);
    // image(floco2, 500, flocoPos.y, 100, 100);
    // image(floco3, 600, flocoPos.y, 100, 100);
    // image(floco4, 700, flocoPos.y, 100, 100);

    for (var i = 0; i < lista.length; i++) {
        // desenha
        push();
        translate(lista[i].x, lista[i].y);
        rotate(lista[i].a);
        image(floco1, -15, -15, 30, 30);
        pop();
        
        // atualiza
        lista[i].x += vento;
        lista[i].y += lista[i].v;
        if (lista[i].y > height) lista[i].y = -30;
        lista[i].a += lista[i].w;
    }
    
    flocoPos.y++;
    
    if(flocoPos.y >= 610){
        flocoPos.y = -100
    }

    posicao_mouse_anterior = mouseX;
}
function chamarContador(){
    if(contador < 60){
        image(estrelaA, 58, 40, 80, 76);
    }
    if(contador >= 60){
        image(estrelaV, 58, 40, 80, 76);
    }
    
    if(contador == 120){
        contador = 0;
    }
    contador++;
}
function chamarBoneco(){
    image(boneco, 10, 300, bonecoPos.x, bonecoPos.x);
    
    if(bonecoPos.x >= 355){
        voltar = true;
    }
    if(voltar == true){
        bonecoPos.x -= 0.8;
        bonecoPos.y -= 0,8;   
    }
    
    if(bonecoPos.x <= 300){
        voltar = false;
    }
    
    bonecoPos.x += 0.4;
    bonecoPos.y += 0,4; 
}

function chamarEuVoando(){
    if(voar == true){
        image(eu, euPos.x, euPos.y, 400, 82);  
        euPos.x = euPos.x + 5;
    }
    
    if(euPos.x >= 825){
        voar = false;
        euPos.x = -400;
    }
}

function mousePressed(){
    voar = true;
}

// factory
function criaFloco(x, y, v, w) {
    return {
        x: x,
        y: y,
        v: v,
        a: 0,
        w: w
    };
}
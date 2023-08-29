let verde ="rgb(0,255,0)";
let verdeApagado ="rgba(0,255,0,0.5)";
let amarelo ="rgb(255,255,0)";
let amareloApagado ="rgba(255,255,0,0.5)";
let vermelho ="rgb(255,0,0)";
let vermelhoApagado = "rgba(255,0,0,0.5)";

let tempo = 0;
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  caixaSemafaro();
  switch(true){
    case tempo < 100:
      faseAberta();
      tempo++;
      break;
      case tempo < 170:
      faseAtencao();
      tempo++;
      break;
      case tempo < 250:
      faseFechada();
      tempo++;
      break;
      default:
      tempo = 0;
  }
}

function faseFechada(){
  criaSemafaro(verdeApagado,325,280);
  criaSemafaro(amareloApagado,325,230);
  criaSemafaro(vermelho,325,180);
}
  
function faseAberta(){
  criaSemafaro(verde,325,280);
  criaSemafaro(amareloApagado,325,230);
  criaSemafaro(vermelhoApagado,325,180);
}
function faseAtencao(){
  criaSemafaro(verdeApagado,325,280);
  criaSemafaro(amarelo,325,230);
  criaSemafaro(vermelhoApagado,325,180);
}

function caixaSemafaro(){
  fill(0);
  stroke(200,20,2200);
  strokeWeight(1);
  rect(300,150,50,150,30,30,30,30);
}

function criaSemafaro(cor,x,y){
  fill(cor);
  ellipse(x,y,30,30)
}

let jugador1 = []
let jugador2 = []
let ball1 = [] 

let P1 = 0;
let P2 = 0;


function setup() {
  const canvasDiv = document.getElementById("canvasContainer");
  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas = canvasDiv.offsetHeight;
  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");

     jugador1 = new jugador(20, height/2 - 62.5, 20, 110, 4, 255, 0, 0,  83, 87)
     jugador2 = new jugador(width - 45, height/2 - 62.5, 20, 110, 4, 0, 0, 255, 76, 79)
     ball1 = new ball(width/2, height/2, 27, 4, 255,255,255, 0, 8)
}

function draw() {
  background(0);
jugador1.dibuixa();
jugador2.dibuixa();
jugador1.moviment(); 
jugador2.moviment();
ball1.dibuixa();
ball1.moviment();

  fill(255);
  textSize(20);
  text(P1, 30, 30);

  fill(255);
  textSize(20);
  text(P2, width - 45, 30);

}
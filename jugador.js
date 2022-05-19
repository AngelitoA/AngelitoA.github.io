class jugador {
    constructor(pX, pY, pA, pL, pVelocitat, r, g, b,  pTeclaS, pTeclaB) {
       this.X = pX;
       this.Y = pY;
       this.A = pA;
       this.L = pL;
       this.velocitat = pVelocitat;
       this.color = {
         r: r,
         g: g,
         b: b,
       };
       this.TeclaS = pTeclaS;
       this.TeclaB = pTeclaB;
     }
     dibuixa() {
       fill(random(0,this.color.r), random(0,this.color.g), random(0,this.color.b));
       rect(this.X, this.Y, this.A, this.L);   
       
     }
     moviment() {
       if (keyIsDown(this.TeclaS)) {
         this.Y += 15;
       }
       if (keyIsDown(this.TeclaB)) {
         this.Y -= 15;
       }
      if(this.Y < 0){
        this.Y =height
      }
       if(this.Y >height){
        this.Y =-15
      }
     }  
   }
   
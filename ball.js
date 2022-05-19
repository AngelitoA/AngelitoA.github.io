class ball{
  constructor(pX, pY, pD, pVel, r, g, b, pVelY, pVelX){
    this.X = pX;
    this.Y = pY;
    this.D = pD;
    this.Vel = pVel;
    this.color = {
      r: r,
      g: g,
      b: b,
    };
    this.VelY = pVelY
    this.VelX = pVelX
  }
  dibuixa(){
    fill(random(this.color.r), random(this.color.g), random(this.color.b));
    circle(this.X, this.Y, this.D)
  }
  moviment(){
    this.X +=this.VelX;
    this.Y +=this.VelY;
    if (this.X > width) {
    this.X=width/2
    this.Y=height/2
    this.VelY=0
    jugador1.Y = height/2-55 
    jugador2.Y = height/2-55 
    P1+=1 
  }
    
  if (this.X < 0) {
   this.X=width/2
   this.Y=height/2
   this.VelY=0
   jugador1.Y = height/2-55 
   jugador2.Y = height/2-55 
    P2+=1
  }
    //rebote paredes a a
  if(this.Y > height){
     this.VelY *=-1
     }
    if(this.Y < 0){
     this.VelY *=-1
     }
    
    
if(this.X - this.D<jugador1.X){
  if(this.Y-this.D/2<jugador1.Y+jugador1.L){
    if(this.Y+this.D/2>jugador1.Y){
  this.VelX *=-1
       this.VelY = random(-4, 4)                                                             
    }
  }
}
if(this.X + this.D/2>jugador2.X){
  if(this.Y-this.D/2<jugador2.Y+jugador2.L){
    if(this.Y+this.D/2>jugador2.Y){
  this.VelX *=-1
      this.VelY = random(-4, 4)
        }
      }
    }
  }
}
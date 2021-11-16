class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("./assets/canon.png");
    this.cannonbaseImg = loadImage("./assets/cannonBase.png");
  }
  display(){
    console.log(this.angle);
    if(keyIsDown(RIGHT_ARROW) && this.angle<0.99){
      this.angle+=0.02;
    }

    if(keyIsDown(LEFT_ARROW) && this.angle>-2.38){
      this.angle-=0.02;
    }
    push(); 
    translate(this.x, this.y); 
    rotate(this.angle); 
    imageMode(CENTER); 
    image(this.cannonImg, 0, 0, 130, this.height);
     pop();
    image(this.cannonbaseImg,70, 20, 200, 200); 
    noFill();
   }
}
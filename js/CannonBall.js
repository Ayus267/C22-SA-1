class CannonBall{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;
        var options={isStatic:true};
        this.img = loadImage("./assets/ball.png");
        this.body=Bodies.circle(x,y,this.r,options);
     }
     shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle);//p5.vector.fromAngle it accepts angle in 
                         //variants and creates and returns a 2d vector. Vector is just like an array which will contain x and y value
         velocity.mult(20);
         Matter.Body.setStatic(this.body,false);
         Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
       }
     display(){
        var pos=this.body.position
        push(); 
        imageMode(CENTER); 
        image(this.img,pos.x,pos.y,this.r,this.r);
         pop();
       }
    }

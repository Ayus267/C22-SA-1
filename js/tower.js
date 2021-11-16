class Tower{
  constructor(x,y,width,height){
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      var options={isStatic:true}
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
  }
   display(){
    push();
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,160,310);
    pop();
   }
}
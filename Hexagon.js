class Hexagon{
    constructor(x, y, radius){
         
           var options = {
           isStatic:false,
           'restitution':0.8,
            'friction':0.5,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("download.png");
        this.Visibility = 255;
        World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.image, 0, 0,this.radius, this.radius);
        pop();
        console.log(this.body);
    if(this.body.speed<5){
    super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
    tint(255, this.Visibility);
    image(this.image, this.body.position.x,this.body.position.y,50,50);
    pop();
    }
  }
    }
}

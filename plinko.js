class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.radius = 10;
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      imageMode(CENTER);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0 ,0, this.radius, this.radius);
      pop();
    }
  };

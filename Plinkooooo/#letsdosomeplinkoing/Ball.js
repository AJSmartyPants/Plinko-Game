class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          density: 10,
          restitution: 0.04
      }
      this.body = Bodies.circle(x, y, 10, options);
      //var randRgb = Math.round(random(0,255));
      this.color = color(random (0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      //circleMode(CENTER);
      fill(this.color);
      circle(pos.x, pos.y, 20);
    }
  };
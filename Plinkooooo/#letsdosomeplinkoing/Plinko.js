class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 10, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      //circleMode(CENTER);
      fill("#e6ffff");
      circle(pos.x, pos.y, 20);
    }
  };
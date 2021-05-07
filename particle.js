class Particle {
  constructor(x, y) {
    var options = {
      restitution: 1,
      friction: 0,
    };

    this.r = 10;
    this.body = Bodies.circle(x, y, this.r, options);
    this.color = color(random(0,255),random(0,255),random(0,255))

    World.add(world, this.body);
  }

  display() {

    var pos1 = this.body.position;
    var angle1 = this.body.angle;

    push();
    translate(pos1.x, pos1.y);
    rotate(angle1);
    imageMode(CENTER);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
}

// Joel McKay
//
// Joel McKay
//

class Person {
  constructor() {
    this.y = height - 50;
    this.x = width / 2;
    this.speed = 7;
    this.radius = 16;
  }

  //Do this every frame
  update() {
    this.move();
    this.show();
    this.collisionWall();
  }

  //Graphics
  show() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  //Movement
  move() {
    if (keyIsDown(87)) {
      this.y -= this.speed;
    }
    if (keyIsDown(83)) {
      this.y += this.speed;
    }
    if (keyIsDown(68)) {
      this.x += this.speed;
    }
    if (keyIsDown(65)) {
      this.x -= this.speed;
    }
  }

  //Collision
  collisionWall() {
    this.x = this.clamp(this.x, 0 + this.radius, width - this.radius);
    this.y = this.clamp(this.y, 0 + this.radius, height - this.radius);
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
}

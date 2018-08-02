//Joel McKay

let person;

function setup() {
  var canvas = createCanvas(500, 500);

  canvas.parent("sketch-holder");

  person = new Person();
}

function draw() {
  background(0);
  person.update();
}

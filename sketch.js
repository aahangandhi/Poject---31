const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;

function setup() {
  createCanvas(880,700);
engine = Engine.create();
world = engine.world;

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 80; j <=width-10; j = j + 80) {
  plinkos.push(new Plinko(j, 75));
}

for (var j = 40; j <=width-10; j = j + 80) {
  plinkos.push(new Plinko(j, 175));
}

for (var j = 80; j <=width-10; j = j + 80) {
  plinkos.push(new Plinko(j, 275));
}

for (var j = 40; j <=width-10; j = j + 80) {
  plinkos.push(new Plinko(j, 375));
}


  base = new Ground(width/2, height, width, 20)


}

function draw() {
  background(0);  
  Engine.update(engine);
  base.display();

  if (frameCount%60===0){
    particles.push(new Particle(random(80,width-80),10,10));
  }

  for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
   }

   for (var l = 0; l < particles.length; l++) 
   {
     particles[l].display();
   }

  drawSprites();
}
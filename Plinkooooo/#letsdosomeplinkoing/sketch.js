const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var test;
var balls = [];
var plinkos = [];
var divs = [];
var divheight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  for(var num = 0; num<= width; num +=80){
    divs.push(new Div(num, height-divheight/2, 10, divheight));
    //divs[num].display();
  }
  for(var i = 40; i<= width; i+=50){
    plinkos.push(new Plinko(i, 75));
  }
  for(var i = 15; i<= width-10; i+=50){
    plinkos.push(new Plinko(i, 175));
  }
  for(var i = 40; i<= width; i+=50){
    plinkos.push(new Plinko(i, 275));
  }
  for(var i = 15; i<= width-10; i+=50){
    plinkos.push(new Plinko(i, 375));
  }
  ground = new Ground(240, 800, 480, 30)
}


function draw() {
  background("black");  
  Engine.update(engine);

  if(frameCount%60===0){
    balls.push(new Ball(random(210, 270)), 10);
  }

  for(var dis = 0; dis<divs.length; dis++){
    divs[dis].display();
  }
  for(var dis = 0; dis<plinkos.length; dis++){
    plinkos[dis].display();
  }
  for(var dis = 0; dis<balls.length; dis++){
    balls[dis].display();
  }
  
  ground.display();
}
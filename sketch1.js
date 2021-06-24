const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_opt = {isStatic : true}; 
  ground = Bodies.rectangle(400,390,800,10, ground_opt);
  var ball_opt = {restitution : 1.0};
  ball = Bodies.circle(200,50,20,ball_opt);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
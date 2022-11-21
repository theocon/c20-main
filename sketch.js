//Namespacing the modules from Matter library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine; //used to initialize(create) the engine
var world; //used to initialize the planet called world

var ground;
var ball;

function setup(){
  createCanvas(400,400);

  engine = Engine.create(); //step 1
  world = engine.world;

  var groundOptions = {
    //to stay in one place
    isStatic: true
  };

  ground = Bodies.rectangle(-50,380,600,20, groundOptions); //rectangle is from matter library
  World.add(world, ground);

  var ballOptions = {
    restitution: 1,
    density:0.5,
    friction:0.01,
  }

  ball = Bodies.circle(250,50,30,ballOptions);
  World.add(world,ball);

}

function draw(){
  background(51);

  //update the Engine - Step 2
  Engine.update(engine);

  push(); //capture new settings for the body
  fill("pink");
  rect(ground.position.x, ground.position.y, 600,20); //rect is from p5 library
  pop(); //revert back to old settings

  ellipse(ball.position.x, ball.position.y, 30, 30);
  
}


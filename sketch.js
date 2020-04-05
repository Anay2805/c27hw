const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var platform;
var string;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Platform(200, 150, 100, 20)
    ball = new Ball(200, 300, 30)
    string = new Slinger(ball.body,platform.body);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    platform.display();
    ball.display();
    string.display();  
    
    
  if(keyCode === 32){
   ball.body.position.x = mouseX;
   ball.body.position.y = mouseY;
  }
  fill("black");
  text("Press the SPACE key to move & ENTER to release", 100, 100);
}

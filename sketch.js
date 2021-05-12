
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var Paper_Ball
var Dustbin_Side_R,Dustbin_Side_L,Dustbin_Side_B;



function setup() {
	createCanvas(1200, 750);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,20);

	Paper_Ball = new Paper(100,640,50);

	Dustbin_Side_R = new Dustbin(1100,600,20,100);
	Dustbin_Side_L = new Dustbin(880,600,20,100);
	Dustbin_Side_B = new Dustbin(990,640,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();

  Paper_Ball.display();

  Dustbin_Side_R.display();
  Dustbin_Side_L.display();
  Dustbin_Side_B.display();
  
  
 
}


function keyPressed()	{
	if(keyCode === UP_ARROW)	{
		Matter.Body.applyForce(Paper_Ball.body, Paper_Ball.body.position, {x:500, y:-600})
	}
}

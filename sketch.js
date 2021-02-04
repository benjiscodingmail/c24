
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper ,wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papper=new Papper(200,400,40)
	wall1=new Dustbin(700,600,100,100)
	wall2=new Dustbin(700,650,100,100)
	wall3=new Dustbin(700,700,100,100)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papper.display()
  wall1.display()
  wall2.display()
  wall3.display()  
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(papperObjet.body,papperObject.body.position,{x:85,y:-85})

	}
}




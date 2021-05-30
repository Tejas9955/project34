
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 400, 900, 5);
  superhero= new Superhero(100,80,100,100);
  attach=new Throw(superhero.body,{x:100,y:465});
  block1 = new Block(260,350,30,40);  
  block2 = new Block(260,250,30,40);
  block3 = new Block(260,150,30,40);
  block4 = new Block(260,50,30,40);
  block5 = new Block(260,0,30,40);
  block6 = new Block(260,10,30,40);
  block7 = new Block(310,10,30,40);
  block8 = new Block(310,0,30,40);
  block9 = new Block(310,310,30,40);
  block10 = new Block(310,20,30,40);
  block11 = new Block(370,315,30,40);
  block12 = new Block(370,10,30,40);
  block13 = new Block(370,20,30,40);
  block14 = new Block(400,30,30,40);
  monster = new Monster(580,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();
  

}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}



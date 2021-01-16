const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,ground;
var leftSide,rightSide,bottom;

var dustbinSprite, dustbinImage;
var paperSprite, paperImage;

function preload()
{
dustbinImage=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  dustbinSprite = createSprite(610,585,50,50);
  dustbinSprite.addImage(dustbinImage);
  dustbinSprite.scale = 0.6;

  //Create the objects here with the help of classes.
  
	paper= new Paper(100, 600, 70);
  
  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

  //Engine.run(engine);
  
  /*
  Engine.run(engine) is also allowed but it's written in funcn setup
  Engine.up;date(engine) is written in funcn draw
  that's the only difference

  */
  
}


function draw() {
  rectMode(CENTER);

  background(225,225,225);
  
  Engine.update(engine);

  

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:265, y: -265})
  }
}
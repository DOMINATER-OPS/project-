const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var box,ground,g2,g3,g4

function setup() {
  createCanvas(1500,800);

 
  engine = Engine.create(); 
  world = engine.world;
  
  var order1={
    restitution:2
  }
   box=Bodies.rectangle(,200,50,50,order1)
  World.add(world,box)
  var order={
    isStatic:true
  }
  ground=Bodies.rectangle(200,750,300,20,order)
  World.add(world,ground)

  g2=Bodies.rectangle(550,750,300,20,order)
  World.add(world,g2)

  g3=Bodies.rectangle(900,750,300,20,order)
  World.add(world,g3)
  g4=Bodies.rectangle(1250,750,300,20,order)
World.add(world,g4)

  
 
  
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  rectMode(CENTER)

  
  
  rect(box.position.x,box.position.y,50,50)
  fill("red")
  rect(ground.position.x,ground.position.y,300,20)
  fill("green")
  rect(g2.position.x,g2.position.y,300,20)
  fill("blue")
  rect(g3.position.x,g3.position.y,300,20)
  fill("yellow")
  rect(g4.position.x,g4.position.y,300,20)
  
  if(box.position.x>400&&box.position.y>700){
    fill("green")
    rect(box.position.x,box.position.y,50,50)
   
  }
  if(box.position.x>850&&box.position.y>700){
    fill("blue")
    rect(box.position.x,box.position.y,50,50)
  }
  if(box.position.x>1200&&box.position.y>700){
    fill("yellow")
    rect(box.position.x,box.position.y,50,50)
  }
  if(box.position.x>150&&box.position.y>700){
    fill("red")
    rect(box.position.x,box.position.y,50,50)
  }
}
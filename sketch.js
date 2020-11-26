var car,wall;
var speed,weight;




function setup() {
  createCanvas(800,400);

  speed=random(40,50)
  weight=random(200,150)

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color(255)

  wall=createSprite(680, 200, 80,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  

  if(wall.x car.x.(car.width.wall).2)



  drawSprites();
}
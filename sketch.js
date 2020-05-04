var bullet,thickness,weight,speed,wall;
function setup() {
  createCanvas(1600,400);
 
  wall = createSprite(1250,200,60,400);
  bullet = createSprite(200,200,50,15);
  speed = random(223,321)
  thickness = random(22,83)
  bullet.velocityX = speed;
  weight = random(30,52)
}

function draw() {
  background(0);
  if(wall.x - bullet.x < (wall.width/2+bullet.width/2)){
   bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(damage >  10 ){
  wall.shapeColor = "green"
 
  }else {
  wall.shapeColor = "red"
   
  }
   
  
  }
  
  drawSprites();
}
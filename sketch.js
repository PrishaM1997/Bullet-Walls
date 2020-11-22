var bullet,speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);

  speed= random(200, 250);
  weight= random(30, 50);
  thickness= random(20, 80);

 bullet = createSprite(50, 150, 30, 15);
 bullet.shapecolor= (255);
 bullet.velocityX= speed; 

  wall = createSprite(1400, 200,thickness, height/2);
  wall.shapecolor= color(80,80,80);


}

function draw() {
  background("black");  

  if (hasCollided (bullet, wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness );
    if(damage>10){
     wall.shapeColor= color(255,0,0);
    }
    if(damage<10){
     wall.shapeColor= color(0,255,0);
    }
    
   
  }
  
    
  drawSprites();
}

function hasCollided (bullet, wall){
  bulletRightEdge= bullet.x +bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  
}
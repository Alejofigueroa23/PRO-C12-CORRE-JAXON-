var path, pathImg;
var boy ,boy_running;
var leftBoundary,rightBoundary;

function preload(){
  pathImg = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(380,600);

 path = createSprite(410,200,0,0);
 path.addImage(pathImg);
 path.velocityY = -5;
 path.scale=1.2;

 boy = createSprite(200,400,200,250);
 boy.addAnimation("running", boy_running);
 boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
    path.velocityY = 4;
    boy.M0ouseX = 8; 
    
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);

  path.collide(leftBoundary);
  path.collide(rightBoundary);
     
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

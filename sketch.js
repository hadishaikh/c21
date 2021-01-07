var movingRect, fixedRect;
var gameObject1, gameObject2, gameObeject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  gameObject1 = createSprite(300,300,80,80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(400,300,80,80);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(500,300,80,80);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;

  gameObject4 = createSprite(600,300,80,80);
  gameObject4.shapeColor = "green";
  gameObject4.debug = true;

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
 background(0,0,0);  

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";

    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  bounceOff(movingRect, fixedRect);

  controls();

  drawSprites();
}

function controls() {
  if(keyDown("w")){
    movingRect.velocityY = -6;
  }

  if(keyDown("s")){
    movingRect.velocityY = 6;
  }

  if(keyDown("d")){
    movingRect.velocityX = 6;
  }

  if(keyDown("a")){
    movingRect.velocityY = -6;
  }
}
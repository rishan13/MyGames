var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var tiger,tigerRunning
//var invisibleGround;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4
var gameOver, restart;
function preload(){
 tigerRunning = loadAnimation("tiger4.png","tiger5.png","tiger6.png","tiger7.png","tiger8.png","tiger9.png","tiger10.png","tiger11.png","tiger12.png","tiger13.png");
 backgroundImg = loadImage("forest.jpg")
 obstacle1 = loadImage("obstacle1.jpg");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  groundImage = loadImage("ground.png");

  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}
function setup() {
  createCanvas(600,200);
  tiger = createSprite(50,155,20,10);
  
  tiger.addAnimation("running", tigerRunning);
  //tiger.addAnimation("collided", tiger_collided);
  tiger.scale = 0.25;
  ground = createSprite(200,200,40,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -(6 + 3*score/100);

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;  
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;

  invisibleGround = createSprite(200,155,800,10);
  invisibleGround.visible = false;       

}
function draw() {
  background(backgroundImg);
  text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    
  }

  if(keyDown("space") &&  tiger.y >= 159) {
    //jumpSound.play();
    tiger.velocityY = -14;
  }
  tiger.velocityY = tiger.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    tiger.collide(invisibleGround);
    
  

    spawnObstacles();
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,130,10,40);
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
            }
    
            //assign scale and lifetime to the obstacle           
            obstacle.scale = 0.25;
            obstacle.lifetime = 300;
            //add each obstacle to the group
            //obstaclesGroup.add(obstacle);
          }
        }
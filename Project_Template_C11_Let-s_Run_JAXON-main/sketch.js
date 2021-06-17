var path;
var runner_running,runner_collided;
var power;

function preload(){
  //pre-load images
pathImg = loadImage("path.png")
runner_running = loadAnimation("runner-1.png","runner-2.png",);
runner_collided = loadImage;

powerImg = loadImage("power.png");


}

function setup(){
  createCanvas(400,400);
  //Moving background
 path=createSprite(200,400);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  runner=createSprite(110,350,40,40);
  runner.addAnimation("running", runner_running);
  runner.scale = .09;

  power= createSprite(200,20);
  power.addImage(powerImg);
  power.scale = .2;

}

function draw() {
  background(180);

  if ( path.y < 400 ){
    path.y = path.hight/2;

    if (keyDown("space")&& runner.y>= 100) {
      runner.velocityY = 1
     
     }

  
}

drawSprites();



//var sea,seaImg
//var ship,shipImg



function preload(){
//seaImg=loadImage("sea.png")
//shipImg=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
}

function setup(){
  //createCanvas(1350,600);
  //sea=createSprite(200,200,-40,40);
  //sea.addImage(seaImg);
  //ship=createSprite(110,350,40,40);
  //ship.addImage(shipImg);

  //ship.scale = 0.4;
}

function draw() {
  //background("blue");
 



  //if (keyDown("space")&& ship.x>= 100) {
   // ship.velocityX = 1
  
  }
  
  if (sea.x < 0 ){
    //sea.x = sea.width/2;
    
    }

    //drawSprites();
  
}
  

 



var trex ,trex_running;
var chao, chaoImg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,300)
  
  //create a trex sprite
  trex = createSprite(50,250,10,10);
  trex.addAnimation("trexrun", trex_running);
  chao = createSprite(300,290,600,20);
  chao.addImage(chaoImg);
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY + 0.5;

  chao.velocityX=-2;

  trex.collide(chao);
  drawSprites();

  if(chao.x<0){
    chao.x = chao.width/2;
  }

}

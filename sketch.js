var bg,bgImg;

var fairy,fairyAni;

var star,starImg;

var sound;

function preload(){
//preload the images here

bgImg = loadImage("starnight.png");

fairyAni = loadAnimation("fairy1.png","fairy2.png");

starImg = loadImage("star.png");

sound = loadSound("joyMusic.mp3")


}

function setup() {
  createCanvas(800, 600);
  
bg = createSprite(400,200,900);
bg.scale=0.5;
bg.addImage(bgImg);
sound.play();

fairy = createSprite(100,400,50,50);
fairy.addAnimation("fairyFlying",fairyAni);
fairy.velocityX = 0;
fairy.scale = 0.2;

star = createSprite(650,50,10,10);
star.addImage(starImg);
star.scale = 0.17;
star.velocityY = 0;

}


function draw() {
  background("black");

 if (keyWentDown (RIGHT_ARROW)){
    fairy.velocityX = 5;
  
  }

  if (keyWentUp (RIGHT_ARROW)){
    fairy.velocityX = 0;
  
  }

  if (keyWentDown (LEFT_ARROW)){
    fairy.velocityX = -5;
  
  }

  if (keyWentUp (LEFT_ARROW)){
    fairy.velocityX = 0;
  
  }

 if (keyDown (DOWN_ARROW)){
  star.velocityY = 6;
  }

if (star.position.y> 375){
  star.velocityY=0;
  sound.stop();
  fairy.velocityX=0;
}

 



drawSprites();
}

var spaceship,spaceshipImage
var alien,alienImage,alienGroup
var bullet,bulletImage,bulletGroup

function preload(){
spaceshipImage = loadImage("images/sp.png")
alienImage = loadImage("images/Alien1.png")
bulletImage = loadImage("images/Laser.png")
}

function setup(){
createCanvas(700,900)

spaceship = createSprite(340,830,50,50)
spaceship.addImage("sp",spaceshipImage)
spaceship.scale = 0.4

bulletGroup=createGroup()
alienGroup=createGroup()
}

function draw(){
background("black")

spaceship.x = World.mouseX
spawnAlien(9,150,70)
spawnAlien(7,250,140)
spawnAlien(5,350,210)
spawnAlien(3,450,280)
spawnAlien(1,550,350)
if (keyWentDown("space")) {
  createBullet();
  
}
if(bulletGroup.isTouching(alien)){
  alien.remove()
}

drawSprites()
}


function spawnAlien(x,y,z){
  for(var i = 0; i<x; i++){
    alien = createSprite(z+70*i,y,50,30)
    alien.addImage("a",alienImage)
    alien.scale = 0.4
    //alienGroup.add(alien)
  }
}


function createBullet() {
  bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.y = spaceship.y;
  bullet.x = spaceship.x;
  bullet.velocityY = -15;
  bullet.lifetime = 100;
  bullet.scale = 0.1;
  bulletGroup.add(bullet)
}

function removeAlien(bullet,alien){
  alien.remove()
}
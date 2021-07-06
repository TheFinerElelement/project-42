var hasDocked=false;
function preload(){
bg= loadImage("spacebg.jpg");
issimg=loadImage("iss.png")
scimg=loadImage("spacecraft1.png")
scimg1=loadImage("spacecraft2.png")
scimg2=loadImage("spacecraft3.png")
scimg3=loadImage("spacecraft4.png")

}




function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240);
  spacecraft.addImage(scimg)
  spacecraft.scale=0.15;

  
  iss=createSprite(330,130);
  iss.addImage(issimg)
  iss.scale=0.5;



  
}

function draw() {
  background(bg);  
  drawSprites();

  if(!hasDocked){
spacecraft.x+=random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y-=2
  }
  
  if(keyDown("DOWN_ARROW")){
     spacecraft.addImage(scimg1)
    spacecraft.y+=2
  }
  
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3)
    spacecraft.x-=2
  }

  if(keyDown("Right_ARROW")){
     spacecraft.addImage(scimg2)
    spacecraft.x+=2
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(30);
    fill(255);
    text("Docking Successfull",200,300)
  }





  
  
}


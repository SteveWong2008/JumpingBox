var canvas;
var music;
var object1, object2, G01 , G02 , G03 , G04 , Jbox;
var topedge, leftedge, rightedge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(1200,800);
  
  topedge = createSprite(600,0,1200,5);
  rightedge = createSprite(1200,400,5,800);
  leftedge = createSprite(0,400,5,800)

    //create 4 different surfaces
    G01 = createSprite(150,780,300,50);
    G02 = createSprite(450,780,300,50);
    G03 = createSprite(750,780,300,50);
    G04 = createSprite(1050,780,300,50);
    G01.shapeColor = rgb(255, 153, 51);
    G02.shapeColor = "white";
    G03.shapeColor = rgb(19, 136, 8);
    G04.shapeColor = rgb(0, 0, 128);


    //create box sprite and give velocity
    Jbox = createSprite(random(20,750),400,50,50);
    Jbox.shapeColor = "yellow";
    Jbox.velocityX = 5;
    Jbox.velocityY = random(6,7);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(isTouching(Jbox, topedge)){  
      bounceOff(Jbox,topedge);

    }

    if(isTouching(Jbox, rightedge)){  
      if(Jbox.velocity > 0){
      Jbox.velocityX = (Jbox.velocityX * 1);
      Jbox.velocityY = (Jbox.velocityY *  -1);
      }
      else {
        Jbox.velocityX = (Jbox.velocityX * -1);
        Jbox.velocityY = (Jbox.velocityY *  1);
      }
    }

    if(isTouching(Jbox, leftedge)){  
      if(Jbox.velocity > 0){
        Jbox.velocityX = (Jbox.velocityX * -1);
        Jbox.velocityY = (Jbox.velocityY *  -1);
        }
        else {
          Jbox.velocityX = (Jbox.velocityX * -1);
          Jbox.velocityY = (Jbox.velocityY *  1);
        }

    }
    
    //add condition to check if box touching surface and make it box
    if(isTouching(Jbox, G01)){
      Jbox.shapeColor = rgb(255, 153, 51);  
      bounceOff(Jbox,G01);
      music.stop();

    }

    

    if(isTouching(Jbox, G02)){
      Jbox.shapeColor = "white";
      Jbox.velocityX = (Jbox.velocityX * 1);
      Jbox.velocityY = (Jbox.velocityY * -1);
      music.play();
    }
  
    if(isTouching(Jbox, G03)){
      Jbox.shapeColor = rgb(19, 136, 8);
      bounceOff(Jbox,G03);
      
    }
  if(isTouching(Jbox, G04)){
      Jbox.shapeColor = rgb(0, 0, 128);
      Jbox.velocityX = 0;
      Jbox.velocityY = 0;
    }       
    
    drawSprites(); 
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2 
   && object2.x-object1.x < object2.width/2 + object1.width/2 
   && object2.y-object1.y < object2.height/2 +object1.height/2 
   && object1.y-object2.y < object2.height/2 + object1.height/2){ 
   return true; 
   }
   else {
        return false; 
   }
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (1);
  object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  } 
}
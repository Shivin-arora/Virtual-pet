//Create variables here
var dog,happyDog,food,foodStock,database,foodr;
var hdimg,dimg;
var data;

function preload()
{
  //load images here
  dImg=loadImage("images/Dog (1).png");
  hdImg=loadImage("images/dogImg1.png");
  loadImage("images/Dog (1).png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage("images/Dog (1).png");

  database=firebase.database();
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87);
/*if(food!==undefined){
  if(keyWentDown(UP_ARROW)){
   writeStock(food);
  
    dog.addImage(hdImg);
  }
}*/
  drawSprites();
  
  //add styles here


function readStock(data){
  foodr=data.val();

fill("white");
  textSize(20);
  stroke(10);
  text("Food Stock:"+foodStock,0,150);
}
/*function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}*/
}



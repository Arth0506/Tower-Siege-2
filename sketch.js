const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand, stand2;
var block, block2, block3, block4;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygonObj=new Polygon(135,270,30); 

    ground = new Ground(600,390,1200,20);
    stand = new Ground(450,320,250,10);
    stand2 = new Ground(850, 225, 250, 10);
    block = new Box(365,310,40,30);
    block2 = new Box(405,310,40,30);
    block3 = new Box(445,310,40,30);
    block4 = new Box(485,310,40,30);
    block5 = new Box(525,310,40,30);
    block6 = new Box(385,280,40,30);
    block7 = new Box(425,280,40,30);
    block8 = new Box(465,280,40,30);
    block9 = new Box(505,280,40,30);
    block10 = new Box(405,250,40,30);
    block11 = new Box(445,250,40,30);
    block12 = new Box(485,250,40,30);
    block13 = new Box(425,220,40,30);
    block14 = new Box(465,220,40,30);
    block15 = new Box(445,190,40,30);

    //next step
    block16 = new Box(765,215,40,30);
    block17 = new Box(805,215,40,30);
    block18 = new Box(845,215,40,30);
    block19 = new Box(885,215,40,30);
    block20 = new Box(925,215,40,30);
    block21 = new Box(785,185,40,30);
    block22 = new Box(825,185,40,30);
    block23 = new Box(865,185,40,30);
    block24 = new Box(905,185,40,30);
    block25 = new Box(805,155,40,30);
    block26 = new Box(845,155,40,30);
    block27 = new Box(885,155,40,30);
    block28 = new Box(825,125,40,30);
    block29 = new Box(865,125,40,30);
    block30 = new Box(845,95,40,30);

    launcherObject = new Slingshot(polygonObj.body, {x:135, y:270});
    

}

function draw(){


    Engine.update(engine);

    background(230);
    textSize(25);
    text("Use the polygon to knock down the blocks!!",50 ,50);

    ground.display();
    stand.display();
    stand2.display();
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    //next step
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    polygonObj.display();
    launcherObject.display();
    
  
}
function mouseDragged(){

    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygonObj.body, {x: mouseX , y: mouseY});
    //}
}

//create mouseReleased function here
function mouseReleased(){

    launcherObject.fly();


}


//create keyPressed function here
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygonObj.body,{x:135, y:270});
    launcherObject.attach(polygonObj.body);
 }
}


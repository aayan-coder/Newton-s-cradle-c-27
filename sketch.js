const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var toproof;
var rope1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  toproof= new roof(380,60,325,15);
  bob1=new bob(380,300,30);
  bob2=new bob(bob1.x+60,300,30);
  bob3=new bob(bob2.x+60,300,30);
  bob4=new bob(bob1.x-60,300,30);
  bob5=new bob(bob4.x-60,300,30);
  
  rope1=new rope(bob1.body,toproof.body,0,0);
  rope2=new rope(bob2.body,toproof.body,60,0);
  rope3=new rope(bob3.body,toproof.body,120,0);
  rope4=new rope(bob4.body,toproof.body,-60,0);
  rope5=new rope(bob5.body,toproof.body,-120,0);

}

function draw() {
  background("white");  

  Engine.update(engine);
 
  toproof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    Body.applyForce(bob5.body,bob3.body.position,{x:-115,y:-115});
  }
}

function isTouching(object1,object2)
{
  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.height/2+object1.height/2 )
  {
    
    return true;
  }
  else 
  {
    return false;
  }

}

function bounce(object1,object2)
{
   if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2)
    {
      object1.velocityX=object1.velocityX*-1;
      object2.velocityX=object2.velocityX*-1;
    }
   else if(object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2 )
    {
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
    
    }

}

function hasCollided(object1,object2)
{
    rightedge=object1.x+object1.width;
    leftedge=object2.x;
    if(rightedge>=leftedge)
    {
        return true;
    }
    else
    {
        return false;
    }

}
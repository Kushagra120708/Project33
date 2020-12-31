  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var particle;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function mousePressed() {
  if (gameState !== "end") {
    turn++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}

function draw() {
  background("black");
  textSize(25)
  text("Score:"+score,20,40);

  text("1000",10,530);
  text("1000",90,530);
  text("1000",730,530);
  text("1000",650,530);

  textSize(26)
  text("500",180,530);
  text("500",580,530);

  text("400",260,530);
  text("400",500,530);

  text("200",340,530);
  text("200",420,530);

  fill("yellow");
  rect(400,490,800,10);

  Engine.update(engine);

  if (particle!=null) {
    particle.display();

    if (particle.body.position.y > 490 ) {


        if (particle.body.position.x < 160 ||
            particle.body.position.x > 640) {

          score = score + 1000;
          particle = null;
          if (turn >= 5) gameState = "end";

        }


    if (particle.body.position.x > 160 && particle.body.position.x < 240 ||
        particle.body.position.x > 560 && particle.body.position.x < 640 ) {

          score = score + 500;
          particle = null;
          if (turn >= 5) gameState = "end";

        }
    }
    if (particle.body.position.x > 240 && particle.body.position.x < 320 ||
        particle.body.position.x > 480 && particle.body.position.x < 560 ) {

      score = score + 400;
      particle = null;
      if (turn >= 5) gameState = "end";

     }
    if (particle.body.position.x > 320 && particle.body.position.x < 480) {

      score = score + 200;
      particle = null;
      if (turn >= 5) gameState = "end";

  }
}
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    //score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

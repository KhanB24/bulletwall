var bullet,wall,thickness
var speed, weight


function setup() {
  createCanvas(1600,400);
  
//55,90
  speed = random(50,150)
  weight = random(400,1500)
  bullet = createSprite(50,200,80,10)
  bullet.shapeColor=color(255)
   thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2)

  bullet.velocityX = speed

 
  
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
  //  console.log(bullet.x-wall.x )
    // console.log(mouseX)
  // console.log(bullet.x)
  

  if(wall.x-bullet.x <(bullet.width+wall.width/2))
  {
    bullet.velocityX=0
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0)
    }

    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0)
    }

  }
}
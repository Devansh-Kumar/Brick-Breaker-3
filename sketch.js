var brick;
var paddle;
var ball;
var edges;
var brickGroup;
var gameState = "Serve"
var lives = 5
var paddleImg,ballImg
var bgImg
var heartImg;
var heartGroup,heart;
var score = 0
var bounceSound;
var gameOverSound;
var wonSound;

function preload(){
paddleImg = loadImage("Paddle.png")
ballImg = loadImage("ball.png")
bgImg = loadImage("bg.png")
heartImg = loadImage("heart.png")
bounceSound = loadSound("bounce.mp3")
gameOverSound = loadSound("gameOver.mp3")
wonSound = loadSound("wonSound.mp3")
}
function setup() {
  createCanvas(800,400);
  brickGroup = new Group()
  heartGroup = new Group()

  var x = 20;
  for(var i = 0;i<5;i = i+1){
  heart = createSprite(x,20)
  heart.addImage(heartImg)
  x = x+40
  heartGroup.add(heart)
  heart.scale = 0.03  
  }
  
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,50,80,20) 
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,80,80,20)
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
brick = createSprite(i,110,80,20)
brickGroup.add(brick) 
}
for(var i = 50;i<800;i = i+100){
  brick = createSprite(i,140,80,20)  
  brickGroup.add(brick) 
  }
  for(var i = 50;i<800;i = i+100){
    brick = createSprite(i,170,80,20) 
    brickGroup.add(brick)  
    }
    for(var i = 50;i<800;i = i+100){
      brick = createSprite(i,200,80,20) 
      brickGroup.add(brick)  
      }
      for(var i = 50;i<800;i = i+100){
        brick = createSprite(i,230,80,20)
        brickGroup.add(brick)   
        }
        for(var i = 0;i<brickGroup.length;i = i +1){
        brickGroup.get(i).shapeColor = color(random(0,255),random(0,255),0)
        }
     paddle = createSprite(400,390,150,15)
     paddle.addImage(paddleImg)
     paddle.scale = 0.3
     ball = createSprite(400,374,15,15)
     ball.addImage(ballImg)
     ball.scale = 0.2

edges = createEdgeSprites()

}

function draw() {
  background(bgImg);
  
  /*fill("red") 
  textSize(24)
text("LIVES:- "+lives,670,25)*/
fill("green")
textSize(24)
stroke("black")
strokeWeight(9)
text("Score:  "+score,670,25)
for(var i=0;i<brickGroup.length;i = i+1){
  if(ball.isTouching(brickGroup.get(i))){
    ball.bounceOff(brickGroup.get(i))
  brickGroup.get(i).destroy() 
  score = score +10
  bounceSound.play()
  }
}
if(keyDown("space") && gameState === "Serve"){
  ball.velocityX = 5
  ball.velocityY = -5  
  gameState = "play"
  
}
if(gameState === "play"){
  paddle.x = mouseX
}
if(gameState === "Serve"){
fill("red")
textSize(28)
text("PRESS 'SPACE' TO SERVE",245,300)  
}
if(ball.y>400){
ball.x = 400
ball.y = 374
paddle.x = 400
paddle.y = 390
ball.setVelocity(0,0)
gameState = "Serve"
lives = lives-1 
heartGroup.get(lives).destroy() 
}

if(lives<1){
gameState = "end"
textSize(28)
fill("blue")
stroke("black")
strokeWeight(9)
text("GAME OVER",320,280)
textSize(28)
fill("red")
stroke("green")
strokeWeight(9)
text("PRESS R TO RESTART",270,320)
console.log(gameState)
gameOverSound.play()
} 
if(brickGroup.length === 0){
fill("green")
textSize(28)
stroke("black")
strokeWeight(9)
text("YOU WON",320,280)
fill("red")
textSize(28)
stroke("green")
strokeWeight(9)
text("PRESS R TO RESTART",270,320) 
gameState = "end" 
wonSound.play()
}
if(gameState === "end"&&keyDown("r")){
  reset();

}
/*if(keyDown("r")){
console.log("hi")
gameState = "Serve"  
brickGroup.destroyEach()
//console.log(gameState)
}*/

ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
//ball.bounceOff(brick)
ball.bounceOff(paddle)
  drawSprites();
}
function reset(){
gameState = "Serve"
console.log(gameState)
lives=5;
brickGroup.destroyEach()
for(var i = 50;i<800;i = i+100){
  brick = createSprite(i,50,80,20) 
  brickGroup.add(brick) 
  }
  for(var i = 50;i<800;i = i+100){
  brick = createSprite(i,80,80,20)
  brickGroup.add(brick) 
  }
  for(var i = 50;i<800;i = i+100){
  brick = createSprite(i,110,80,20)
  brickGroup.add(brick) 
  }
  for(var i = 50;i<800;i = i+100){
    brick = createSprite(i,140,80,20)  
    brickGroup.add(brick) 
    }
    for(var i = 50;i<800;i = i+100){
      brick = createSprite(i,170,80,20) 
      brickGroup.add(brick)  
      }
      for(var i = 50;i<800;i = i+100){
        brick = createSprite(i,200,80,20) 
        brickGroup.add(brick)  
        }
        for(var i = 50;i<800;i = i+100){
          brick = createSprite(i,230,80,20)
          brickGroup.add(brick)   
          }
          for(var i = 0;i<brickGroup.length;i = i +1){
            brickGroup.get(i).shapeColor = color(random(0,255),random(0,255),0)
            }
}
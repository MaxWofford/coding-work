var player;
var playerImage;
var enemy;
var enemyImage; 
 
 function preload() {
  playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
}

function preload(){
  playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
}
 
 function mouseClicked() {
  isGameOver = false;
  player.position.x = width/2;
  player.position.y = height-25;
  enemy.position.x = width/2;
  enemy.position.y = 0;
}
 
 

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
}

 
 
 
 function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}
 
function setup() { 
    isGameOver = false; 
    createCanvas(250, 250); 
    player = createSprite(width/2, height-25, 50, 50); 
    enemy = createSprite(width/2, 0, 10, 30); 
// in the setup function...
player = createSprite(width/2, height-25, 50, 50);
player.addImage(playerImage);
enemy = createSprite(width/2, 0, 10, 30);
enemy.addImage(enemyImage);} 
 
 
function draw() { 
    if (isGameOver) { 
        gameOver(); 
    } else { 
        if (enemy.overlap(player)) { 
            isGameOver = true; 
        } 
        // ...the rest of the draw function 
        background(0, 0, 100); 
 
 
        if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) { 
          player.position.x = player.position.x + 3; 
        } 
 
 
        if (keyDown(LEFT_ARROW) && player.position.x > 25) { 
          player.position.x = player.position.x - 3; 
        } 
 
 
        enemy.position.y = enemy.position.y + 3; 
 
 
        if (enemy.position.y > height) { 
          enemy.position.y = 0; 
          enemy.position.x = random(5, width-5); 
        } 
 
 
        drawSprites();         
    } 
} 
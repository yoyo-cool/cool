var gameState=0;
var playerCount;

var form,game,player

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game()
  game.start()
  
}

function draw(){
  background("white");

  if(playerCount===4){
    gameState=1
    game.update(1)
  }

  if(gameState===1){
    game.play()
  }


}


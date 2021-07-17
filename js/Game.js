class Game{

    constructor(){}


    getState(){
       database.ref('gameState').on("value", (data)=>{
           gameState=data.val()
       })
    }



    update( state){
       database.ref('/').update({
           gameState:state
       })
    }



    
    async start(){

        player = new Player()

        form= new Form()
        form.display()
        
        var countRef = await database.ref('playerCount' ).once("value")
        if(countRef.exists() ){
        player.getCount()
    }}

    play(){

        form.greeting.hide()
        textSize(20)
        fill("blue")
        stroke("red")
        strokeWeight(1)
        text("Game Started!",200,200)

    }
}
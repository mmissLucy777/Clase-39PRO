class Game{
    constructor(){}

    getState(){ //Función para obtener el estado del juego
        var gameStateRef= database.ref('gameState'); //referencia al gameState de la DB creada
        gameStateRef.on("value",function(data){gameState = data.val();}) //Crea oyente para el gameState del juego
    }//Fin gameState()

    update(state){//Función para actualizar la referencia de la DB
        database.ref("/").update({gameState: state}); // "/" se refiere a la DB principal del gameState, la "raíz"
    }//Fin update()

    async start(){ //Función para iniciar el juego, se mostrará en pantalla dependiendo del estado del juego
        if(gameState === 0){ 
            player1 = new Player() //Crera un nuevo objeto para el jugador
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player1.getCount(); //Obtiene el puntaje para el jugador
            }
            
            form1 = new Form(); //Crea un objeto para el formulario
            form1.display(); //Muestra el formulario
        }//Fin if

        car1 = createSprite(100,200,50,50);   //Sprite para los autos de la carrera
        car2 = createSprite(300,200,50,50);
        car3 = createSprite(300,200,50,50);
        car4 = createSprite(300,200,50,50);
        cars = [car1, car2, car3, car4]; //Guarda los sprites de los autos en una matriz

        car1.addImage("car1", car1Img); //Tommys
        car2.addImage("car2", car2Img); //Leo
        car3.addImage("car3", car3Img); //Yayo
        car4.addImage("car4", car4Img); //Papá

        car1.scale = 0.25;
        car2.scale = 0.5;
        car3.scale = 0.5;
        car4.scale = 0.25;

        car1.x = 150;
        car2.x = 250;
        car3.x = 350;
        car4.x = 450;

        car1.y = 100;
        car2.y = 100;
        car3.y = 100;
        car4.y = 100;

    }//Fin start()

    play(){ //Función para el estado del juego PLAY o 1
        form1.hide();    //Oculta el formulario cuando estamos en PLAY
        Player.getPlayerInfo(); //Manda a llamar la función para mostrar la info de los jugadores

        if(allplayers !== undefined){ //Significa que existe algún jugador registrado en la DB
            var index = 0; //Indice del jugador
            var x=0; //Posiciòn en X del jugador
            var y;      //Posiciòn en Y del jugador

            for(var plr in allplayers){
                index = index + 1; //Agrega 1 al index para cada loop
                x = x +200;     //Posición del auto desde cualquier otro en el eje de las X
                y = displayHeight - allplayers[plr].distance; //Usa la información en la DB para la dirección en el eje de las Y
                cars[index-1].x = x;
                cars[index-1].y = y;

               if(index === player1.index){
                    cars[index - 1].shapeColor = rgb(205, 92, 92);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                }//Fin if index

            }//Fin For
        }//Fin if allplayers

        
        if(keyIsDown(UP_ARROW) && player1.index !== null){ //Si se presiona la flecha de arriba y el jugador es distinto de nullo
            player1.distance +=10; //Actualiza la distancia de los jugadores
            player1.update();    //Actualiza información en la base de datos
        }//Fin if keyIsDown
        
        drawSprites(); //Dibujar los sprites
    }//Fin play()

}//Fin class
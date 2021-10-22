class Player{ //Clase para los jugadores
    constructor(){
        this.index = null;  //Identificador del nuevo jugador 
        this.distance = 0;  //Distancia recorrida en el juego
        this.name = null;   //Nombre del nuevo jugador
    }

    getCount(){//Función para obtener playerCount
        console.log("Indice del nuevo jugador A: ", this.index);
        console.log("Nombre del nuevo jugador A: ", this.name);
        console.log("Distancia del nuevo jugador A: ", this.distance);
        var playerCountRef = database.ref('playerCount');  //Obtiene la referencia a la ubicación del valor de la DB para playerCount
        playerCountRef.on("value",(data) => {playerCount = data.val();})    //Crea el "oyente" para los cambios en la DG de playerCount
    }//Fin getCount()

    updateCount(count){ //Función para actualizar playerCount en la DB
        console.log("PASO 4: player1.updateCount()")
        database.ref("/").update({playerCount: count}); //playerCount fue creado en firebase
        console.log("Contador actualizado B: ", playerCount);
    }//Fin updateCount

    update(){  //Función para actualizar el nombre y la distancia del jugador
        console.log("PASO 3: player1.update() ");
        var playerIndex = "players/player" + this.index; //Obtiene el indice del jugador
        database.ref(playerIndex).set({name: this.name, distance: this.distance})
        console.log("Indice del nuevo jugador B: ", this.index);
        console.log("Nombre del nuevo jugador B: ", this.name);
        console.log("Distancia del nuevo jugador B: ", this.distance);
    }//Fin update

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=> {allplayers = data.val()});
        console.log("playerInfoRef: ", playerInfoRef);
        console.log("allplayers: ", allplayers);
    }//Fin getPlayerInfo

    
}
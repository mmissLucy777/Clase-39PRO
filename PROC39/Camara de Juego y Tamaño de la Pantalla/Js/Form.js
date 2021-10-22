class Form{ //Clase para el formulario de registro de los jugadores
    constructor(){

        this.input = createInput("Nombre"); //Variable para crear una entrada de datos para nombre
        this.button = createButton("Play"); //Boton para inicar juego
        this.title = createElement("h1");   //Tìtulo de la página
        this.greeting = createElement("h1"); //Bienvenida
    }

    hide(){ //Función para ocultar el mensaje de bienvenida, buton Play y cuadro de texto para Nombre
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        //var title = createElement("h1");//Cabecera del título
        this.title.html("Car Racing Game");
        this.title.position(displayWidth-190,0);      //Ajusta posición automática del Título del juego        

        this.input.position(displayWidth/2,displayHeight/2); //Posición del la variable input (entrada del nombre) en pantalla
        this.button.position(displayWidth/2+70, displayHeight/2+70);

        this.button.mousePressed(()=>{ //Función para el clic sobre el botón
            this.input.hide(); //Oculta el nombre
            this.button.hide();  //Oculta el botón
            player1.name = this.input.value();   //Obtiene el valor de la entrada 
            playerCount+=1; //Actualiza el número de jugadores
            player1.index = playerCount;
            player1.update(); //Actualiza en la DB el nombre del jugador -- LLAMADA PASO 3
            player1.updateCount(playerCount); //Actualiza en la DB el número de jugadores -- LAMADA PASO4
            this.greeting.html("Welcome to my life " + player1.name); //Saluda al jugador nuevo
            this.greeting.position(displayWidth/2,displayHeight/2); //Posición del mensaje de bienvenida en pantalla
        }); 


    }//Fin display
}//Fin Form.js
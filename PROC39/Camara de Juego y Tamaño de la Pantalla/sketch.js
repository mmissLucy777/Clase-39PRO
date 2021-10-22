
/* CLASE PRO-38 
   LUCY REYES DURÁN
   07 OCTUBRE 2021
   
   OBJETIVO: Los alumnos usan los datos de la base de datos, para diseñar el juego de carreras de autos, cuando el juego está 
   en play (jugar); y usan la Cámara del Juego, para enfocar el juego en el jugador activo que está jugando. 
   Los alumnos también ajustan el lienzo del juego, al tamaño del dispositivo de visualización.*/

var database, canvas;

var gameState =0;
var playerCount=0;
var distance=0;

var form1, game1;
var allplayers, player1;

var car1, car2, car3, car4, cars; //4 autos y matriz para guardar autos
var car1Img, car2Img, car3Img, car4Img, track1Img, track2Img, groundImg;  //Imagenes del juego

function preload(){
    car1Img = loadImage("Sprites/Tommys.png");
    car2Img = loadImage("Sprites/Leo.png");
    car3Img = loadImage("Sprites/Yayo.png");
    car4Img = loadImage("Sprites/Papa.png");
}

function setup(){
    canvas = createCanvas(displayWidth -20,  displayHeight-30); //Ajusta automáticamente el tamaño de la pantalla del dispositivo
    database = firebase.database(); //Crea una base de datos en firebase

    game1 = new Game();
    console.log("PASO 1: game1.getState()");
    game1.getState();

    console.log("PASO 2: game1.start()");
    game1.start();
}//Fin setup


function draw(){
   background(205, 92, 92); //RGB rojoIndian
    
    if(playerCount === 4){
        game1.update(1); //Actualiza el estado del juego, pasando 1 como parámetro a la función update de Game.js
    }//Fin if

    if(gameState === 1){
        clear(); //?????????????????????
        game1.play(); //Manda a llamar la función play() de Game.js
    }//Fin if
}//Fin draw


var game_canvas;
var game_context;

var currentpanel=0;

var game_loaded = false;

var title ="Jumping";
var backgroundcolor = "black";

function init () {
    
      game_canvas = document.getElementById("gameCanvas");
      game_context = game_canvas.getContext("2d"); 
    
    
    if (!game_loaded) {
        document.addEventListener('keydown',function (event){
            captureGameiputs (event);
        });
      setInterval(updategame,10);
    game_loaded = true ;
        
    }
    console.log("juego cargado");
    
}
function captureGameiputs (event) {
    switch(currentpanel){
        case 0:
            splashscreeninputs (event)
            break;
        case 1 :
            initscreeninputs (event)
            break;
        case 2 :
            creditscreeninputs (event)
            break;
        case 3 :
            pausescreeninputs (event)
            break;
            
        default:
            
            break;
    }
}

function updategame () {
     game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);
     
    switch(currentpanel) {
        case 0 :
            splashscreen ();
            break;
        case 1 :
            initscreen();
            break;
        case 2 :
            creditscreen();
            break;
            
        case 3 :
            pausescreen();
            break;
        default:
            console.log("sin definir");
            break;
    }
}
function splashscreen () {
    
drawheadercomponent ();
drawdescriptioncomponent ("Bienvenido al juego jumping");
drawalgo ("Para continuar pulsa 's'");
}

function drawheadercomponent (){
    drawpanel(18,10,430,30);
drawtext(title,200,28);
}

function drawdescriptioncomponent (description) {
     drawpanel2(18,60,430,200);
    drawtext(description,20,80);
}

function drawalgo (patata) {
     drawpanel3(18,280,430,30);
    drawtext(patata,20,300);
}

function drawpanel(posx,posy,width ,height) {
   game_context.fillStyle = "grey"; 
    game_context.fillRect(posx, posy, width, height);
}

function drawpanel2(posx,posy,width ,height) {
   game_context.fillStyle = "darkblue"; 
    game_context.fillRect(posx, posy, width, height);
}
function drawpanel3(posx,posy,width ,height) {
   game_context.fillStyle = "green"; 
    game_context.fillRect(posx, posy, width, height);
}

function drawtext(posx,posy,text) {
    game_context.fillStyle= "black";
    game_context.font="16px Arial";
    game_context.fillText(posx,posy,text)
}

function initscreen () {
    
drawheadercomponent ();
drawdescriptioncomponent ("El juego se acaba cuando no puedas continuar más");
drawalgo ("Para continuar pulsa 's'");
}

function pausescreen () {
    
drawheadercomponent ();
drawdescriptioncomponent ("Juego en pausa");
drawalgo ("Para continuar pulsa 's'");
}

function creditscreen () {
    
drawheadercomponent ();
drawdescriptioncomponent ("Creditos");
drawalgo ("Para continuar pulsa 's'");
}

function splashscreeninputs (event) {
    if(event.keyCode ==51){
        currentpanel = 1;
    } else if (event.keyCode == 49 || event.keyCode == 97) {
        currentpanel = 1;
    }
     else if (event.keyCode == 80){
        currentpanel=3;
    }
    else if (event.keyCode == 50 || event.keyCode == 98){
        currentpanel= 2;
    }
}
function initscreeninputs (event) {
    if(event.keyCode ==27){
        currentpanel = 0;
    } else if (event.keyCode == 50 || event.keyCode == 98){
        currentpanel= 2;
    }
     else if (event.keyCode == 80){
        currentpanel=3;
    }
    else if (event.keyCode == 49 || event.keyCode == 97) {
        currentpanel = 1;
    }
}

function creditscreeninputs (event) {
    if(event.keyCode ==27){
        currentpanel=0;
    }else if (event.keyCode == 80){
        currentpanel=3;
    }
    else if (event.keyCode == 50 || event.keyCode == 98){
        currentpanel= 2;
    }
    else if (event.keyCode == 49 || event.keyCode == 97) {
        currentpanel = 1;
    }

}
function pausescreeninputs (event) {
    if(event.keyCode ==27){
        currentpanel=0;
    }else if (event.keyCode == 80){
        currentpanel=3;
    }
    else if (event.keyCode == 50 || event.keyCode == 98){
        currentpanel= 2;
    }
    else if (event.keyCode == 49 || event.keyCode == 97) {
        currentpanel = 1;
    }
}
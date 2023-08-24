var boton=document.getElementById('btn--remix');

boton.addEventListener('click',function(){
    var nombreJugador=document.getElementById('nombreJugador').value;
    alert(`Bienvenida ${nombreJugador}`);
})

//codigo para comprobar respuestas

function checkCine(){
    var gpbtn11=document.getElementById("respuestaCine11");
    var gpbtn12=document.getElementById("respuestaCine12");
    var gpbtn13=document.getElementById("respuestaCine13");
    var aciertos=0;
    var errores=0;
    
    //comprobacion de pregunta 1
        if(gpbtn11.checked==true){
            aciertos=aciertos+1;
            document.getElementById("pregunta-area-1").style.backgroundColor="#86e4a8";
        }else if(gpbtn12.checked==true){
            document.getElementById("pregunta-area-1").style.backgroundColor="#f49c90";
        }else if(gpbtn13.checked==true){
            document.getElementById("pregunta-area-1").style.backgroundColor="#f49c90";
        }
    
     //comprobacion de pregunta 2
    var gpbtn21=document.getElementById("respuestaCine21");
    var gpbtn22=document.getElementById("respuestaCine22");
    var gpbtn23=document.getElementById("respuestaCine23");

        if(gpbtn21.checked==true){
            aciertos=aciertos+1;
            document.getElementById("pregunta-area-2").style.backgroundColor="#86e4a8";
        }else if(gpbtn22.checked==true){
            document.getElementById("pregunta-area-2").style.backgroundColor="#f49c90";
        }else if(gpbtn23.checked==true){
            document.getElementById("pregunta-area-2").style.backgroundColor="#f49c90";
        }

    //comprobacion de pregunta 3
    var gpbtn31=document.getElementById("respuestaCine31");
    var gpbtn32=document.getElementById("respuestaCine32");
    var gpbtn33=document.getElementById("respuestaCine33");

        if(gpbtn31.checked==true){
            aciertos=aciertos+1;
            document.getElementById("pregunta-area-3").style.backgroundColor="#86e4a8";
        }else if(gpbtn32.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }else if(gpbtn33.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }

    if(aciertos==3){
        alert('¡Felicitaciones has acertado todo!')
    }else if(aciertos<3 && aciertos>0){
        alert(`Tienes ${aciertos} aciertos`);
    }else if(aciertos==0){
        alert('Suerte para la proxima, no has acertado ninguna')
    }
        
}


function checkAnimales(){
    var gpbtn211=document.getElementById("respuestaAnimales11");
    var gpbtn212=document.getElementById("respuestaAnimales12");
    var gpbtn213=document.getElementById("respuestaAnimales13");
    var aciertos=0;
    var errores=0;
    
    //comprobacion de pregunta 1
        if(gpbtn211.checked==true){
            aciertos=aciertos+1;
            document.getElementById("pregunta-area-2").style.backgroundColor="#86e4a8";
        }else if(gpbtn212.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }else if(gpbtn213.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }
    
     //comprobacion de pregunta 2
    var gpbtn221=document.getElementById("respuestaAnimales21");
    var gpbtn222=document.getElementById("respuestaAnimales22");
    var gpbtn223=document.getElementById("respuestaAnimales23");

        if(gpbtn221.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }else if(gpbtn222.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }else if(gpbtn223.checked==true){
            aciertos=aciertos+1;
            document.getElementById("pregunta-area-2").style.backgroundColor="#86e4a8";
        }

    //comprobacion de pregunta 3
    var gpbtn231=document.getElementById("respuestaAnimales31");
    var gpbtn232=document.getElementById("respuestaAnimales32");
    var gpbtn233=document.getElementById("respuestaAnimales33");

        if(gpbtn231.checked==true){
            aciertos=aciertos+1;
        }else if(gpbtn232.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }else if(gpbtn233.checked==true){
            document.getElementById("pregunta-area-3").style.backgroundColor="#f49c90";
        }

    if(aciertos==3){
        alert('¡Felicitaciones has acertado todo!')
    }else if(aciertos<3 && aciertos>0){
        alert(`Tienes ${aciertos} aciertos`);
    }else if(aciertos==0){
        alert('Suerte para la proxima, no has acertado ninguna')
    }
        
}
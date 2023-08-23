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
            document.getElementById("pregunta-area-1").style.backgroundColor="#";
        }else if(gpbtn12.checked==true){
            errores=errores+1;
        }else if(gpbtn13.checked==true){
            errores=errores+1;
        }
    
     //comprobacion de pregunta 2
    var gpbtn21=document.getElementById("respuestaCine21");
    var gpbtn22=document.getElementById("respuestaCine22");
    var gpbtn23=document.getElementById("respuestaCine23");

        if(gpbtn21.checked==true){
            aciertos=aciertos+1;
        }else if(gpbtn22.checked==true){
            errores=errores+1;
        }else if(gpbtn23.checked==true){
            errores=errores+1;
        }

    //comprobacion de pregunta 3
    var gpbtn31=document.getElementById("respuestaCine31");
    var gpbtn32=document.getElementById("respuestaCine32");
    var gpbtn33=document.getElementById("respuestaCine33");

        if(gpbtn31.checked==true){
            aciertos=aciertos+1;
        }else if(gpbtn32.checked==true){
            errores=errores+1;
        }else if(gpbtn33.checked==true){
            errores=errores+1;
        }

    if(aciertos==3){
        alert('¡Felicitaciones has acertado todo!')
    }else if(aciertos<3){
        alert(`Tienes ${aciertos} aciertos`);
    }else if(aciertos==0){
        alert('Suerte para la proxima, no has acertado ninguna')
    }
        
}
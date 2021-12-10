var Nombre = document.getElementById('Nombre');
var NumUsuario = document.getElementById('NumUsuario');
var reloj = document.getElementById('reloj');
var mensaje = document.getElementById('mensaje');
var intentosRealizados= document.getElementById('intentosRealizados');

var NumMin= 1;
var NumMax= 500;
var intentos= 0;
var NumAleatorio= Math.floor(Math.random() * NumMax - NumMin +1) + NumMin;




function Numero_Magico() {

    // while (intentos<2) {
        if (NumUsuario.value != null && NumUsuario.value != '') {
            if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
                if (NumUsuario.value < NumAleatorio) {
                    mensaje.innerHTML=" El numero es mayor, intentos realizados: "+parseInt(intentos+ 1)+"";
                }else if (NumUsuario.value > NumAleatorio) {
                    mensaje.innerHTML="El numero es menor, intentos realizados: "+parseInt(intentos+ 1)+"";
                }else if (NumUsuario.value == NumAleatorio) {
                    mensaje.innerHTML="Felicidades el numero magico es: "+NumAleatorio+" y lo resolvio en "+ intentos+" intentos";
                }
                if (intentos==9) {
                    mensaje.innerHTML="El numero magico era el: "+NumAleatorio;
                }
                intentos++;
    
            }else{
                mensaje.innerHTML= "Digite un numero entre 1 y 500";
            }
            
        }else{
            mensaje.innerHTML="CAMPO VACIO, FAVOR INGRESAR UN NUMERO";
        }
        
    // }
    
}



function Tiempo() {
    if (NumUsuario.value != null && NumUsuario.value != '') {
        if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
            const d = new Date();
            document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
        }    
    }
}



function Intentos_Realizados() {
    if (NumUsuario.value != null && NumUsuario.value != '') {
        if (NumUsuario.value >= NumMin && NumUsuario.value <= NumMax) {
            if(typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.setItem("intentosRealizados", "ACEPTAR");
            } else {
                sessionStorage.clickcount = 1;
            }
            document.getElementById("intentosRealizados").innerHTML = "Numero ingresado: " + NumUsuario.value;
            } else {
            document.getElementById("intentosRealizados").innerHTML = "Error";
            }
        }    
    }    
}


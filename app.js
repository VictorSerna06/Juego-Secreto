// Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Esta función modifica el texto de la etiqueta en el documento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* 
Inserta un nuevo texto al documento HTML
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 - 10';
*/

// Al presionar el botón intentar, se va a realizar esta acción
function validarNumero(){
    let numeroUsuario = parseInt(document.getElementById("numeroDeUsuario").value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`¡Acertaste, el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto){
        asignarTextoElemento("p",'El número secreto es menor');
        } else {
            asignarTextoElemento("p",'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
}

// Función para limpiar el valor del elemento input 
function limpiarCaja() {
    let valorCaja = document.querySelector('#numeroDeUsuario').value = '';
    return valorCaja;
}

// Función que genera un número secreto 
function generandoNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    // Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortaron todos los números posibles')
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generandoNumeroSecreto;
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

// Función para que la página contenga los valores declarados 
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 - ${numeroMaximo}`);
    numeroSecreto = generandoNumeroSecreto();
    intentos = 1;
}

// Función para recargar la página e iniciar el juego
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



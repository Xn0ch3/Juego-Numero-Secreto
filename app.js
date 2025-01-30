let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


//Crea una lista vacía llamada "listaGenerica".

listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion);
}

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguajesInverso() {
    console.log(lenguagesDeProgramacion.reverse());
}

//Crea una función que calcule el promedio de los elementos en una lista de números.

listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listaDeNumeros2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function calcularPromedio() {
    let promedio = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        promedio += listaDeNumeros[i];
    }
    promedio = promedio / listaDeNumeros.length;
    console.log(promedio);
}

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mostrarMaxMin() {
    let max = listaDeNumeros[0];
    let min = listaDeNumeros[0];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] > max) {
            max = listaDeNumeros[i];
        }
        if (listaDeNumeros[i] < min) {
            min = listaDeNumeros[i];
        }
    }
    console.log(`El número más grande es ${max} y el número más pequeño es ${min}`);
}

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarElementos() {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
    }
    console.log(suma);
}

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function buscarElemento(listaDeNumeros,elemento) {
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] == elemento) {
            return i;
            console.log(`El elemento ${elemento} se encuentra en la posicion ${i}`);
        }
        return -1;
    }
    console.log(`El elemento ${elemento} no se encuentra en la lista`);
}


//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    let suma = [];
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i] + lista2[i]);
    }
    return suma;
}




sumarListas(listaDeNumeros, listaDeNumeros2);

console.log(sumarListas(listaDeNumeros, listaDeNumeros2));


//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function listasAlCuadrado (lista) {
    return lista.map(numero => numero **2);
    
}

console.log(listasAlCuadrado(listaDeNumeros));

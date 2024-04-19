let ejercicio = [];
ejercicio.length = 15; // definir el tamaño de la lista

let indice = 0;
let indice2 = 0
let letras = ["P","N","L","J","H","F","D"];


for ( indice; indice <= letras.length; indice++){
        ejercicio.fill(letras[indice2],indice,-indice);
        console.log(ejercicio.join(" "));
        while (indice2 < indice){
        ejercicio[indice] = " ";
        ejercicio.reverse()[indice] = " ";
        indice2++
        }
}

/*
-fecha de publicacion:19/04/2024
-hora: 1PM
-version: 1.0
-autor: ING Miguel angel omez
-lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
-version lenguaje: 6.0
-presentado a: tutores tercer bootcamp utp
-Universidad Tecnologica Pereira
-Programa de Ingenieria de Sistemas y Computacion
-salvedad:
*/
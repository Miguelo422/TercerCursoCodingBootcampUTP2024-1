const MaxFilas = 25; // Define el maximo de filas para el patron 
const MaxColumnas = 80; // Define el maximo de columnas para ajustar el formato de salida en la consola

for (let fila = 1; fila <= MaxFilas; fila++) { //bucle para iterar sobre cada fila del patron
    let output = '';  // Variable para construir la salida de cada fila
    for (let columna = 1; columna <= fila; columna++) {  // bucle para agregar caracters a la fila actual
        output += 'A '; // Agregar el caracter 'A' seguido de un espacio en blanco a la salida 
    }
    console.log(output.padStart(MaxColumnas)) // muestra la salida en la consola, con relleno a la izquierda para ajustar el formato
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
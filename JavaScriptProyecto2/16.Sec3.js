function makeSpaces(counter, limit) {
    if (counter < limit) {
        process.stdout.write(" "); // Escribe un espacio en blanco en la salida estándar.
        makeSpaces(counter + 1, limit); // Llama recursivamente a la función para imprimir más espacios en blanco.
    }
}

function makeZ(counter, limit) {
    if (counter < limit) {
        process.stdout.write("Z"); // Escribe la letra 'Z' en la salida estándar.
        makeZ(counter + 1, limit); // Llama recursivamente a la función para imprimir más letras 'Z'.
    }
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola.
}

function makeSequence(row, quantityChar, quantitySpaces) {
    if (row < 7) { // Comprueba si el número de filas generado no ha alcanzado el límite (7).
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco antes de la secuencia de letras 'Z'.
        makeZ(0, quantityChar); // Llama a la función para imprimir la secuencia de letras 'Z'.
        makeJump(); // Llama a la función para imprimir un salto de línea.
        if (row < 3)
            makeSequence(row + 1, quantityChar + 2, quantitySpaces - 1); // Llama recursivamente a la función para generar la siguiente fila con más letras 'Z' y menos espacios.
        else
            makeSequence(row + 1, quantityChar - 2, quantitySpaces + 1); // Llama recursivamente a la función para generar la siguiente fila con menos letras 'Z' y más espacios.
    }
}

function main() {
    makeSequence(0, 1, 9); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.

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
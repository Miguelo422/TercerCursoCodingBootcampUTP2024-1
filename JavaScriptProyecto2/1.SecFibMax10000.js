function fibo(n) { // se declara la funcion con el parametro n para obtener el resultado de la func fibonacci
    let fib = [0, 1];  // Inicializamos un arreglo con los primeros dos términos de la secuencia de Fibonacci.
    
    if (n <= 2) { // Si n es menor o igual a 2, devolvemos los primeros 'n' términos de la secuencia.
      return fib.slice(0, n);
    }
    
    for (let i = 2; i <= n; i++) { // Calculamos los términos de la secuencia de Fibonacci adicionales.
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib.toString(); // Devolvemos el arreglo completo de los 'n' términos de la secuencia.
  }
console.log("Este programa presenta la serie Fibonacci como la serie que comienza con los digitos 1 y 0 y va sumando progresivamente los dos \nultimos elementos de la serie, asi: 0 1 1 2 3 5 8 13 21 34.... ");
console.log("Para este programa, se presentara la serie de Fibonacci hasta llegar sin sobre pasar el numero 10,000.");
  console.log(fibo(20));

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
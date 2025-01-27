const { sumar, restar, multiplicar } = require('./lib/math');

console.log('Elige una operación (sumar, restar, multiplicar):');

process.stdin.on('data', (inputData) => {
    const input = inputData.toString().trim().split(' ');
    //"hola como andan" // ["hola", "como", "andan"]
    // "restar 3 7" // restar, 3, 7

    if (input.length != 3) {
        console.log('Por favor, ingresa la operación y dos números, separados por espacios.');
        return;
    }

    const operacion = input[0];
const a = parseFloat(input[1]); // num1
    const b = parseFloat(input[2]); // num2

    let resultado;

    switch (operacion) {
        case 'sumar': resultado = sumar(a, b); break;
        case 'restar': resultado = restar(a, b); break;
        case 'multiplicar': resultado = multiplicar(a, b); break;
        default: console.log('Operación no válida'); return;
    }

    console.log(`El resultado de ${operacion} ${a} y ${b} es: ${resultado}`);
    
    process.stdin.pause(); // Detiene la entrada de datos
});
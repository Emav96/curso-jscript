// == Igualación de variables
// === Igualación estricta de variables
// != Desigualdad de variables
// !== Desigualdad estricta de variables
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que
// && Operador lógico AND (y)
// || Operador lógico OR (o)
// ! Operador lógico NOT (no)

// Programa interactivo: pide 2 números, permite elegir operaciones, usa arrays, funciones y condicionales

function pedirNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero === null) return null; // Permite salir del programa
        numero = parseFloat(numero);
    } while (isNaN(numero));
    return numero;
}
function calcular(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
        case 'multiplicación':
            return num1 * num2;
        case 'division':
        case 'división':
            return num2 !== 0 ? num1 / num2 : 'No se puede dividir por cero';
        case 'modulo':
        case 'módulo':
            return num2 !== 0 ? num1 % num2 : 'No se puede dividir por cero';
        default:
            return 'Operación no válida';
    }
}

let resultados = [];
let continuar = true;

while (continuar) {
    let num1 = pedirNumero("Introduce el primer número:");
    if (num1 === null) break;
    let num2 = pedirNumero("Introduce el segundo número:");
    if (num2 === null) break;

    let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division, modulo)");
    if (!operacion) break;
    operacion = operacion.toLowerCase();

    let resultado = calcular(num1, num2, operacion);
    alert(`El resultado de la ${operacion} entre ${num1} y ${num2} es: ${resultado}`);
    resultados.push({num1, num2, operacion, resultado});

    continuar = confirm("¿Quieres realizar otra operación?");
}

console.log("Resultados de operaciones:");
resultados.forEach((r, index) => {
    console.log(`Operación ${index + 1}: ${r.num1} ${r.operacion} ${r.num2} = ${r.resultado}`);
});




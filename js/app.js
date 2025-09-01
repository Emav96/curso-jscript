const form = document.getElementById('calc-form');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacionSelect = document.getElementById('operacion');
const resultadoDiv = document.getElementById('resultado');
const historialDiv = document.getElementById('historial');

let resultados = JSON.parse(localStorage.getItem('resultados')) || [];

function calcular(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            return num2 !== 0 ? num1 / num2 : 'No se puede dividir por cero';
        case 'modulo':
            return num2 !== 0 ? num1 % num2 : 'No se puede dividir por cero';
        default:
            return 'Operación no válida';
    }
}

function mostrarHistorial() {
    historialDiv.innerHTML = '<h3>Historial de operaciones</h3>';
    if (resultados.length === 0) {
        historialDiv.innerHTML += '<p>No hay operaciones realizadas.</p>';
        return;
    }
    const ul = document.createElement('ul');
    resultados.forEach((item, i) => {
        const li = document.createElement('li');
        li.textContent = `${i + 1}) ${item.num1} ${item.operacion} ${item.num2} = ${item.resultado}`;
        ul.appendChild(li);
    });
    historialDiv.appendChild(ul);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operacion = operacionSelect.value;
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.textContent = 'Por favor, ingresa dos números válidos.';
        return;
    }
    const resultado = calcular(num1, num2, operacion);
    resultadoDiv.textContent = `El resultado de la ${operacion} entre ${num1} y ${num2} es: ${resultado}`;
    resultados.push({ num1, num2, operacion, resultado });
    localStorage.setItem('resultados', JSON.stringify(resultados));
    mostrarHistorial();
});

mostrarHistorial();
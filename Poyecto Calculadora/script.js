let resultadoInput = document.getElementById('resultado');

function limpiar() {
    resultadoInput.value = '';
}

function agregarCaracter(caracter) {
    resultadoInput.value += caracter;
}

function calcular() {
    try {
        resultadoInput.value = eval(resultadoInput.value);
    } catch (error) {
        resultadoInput.value = 'Error';
    }
}

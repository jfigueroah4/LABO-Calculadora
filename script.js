function operar(operador) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultadoElemento = document.getElementById("resultado");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoElemento.textContent = "Error: Ingresa ambos números";
        return;
    }
    
    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultadoElemento.textContent = "Error: No se puede dividir por cero";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operación no válida";
    }
    
    resultadoElemento.textContent = `Resultado: ${resultado}`;
}
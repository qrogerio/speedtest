
function somar() {
    num1 = parseInt(document.querySelector("#num1").value);
    num2 = parseInt(document.querySelector("#num2").value);
    resultado = num1 + num2
    document.querySelector("#resultado").innerHTML = `O Resultado é: ${resultado}`
}

function subtrair() {
    num1 = parseInt(document.querySelector("#num1").value);
    num2 = parseInt(document.querySelector("#num2").value);
    resultado = num1 - num2
    document.querySelector("#resultado").innerHTML = `O Resultado é: ${resultado}`
}

function multiplicar() {
    num1 = parseInt(document.querySelector("#num1").value);
    num2 = parseInt(document.querySelector("#num2").value);
    resultado = num1 * num2
    document.querySelector("#resultado").innerHTML = `O Resultado é: ${resultado}`
}

function dividir() {
    num1 = parseInt(document.querySelector("#num1").value);
    num2 = parseInt(document.querySelector("#num2").value);
    resultado = num1 / num2
    document.querySelector("#resultado").innerHTML = `O Resultado é: ${resultado}`
}

function porcentagem() {
    num1 = parseInt(document.querySelector("#num1").value);
    num2 = parseInt(document.querySelector("#num2").value);
    resultado = num1 % num2
    document.querySelector("#resultado").innerHTML = `O Resultado é: ${resultado}`
}
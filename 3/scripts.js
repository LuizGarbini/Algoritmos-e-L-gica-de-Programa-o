/* Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação, mostrar um alerta como o resultado.
*/

alert("Faça uma conta")
let firstNumber = prompt("Digite o primeiro número da conta")
let secondNumber = prompt("Digite o segundo número da conta")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Resultado da Soma: " + sum)
alert("Resultado da Subtração: " + sub)
alert("Resultado da Multiplicação: " + mult)
alert("Resultado da Divisão: " + div)
alert("Resultado do Resto da Divisão: " + restDiv)
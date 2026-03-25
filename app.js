let num1 = Number(prompt("ingrese el primero numero"));
let num2 = Number(prompt("ingrese el segundo numero"));
let num3 = Number(prompt("ingrese el tercer numero"));


let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);
let centro = (num1 + num2 + num3) - mayor - menor;

console.log(`mayor: ${mayor}, medio: ${centro}, menor: ${menor}`);

if (num1 === num2 && num2 === num3) {
    console.log("los tres numeros son iguales");
} else if (num1 === num2) {
    console.log("los primeros dos numeros son iguales");
} else if (num2 === num3) {
    console.log("los ultimos dos numeros son iguales");
} else if (num1 === num3) {
    console.log("el primero y el ultimo son iguales");
} else {
    console.log("todos son diferentes");
}

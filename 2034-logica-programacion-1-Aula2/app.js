//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else{
    //la condición no se cumplio
    alert('Lo siento no acertaste el número');

}
//Interpolacion, es cuando nosotros podemos conbinar las comillas invertidas, es decir valores literares template string `${}`
 



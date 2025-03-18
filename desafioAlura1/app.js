/*Desafio 1 */
//1.Muestra una alerta con el mensaje "¡Bienvenido a nuestro sitio web!".
alert ("!Bienvenida y bienvenido a nuestro sitio web");

//2.Declara una variable llamada nombre y asígnale el valor
 let nombre = Lua ;

//3.Crea una variable llamada edad y asígnale el valor 25.
 let edad = 25;

//4.Define una variable numeroDeVentas y asígnale el valor 50.
 let numeroDeVentas = 50;
 
//5.Define una variable saldoDisponible y asígnale el valor 1000.
 let saldoDisponible = 1000;

//6.Muestra una alerta con el texto "¡Error! Completa todos los campos."
 alert ("!Error! Completa todos los campos");

//7.Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Preencha todos los campos." Ahora muestra una alerta con el valor de la variable mensajeDeError.
let mensajeDeError = "!Error completa todos los campos!";
alert("mensajeError");

//Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
 let nombre = prompt("¿Cúal es tu nombre de usuario");

//9.Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad = prompt("Digite su edad");

//10.Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puede obtener su licencia de conducir!".
let edad = prompt("Digite su edad");
 if (edad >= 18){
    alert("Puedes obtener tu licencia");
 }

 
/*Desafio 2 *////////////////////////////////
//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana= prompt ("¿Que dia de la semana es");
if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo'){
   alert(!Buen fin de semana!);
   {
      else{
         ('Buena semana');
      
      }
   }
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Escribe un número positivo o negativo ");
if (numero > 0){
   alert ("Número positivo");{
      else if( numero < 0);
      {
         alert("Número negativo");
         {
            else{
               alert("El número es cero");
            }
         }
      }
   }
}
//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
let puntuación = 150;
if (puntuación >= 100){
   console.log('!Enhorabuena, has ganado');
   {
      else {
         console.log('Intentalo de nuevo para ganar');
      }
   }
}
//4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 500;
alert('Tu saldo es de ${saldoCuenta}.');

//5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
let nombreUsuario = prompt("Por favor, ingresa tu nombre");
alert('!Bienvenido, ${nombreUsuario}');




/**Desafio 3 Loops *///////////////////////////////////
//1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10){
   console.log(contador);
   contador++;
}


//2.Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador =10;
while(contador >=0 ){
   console.log(contador);
   contador--;

}

//3.Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo= prompt("Ingresa un numero para la cuenta regresiva");
while (numeroMaximo >=0){
   console.log (numeroMaximo);
   numeroMaximo--;
}

//4.Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
};


/**Desafio 4 */
//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console,log("!Bienvenido");

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nom = Fernanda;
console.log(`!Hola ${nombre}`);

//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let name= Fernanda;
alert(`!Hola ${name}`);

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajePreferido= prompt(¿Cúal es tu lenguaje de programación favorito ?);
console.log(lenguajePreferido);

//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);


//7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }

//8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseFloat(prompt("Ingresa un número:"));
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

//9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;

//10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }


//11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

numeroAleatorio = Math.random();
    console.log(numeroAleatorio);

//12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(numeroIntAleatorio);


//13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. 

numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(numeroIntAleatorio);
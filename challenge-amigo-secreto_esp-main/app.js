// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
let amigos = []
amigos.push("Juan");
amigos.push("María");
amigos.push("Pedro");
amigos.push("Fernanda");

function agregarAmigo() {
//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
let nombre = document.getElementById("nombreAmigo").value;

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
}
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
amigos.push(nombre);

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
document.getElementById("nombreAmigo").value = "";

mostrarAmigos();
}
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 


    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

// Función para agregar un amigo
function agregarAmigo() {
  
    let nombre = document.getElementById("nombreAmigo").value;

    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    
    document.getElementById("nombreAmigo").value = "";
   
    mostrarAmigos();
}

// Función para mostrar la lista de amigos en la lista HTML
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista actual
    lista.innerHTML = "";

    // Recorrer el array de amigos y crear un <li> para cada nombre
   
        let li = document.createElement("li");
        li.textContent = amigos[i];

    
        lista.appendChild(li);
    }


// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de texto
    let nombre = document.getElementById("nombreAmigo").value;

    // Validar que el nombre no esté vacío
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    document.getElementById("nombreAmigo").value = "";

    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>

        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[indiceAleatorio];


    document.getElementById("resultadoSorteo").innerHTML = "El amigo sorteado es: " + amigoSorteado;
}






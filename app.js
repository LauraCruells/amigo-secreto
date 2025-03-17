// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres

let listaAmigos = [];

//Implementa una función para agregar amigos
// Adicionalmente solicito que no se repita el nombre

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if(nombre===""){
        alert("Por favor ingrese un nombre");
        return;
    }

    if(listaAmigos.includes(nombre)){
        alert("Este nombre ya ha sido agregado, por favor ingrese otro");
        return;
    }

    listaAmigos.push(nombre);
    actualizarlista();
    inputAmigo.value="";
}

//Implementa una función para actualizar la lista de amigos

function actualizarlista(){
    const listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML = "";

    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElemento.appendChild(li);
    });
}

//Implementa una función para sortear los amigos

function sortearAmigo() {
    if(listaAmigos.length===0){
        alert("No hay amigos en la lista para realizar el sorteo");
        return;
    }


const indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);
const amigoSorteado = listaAmigos[indiceAleatorio];

const resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML= `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

setTimeout(reiniciarJuego, 3000);
}


// Reinicia el juego. Se ejecuta funcion arriba con un setTimeOut luego de Sortear Amigo y al pasar 3 segundos (sin necesidad de un boton reiniciar) 

function reiniciarJuego(){
    listaAmigos.length = 0; 
    actualizarlista();

    const resultadoElement= document.getElementById("resultado");
    resultadoElement.innerHTML="";
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if(nombre===""){
        alert("Ingrese un nombre válido");
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

function actualizarlista(){
    const listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML = "";

    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElemento.appendChild(li);
    });
}

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

function reiniciarJuego(){
    listaAmigos.length = 0; 
    actualizarlista();

    const resultadoElement= document.getElementById("resultado");
    resultadoElement.innerHTML="";
}
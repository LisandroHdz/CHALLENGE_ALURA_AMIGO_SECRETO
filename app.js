// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = ''; // Limpiar el campo de entrada
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un amigo antes de sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const mensaje = document.createElement('li');
    mensaje.textContent = `Tu amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(mensaje);

    // Borrar la lista de amigos después del sorteo (opcional)
    amigos = []; // Vaciar el array de amigos
    actualizarListaAmigos(); // Actualizar la lista en la interfaz
}
function createMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (message.user_id === 17) {
        messageElement.classList.add('frnd_message');
    } else {
        messageElement.classList.add('my_message');
    }

    const messageContent = document.createElement('p');
    messageContent.textContent = message.testo;

    const messageTimestamp = document.createElement('span');
    messageTimestamp.textContent = message.created_at;

    messageContent.appendChild(messageTimestamp);
    messageElement.appendChild(messageContent);

    return messageElement;
}


function show(data){
    const chatBox = document.querySelector('.chatBox');
    chatBox.innerHTML = '';
    if(data.length == 0){
        chatBox.textContent = 'Nessun messaggio';
        return;
    }
    for(message of data){
        chatBox.append(createMessage(message));
    }
}


function productsData(data){
    show(data);
    var chatBox = document.querySelector(".chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function productsResponse(response){
    return response.json();
}

fetch(BASE_URL + 'user_chat/show').then(productsResponse).then(productsData);

document.addEventListener("DOMContentLoaded", function() {
    var chatBox = document.querySelector(".chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
});

fetch('isLogged')
    .then(response => response.json())
    .then(data => {
        if (data === true) { // Controlla se la risposta è 'true' come stringa
            const loginElement = document.getElementById('login');
            loginElement.classList.add('d-none');

            // Crea un elemento button
            const eliminaButton = document.createElement('button');

            // Aggiungi le classi al pulsante
            eliminaButton.classList.add('btn', 'btn-danger');

            // Imposta il testo del pulsante
            eliminaButton.textContent = 'Logout';

            // Aggiungi un event listener per il click
            eliminaButton.addEventListener('click', function() {
                // Reindirizza a 'logout' quando il pulsante viene cliccato
                window.location.href = 'logout';
            });
            const btnLogout = document.querySelector('#btn-logout');
            console.log(btnLogout);
            btnLogout.appendChild(eliminaButton);
        }
    })
    .catch(error => {
        console.error('Si è verificato un errore durante la verifica dello stato di accesso:', error);
    });


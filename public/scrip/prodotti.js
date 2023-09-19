
function createProductCard(product){
    // Card
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mt-2', 'ms-4', 'mb-4');
    cardElement.style.width = '18rem';
    cardElement.dataset.id = product.id;

    // Div immagine
    const imgDiv = document.createElement('div');
    imgDiv.style.width = '100%'; // Dimensione fissa
    imgDiv.style.height = '200px'; // Dimensione fissa (puoi cambiare questo valore a tuo piacimento)

    // Immagine
    const imgElement = document.createElement('img');
    imgElement.src = product.percorso_img;
    imgElement.style.width = '100%'; // Immagine si adatta alla larghezza del div
    imgElement.style.height = '100%'; // Immagine si adatta all'altezza del div
    imgElement.classList.add('card-img-top');


    imgDiv.appendChild(imgElement);
    cardElement.appendChild(imgDiv);

    // BodyCard
    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body', 'd-grid', 'align-items-center', 'm-0', 'p-0');

    // Nome
    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title', 'text-center', 'mt-1');
    titleElement.textContent = product.nome;
    cardBodyElement.appendChild(titleElement);

    // Ingredienti
    const textElement = document.createElement('p');
    textElement.classList.add('card-text', 'text-center', 'm-0');
    textElement.textContent = product.ingredienti.replace(/,/g, " - ");
    cardBodyElement.appendChild(textElement);

    // Prezzo
    const priceElement = document.createElement('p');
    priceElement.classList.add('card-text', 'text-center', 'mt-1');
    priceElement.textContent = product.prezzo + ' €'
    cardBodyElement.appendChild(priceElement);

    // Form
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.classList.add('p-2','d-flex', 'justify-content-between');

    // CSFR
    const csrfField = document.createElement('input');
    csrfField.type = 'hidden';
    csrfField.name = '_token'; // Assicurati che il nome sia '_token' per essere compatibile con Laravel
    csrfField.value = window.csrfToken; // Questo inserisce il token CSRF generato da Laravel nel campo
    formElement.appendChild(csrfField);

    // ID
    const idInput = document.createElement('input');
    idInput.type = 'text';
    //idInput.classList.add('form-control');
    idInput.classList.add('d-none');
    idInput.id = 'id';
    idInput.name = 'id';
    idInput.value = product.id;
    cardBodyElement.appendChild(idInput);
    
    // Pulsante "Modifica"
    const modifyButton = document.createElement('button');
    modifyButton.type = 'button';
    modifyButton.classList.add('btn', 'btn-primary');
    modifyButton.textContent = 'Modifica';

    modifyButton.addEventListener('click', ()=>{
        formElement.action = BASE_URL + 'prodotti/modifica';
        formElement.submit();
        /*
        const currentURL = window.location.href; 
        const segments = currentURL.split('/');
        const valore = segments[segments.length - 1];
        console.log(valore);*/
    });
    cardBodyElement.appendChild(modifyButton);

    // Pulsante "Elimina"
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Elimina'; // Utilizza textContent per impostare il testo del pulsante
    deleteButton.setAttribute('data-toggle', 'modal'); // Aggiungi l'attributo data-toggle
    deleteButton.setAttribute('data-target', '#deleteModal');

    deleteButton.addEventListener('click', function () {
        // Mostra la modal di conferma
        const deleteModal = document.querySelector('#deleteModal');
        formElement.action = BASE_URL + 'delete';

        // Apri la modal di conferma
        const modal = new bootstrap.Modal(deleteModal);
        modal.show();

        // Aggiungi un event listener per l'azione di eliminazione effettiva
        const confirmDeleteButton = document.querySelector('#confirmDelete');
        confirmDeleteButton.addEventListener('click', function () {
            console.log('ciao');
            // Invia il modulo
            formElement.submit();
        });
    });

    cardBodyElement.appendChild(deleteButton);

    // Aggiunta di tutti gli elementi al form
    const inputElements = [csrfField, idInput, modifyButton, deleteButton];
    inputElements.forEach(input => {
        formElement.appendChild(input);
    });
    
    cardElement.appendChild(cardBodyElement);
    cardElement.appendChild(formElement);
    return cardElement;
}

function show(data){
    const cardsContainer = document.querySelector('#cardsContainer');
    cardsContainer.innerHTML = '';
    if(data.length == 0){
        cardsContainer.textContent = 'Nessuna prodotto';
        return;
    }
    for(product of data){
        cardsContainer.append(createProductCard(product));
    }
}


function productsData(data){
    show(data);
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase(); // Converte il testo di ricerca in minuscolo per una corrispondenza case-insensitive
    const filteredProducts = data.filter(product => {
        return product.nome.toLowerCase().includes(searchText);
    });
    show(filteredProducts);
});
}

function productsResponse(response){
    return response.json();
}

fetch(BASE_URL + 'products').then(productsResponse).then(productsData);


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





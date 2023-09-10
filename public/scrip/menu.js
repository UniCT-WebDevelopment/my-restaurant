let carrello = [];

function createProductCard(product) {
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
    cardBodyElement.classList.add('card-body', 'd-grid', 'align-items-center');

    // Nome
    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title', 'text-center', 'mb-3');
    titleElement.textContent = product.nome;
    cardBodyElement.appendChild(titleElement);

    // Ingredienti
    const textElement = document.createElement('p');
    textElement.classList.add('card-text', 'text-center', 'mb-3');
    textElement.textContent = product.ingredienti.replace(/,/g, " - ");
    cardBodyElement.appendChild(textElement);

    // Prezzo
    const priceElement = document.createElement('p');
    priceElement.classList.add('card-text', 'text-center', 'mb-3');
    priceElement.textContent = product.prezzo + ' €'
    cardBodyElement.appendChild(priceElement);


       
    // Div per i pulsanti
    const buttonsAndCountDiv = document.createElement('div');
    buttonsAndCountDiv.classList.add('d-flex', 'justify-content-around', 'align-items-center', 'mb-3');

    const cart = document.getElementById("prodottiCarrello");

    // Pulsante "Rimuovi"
    const removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-danger', 'me-2');
    removeButton.textContent = '-';
    removeButton.dataset.productId = product.id; // Assegno l'id del prodotto al pulsante

    removeButton.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const index = carrello.indexOf(productId);
        if (index !== -1) {
            carrello.splice(index, 1); // Rimuovo l'id del prodotto dall'array "carrello"
            const count = carrello.filter(id => id === productId).length;
            countElement.textContent = count;
        }
        console.log(carrello);
        cart.value = carrello;
    });

    buttonsAndCountDiv.appendChild(removeButton);

    // n_prodotti
    const countElement = document.createElement('div');
    countElement.textContent = '0';
    buttonsAndCountDiv.appendChild(countElement);

    // Pulsante "Aggiungi"
    const addButton = document.createElement('button');
    addButton.classList.add('btn', 'btn-primary', 'ms-2');
    addButton.textContent = '+';
    addButton.dataset.productId = product.id; // Assegna l'id del prodotto al pulsante

    addButton.addEventListener('click', function() {
        const productId = this.dataset.productId;
        carrello.push(productId); // Aggiungi l'id del prodotto all'array "carrello"
        const count = carrello.filter(id => id === productId).length;
        countElement.textContent = count;
        console.log(carrello);
        cart.value = carrello;
    });

    buttonsAndCountDiv.appendChild(addButton);

    cardBodyElement.appendChild(buttonsAndCountDiv);
    cardElement.appendChild(cardBodyElement);
    return cardElement;
}


function show(data){
    const cardsContainer = document.querySelector('#cardsContainer');
    //cardsContainer.innerHTML = '';
    if(data.length == 0){
        cardsContainer.textContent = 'Nessuna prodotto';
        return;
    }
    for(product of data){
        cardsContainer.append(createProductCard(product));
    }
}

function show2(data){
    const cardsContainer = document.querySelector('#cardsContainer2');
    //cardsContainer.innerHTML = 'Antipasti';
    if(data.length == 0){
        cardsContainer.textContent = 'Nessuna prodotto';
        return;
    }
    for(product of data){
        cardsContainer.append(createProductCard(product));
    }
}

function show3(data){
    const cardsContainer = document.querySelector('#cardsContainer3');
    //cardsContainer.innerHTML = 'Antipasti';
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
}

function productsResponse(response){
    return response.json();
}

const login = document.querySelector('#login');
login.addEventListener('click', ()=>{
    window.location.href = 'login';
});

fetch(BASE_URL + 'menu/show/pizze').then(productsResponse).then(productsData);

fetch(BASE_URL + 'menu/show/antipasti').then(productsResponse).then(show2);

fetch(BASE_URL + 'menu/show/dessert').then(productsResponse).then(show3);

document.addEventListener('DOMContentLoaded', function () {
    fetch('isLogged')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data === true) { // Controlla se la risposta è 'true' come stringa
            const loginElement = document.getElementById('login');
            loginElement.classList.add('d-none');
        }
    })
    .catch(error => {
        console.error('Si è verificato un errore durante la verifica dello stato di accesso:', error);
    });
});



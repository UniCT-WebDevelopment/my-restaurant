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
    countElement.id = "count" + product.id;
    countElement.classList.add('countElement');
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


function show4(dati) {
    const categoriesContainer = document.querySelector('#categorieContainer');
    categoriesContainer.innerHTML = ''; // Pulizia del contenuto precedente

    for (const categoria in dati) {
        if (dati.hasOwnProperty(categoria)) {
            // Creazione del container per la categoria
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container', 'd-flex', 'justify-content-center', 'mb-4');

            // Creazione dell'elemento <h1> con il nome della categoria
            const categoryTitle = document.createElement('h1');
            categoryTitle.textContent = categoria.toUpperCase();
            categoryContainer.appendChild(categoryTitle);

            // Creazione del container per le card della categoria
            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('cards-container', 'd-flex', 'justify-content-around', 'flex-wrap','mb-4');

            // Iterazione sui prodotti della categoria e creazione delle card
            for (const product of dati[categoria]) {
                const productCard = createProductCard(product);
                cardsContainer.appendChild(productCard);
            }

            // Aggiunta delle card al container della categoria

            // Aggiunta del container della categoria al contenitore principale
            categoriesContainer.appendChild(categoryContainer);
            categoriesContainer.appendChild(cardsContainer);
        }
    }
}



function productsData(data){
    show4(data);
}

function productsResponse(response){
    return response.json();
}

const login = document.querySelector('#login');
login.addEventListener('click', ()=>{
    window.location.href = 'login';
});

fetch(BASE_URL + 'getCategories').then(productsResponse).then(productsData);

    fetch('isLogged')
    .then(response => response.json())
    .then(data => {
        console.log(carrello);
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


let first = false;

document.addEventListener('DOMContentLoaded', function () {
    fetch(BASE_URL + 'menu/getCart') .then(response => response.json()) .then(data => {
        const prodottiCarrello = document.querySelector('#prodottiCarrello');
        console.log(prodottiCarrello);
        prodottiCarrello.value = data;
        carrello = data.split(",");
        //const cards = document.querySelectorAll('.card');

        //console.log(cards);
        // Per ogni card, aggiorna il countElement
        carrello.forEach(card => {
            const productId = card;
            const countElement = document.getElementById('count'+ productId);
            // Conta quante volte il prodotto appare nell'array "carrello"
            const count = carrello.filter(id => id === productId).length;
            console.log(count);
            
            // Aggiorna il countElement
            countElement.textContent = count;
        });
        
    })
    .catch(error => {
        console.error('Si è verificato un errore durante il recupero del carrello:', error);
        if(!first){
            first = true;
            //location.reload();
        }
       
    });
});

let isPageReloaded = false; // Variabile di controllo

document.addEventListener('DOMContentLoaded', function () {
    fetchCartData();

    function fetchCartData() {
        fetch(BASE_URL + 'menu/getCart')
            .then(response => response.json())
            .then(data => {
                const prodottiCarrello = document.querySelector('#prodottiCarrello');
        console.log(prodottiCarrello);
        prodottiCarrello.value = data;
        carrello = data.split(",");
        //const cards = document.querySelectorAll('.card');

        //console.log(cards);
        // Per ogni card, aggiorna il countElement
        carrello.forEach(card => {
            const productId = card;
            const countElement = document.getElementById('count'+ productId);
            if(countElement == null){
                location.reload();
            }
            // Conta quante volte il prodotto appare nell'array "carrello"
            const count = carrello.filter(id => id === productId).length;
            console.log(count);
            
            // Aggiorna il countElement
            countElement.textContent = count;
        });
            })
            .catch(error => {
                console.error('Si è verificato un errore durante il recupero del carrello:', error);

                
            });
    }
});


 /*window.onload =function(){

    fetch(BASE_URL + 'menu/getCart') .then(response => response.json()) .then(data => {
        carrello = data.split(",");
        const cards = document.querySelectorAll('.card');

        console.log(cards);
        let i =0;
        // Per ogni card, aggiorna il countElement
        cards.forEach(card => {
            const productId = card.dataset.id;
            //console.log('count'+productId);
            const countElement = document.getElementById('count'+ productId);
            // Conta quante volte il prodotto appare nell'array "carrello"
            const count = carrello.filter(id => id === productId).length;
            
            i=i+1;
            // Aggiorna il countElement
            countElement.textContent = count;
        });
        console.log(i);
    })
    .catch(error => {
        console.error('Si è verificato un errore durante il recupero del carrello:', error);
    });

 };*/





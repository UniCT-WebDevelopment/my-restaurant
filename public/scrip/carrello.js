let carrello = [];

function createProductCard(product) {
    carrello.push(product.id);
    const lastIndex = carrello.length - 1;
    // Creazione Card
    const cardElement = document.createElement('div');
    let classe = 'card' + product.id + lastIndex;
    cardElement.classList.add('card', 'mt-2', 'ms-4', 'mb-4', classe);
    cardElement.style.width = '18rem';
    cardElement.id = 'card' + product.id;


    // Div immagine
    const imgDiv = document.createElement('div');
    imgDiv.style.width = '100%'; // Dimensione fissa
    imgDiv.style.height = '200px'; // Dimensione fissa (puoi cambiare questo valore a tuo piacimento)

    // Immagine
    const imgElement = document.createElement('img');
    imgElement.src = "../" + product.percorso_img;
    imgElement.style.width = '100%'; // Immagine si adatta alla larghezza del div
    imgElement.style.height = '100%'; // Immagine si adatta all'altezza del div
    imgElement.classList.add('card-img-top');


    imgDiv.appendChild(imgElement);
    cardElement.appendChild(imgDiv);

    // BodyCard
    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body', 'd-grid', 'align-items-center');

    // Nome prodotto
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
    priceElement.textContent = product.prezzo + ' €';
    cardBodyElement.appendChild(priceElement);


    const removeButton = document.createElement('button');
    let selector = 'remove' + product.id + lastIndex;
    removeButton.classList.add('btn','btn-danger', selector);
    removeButton.textContent = 'Rimuovi';

    removeButton.addEventListener('click', () => {
        cardElement.classList.add('d-none');

        const index = carrello.indexOf(product.id);
        if (index !== -1) {
            carrello.splice(index, 1); // Rimuovi l'id dall'array "carrello"
            const cart = document.getElementById('carrello');
            cart.value = carrello.join(","); // Converti l'array in una stringa separata da virgole
            console.log(cart.value);
        }
    });
   

    /*removeButton.addEventListener('click', () => {
        const productId = product.id;
        let s = 'card' + productId;
        const elementToRemove = document.querySelector('.'+productId);
        console.log(elementToRemove);
        if (elementToRemove) {
            elementToRemove.remove(); // Rimuovi l'elemento HTML
        }
    
        const index = carrello.indexOf(productId);
        if (index !== -1) {
            carrello.splice(index, 1); // Rimuovi l'id dall'array "carrello"
            const cart = document.getElementById('carrello');
            cart.value = carrello;
            console.log(cart.value);
        }
    });*/
    
    
    cardBodyElement.appendChild(removeButton);

    cardElement.appendChild(cardBodyElement);

    // Ritorna l'elemento card completato
    return cardElement;
}


function show(data) {
    const cardsContainer = document.querySelector('#cardsContainer');
    cardsContainer.innerHTML = '';
    
    if (data.products.length === 0) {
        cardsContainer.textContent = 'Nessuna prodotto';
        return;
    }
    
    for (const product of data.products) {
        cardsContainer.append(createProductCard(product));
    }
    
    const cart = document.getElementById("carrello");
    cart.value = carrello;
    
    const indirizzoInput = document.getElementById("indirizzo");
    indirizzoInput.value = data.indirizzo;
}


function productsData(data){
    show(data);
}

function productsResponse(response){
    return response.json();
}

function removeProduct(){
    carrello.forEach(productId => {
        let selector = '.remove' + productId;
        const removeButton = document.querySelector(selector);
        console.log(removeButton);
        console.log('ciao');

        if (removeButton) {
            removeButton.addEventListener('click', () => {
                let s = '.card' + productId;
                const cardElementToRemove = document.querySelector(s);
                if(cardElementToRemove == null){
                    location.reload();
                }
                if (cardElementToRemove) {
                    cardElementToRemove.remove(); // Rimuovi l'elemento HTML
                }

                const index = carrello.indexOf(productId);
                if (index !== -1) {
                    carrello.splice(index, 1); // Rimuovi l'id dall'array "carrello"
                    const cart = document.getElementById('carrello');
                    cart.value = carrello.join(","); // Converti l'array in una stringa separata da virgole
                    console.log(cart.value);
                }
            });
        }
    });
}

fetch(BASE_URL + 'menu/carrello/products').then(productsResponse).then(productsData).then(removeProduct);


const login = document.querySelector('#login');
login.addEventListener('click', ()=>{
    window.location.href = '../login';
});

console.log(BASE_URL + 'menu/updateCart');

const redirect = document.querySelector('#menu');
redirect.addEventListener('click', ()=>{
    const form = document.querySelector('#form');
    form.action = BASE_URL + 'menu/updateCart';
    console.log(BASE_URL + 'menu/updateCart');
    form.submit();
});


document.addEventListener('DOMContentLoaded', function () {
    fetch('../isLogged')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data === false) { // Controlla se la risposta è 'true' come stringa
            const loginElement = document.getElementById('login');
            loginElement.classList.remove('d-none');
        }

    })
    .catch(error => {
        console.error('Si è verificato un errore durante la verifica dello stato di accesso:', error);
    });

   
});

window.onload = function (){
   
};

document.addEventListener('DOMContentLoaded', ()=>{

});

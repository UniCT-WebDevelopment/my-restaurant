let carrello = [];

function createProductCard(product) {
    // Creazione Card
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
    imgElement.src = "../" + product.percorso_img;
    console.log(product.percorso_img);
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
    priceElement.textContent = product.prezzo + ' €'
    cardBodyElement.appendChild(priceElement);

    carrello.push(product.id);

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

fetch(BASE_URL + 'menu/carrello/products').then(productsResponse).then(productsData);

function goBack() {
    window.history.back();
}

const menu = document.getElementById("menu");
menu.addEventListener('click',goBack);
// Formattare la data nel formato "00:00 gg/mm/aaaa"
function formatDateTime(dateTimeStr) {
    const dateTime = new Date(dateTimeStr);
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const year = dateTime.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

  function createTableRow(product) {
    const trElement = document.createElement('tr');

    const productId = document.createElement('td');
    productId.textContent = product.id;
    trElement.appendChild(productId);

    // Nome prodotti
    const productNamesCell = document.createElement('td');
    const productNamesTable = document.createElement('table');

    //Creo una riga per ogni prodotto

    for (const productName of product.product_names) {
        const productNameRow = document.createElement('tr');
        const productNameCell = document.createElement('td');
        productNameCell.textContent = productName;
        productNameRow.appendChild(productNameCell);
        productNamesTable.appendChild(productNameRow);
    }

    productNamesCell.appendChild(productNamesTable);
    trElement.appendChild(productNamesCell);

    // Prezzo
    const totalPrice = document.createElement('td');
    totalPrice.textContent = product.total_price.toFixed(2); // Formatta il prezzo a due decimali
    trElement.appendChild(totalPrice);

    // Data
    const orderDate = document.createElement('td');
    orderDate.textContent = formatDateTime(product.created_at);
    trElement.appendChild(orderDate);

    // Stato
    const orderStatus = document.createElement('td');
    orderStatus.textContent = product.stato;
    trElement.appendChild(orderStatus);

    if(product.stato == 'Inviato' || product.stato == 'In preparazione'){
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('btn', 'btn-danger', 'mt-2', 'mb-2');
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = 'white';
        deleteButton.textContent = 'Elimina';
        deleteButton.setAttribute('data-toggle', 'modal'); // Aggiungi l'attributo data-toggle
        deleteButton.setAttribute('data-target', '#deleteModal');

        deleteButton.addEventListener('click', () => {
            // Mostra la modal di conferma
            const deleteModal = document.querySelector('#deleteModal');

            // Apri la modal di conferma
            const modal = new bootstrap.Modal(deleteModal);
            modal.show();

            // Aggiungi un event listener per l'azione di eliminazione effettiva
            const confirmDeleteButton = document.querySelector('#confirmDelete');
            confirmDeleteButton.addEventListener('click', function () {
                if (confirmDelete) {
                    // Creazione del form
                    const form = document.createElement('form');
                    form.method = 'post';
                    form.action = BASE_URL + 'ordini/deleteOrder';
                
                    // Creazione dell'input text
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = 'order'; // Nome dell'input, utilizzato come chiave nel server
                    input.value = product.id; // Valore dell'input
                    // CSFR
                    const csrfField = document.createElement('input');
                    csrfField.type = 'hidden';
                    csrfField.name = '_token'; // Assicurati che il nome sia '_token' per essere compatibile con Laravel
                    csrfField.value = window.csrfToken; // Questo inserisce il token CSRF generato da Laravel nel campo
                
                    // Aggiungere l'input al form
                    form.appendChild(csrfField);
                    form.appendChild(input);
                    
                    // Aggiungere il form al documento (per renderlo visibile e inviare)
                    document.body.appendChild(form);
                    
                    // Invio automatico del form
                    form.submit();
                }
            });
        });
        trElement.appendChild(deleteButton);
    }
    else{
        const testo = document.createElement('p');
        testo.textContent = "Eliminazione non disponibile"
        trElement.appendChild(testo);
    }
    return trElement;
}



function show(data) {
    const table = document.querySelector('.table').querySelector('tbody');

    // Rimuovi il contenuto attuale della tabella
    table.innerHTML = '';

    if (data.length === 0) {
        table.textContent = 'Nessun ordine';
        return;
    }

    // Aggiungi le nuove righe alla tabella
    for (const product of data) {
        const tableRow = createTableRow(product);
        table.appendChild(tableRow);
    }
}



function productsData(data){
    show(data);
}

function productsResponse(response){
    return response.json();
}

fetch(BASE_URL + 'ordini/products').then(productsResponse).then(productsData);

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

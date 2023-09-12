function getCSRFToken() {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    return metaTag ? metaTag.getAttribute('content') : '';
}


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

    

    // ID del prodotto
    const productId = document.createElement('td');
    productId.textContent = product.id;
    trElement.appendChild(productId);

    const userId = document.createElement('td');
    let s = product.user.nome + ' ' + product.user.cognome;
    userId.textContent = s;
    trElement.appendChild(userId);

    // Nome dei prodotti
    const productNamesCell = document.createElement('td');
    const productNamesTable = document.createElement('table');

    // Creo una riga per ciascun nome
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
    const orderStatusCell = document.createElement('td');
    const dropdownDiv = document.createElement('div');
    dropdownDiv.classList.add('dropdown');

    


    // Bottone dropdown
    const dropdownButton = document.createElement('button');
    dropdownButton.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
    dropdownButton.type = 'button';
    dropdownButton.setAttribute('data-bs-toggle', 'dropdown');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownButton.textContent = product.stato;
    dropdownButton.id = "stato";
    dropdownButton.name = "stato";
    dropdownDiv.appendChild(dropdownButton);

    // Dropdown menu
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');

    const stati = ['Inviato', 'In preparazione', 'Pronto', 'In consegna', 'Consegnato'];

    stati.forEach((stato) => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.classList.add('dropdown-item');
        linkItem.href = '#';
        linkItem.textContent = stato;
    
        linkItem.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Trova il form corrispondente all'elemento cliccato
            const form = this.closest('form');
            
            // Aggiorna il testo del bottone con lo stato selezionato
            dropdownButton.textContent = stato;
            
            // Imposta il valore del campo nascosto con lo stato selezionato
        const inputStato = form.querySelector('[name="stato"]');
        inputStato.value = stato;

            // Invia il form
            form.submit();
        });
    
        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });

    dropdownDiv.appendChild(dropdownMenu);

    // Form
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'orders/changeState';

    //CSRF token
    const csrfTokenInput = document.createElement('input');
    csrfTokenInput.type = 'hidden';
    csrfTokenInput.name = '_token';
    csrfTokenInput.value = getCSRFToken();
    form.appendChild(csrfTokenInput);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'order_id';
    inputId.value = product.id;
    inputId.classList.add('d-none');
    form.appendChild(inputId);
    
    const inputStato = document.createElement('input');
    inputStato.type = 'hidden';
    inputStato.name = 'stato';
    inputStato.value = product.stato;
    form.appendChild(inputStato);

    form.appendChild(dropdownDiv);
    orderStatusCell.appendChild(form);
    trElement.appendChild(orderStatusCell);

    return trElement;
}



function show(data) {
    const table = document.querySelector('.table').querySelector('tbody');
    table.innerHTML = '';

    if (data.length === 0) {
        table.textContent = 'Nessun ordine';
        return;
    }
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

fetch(BASE_URL + 'orders/products').then(productsResponse).then(productsData);

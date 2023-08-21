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

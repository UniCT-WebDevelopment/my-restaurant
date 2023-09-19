function createTableCategories(categoryData) {
    /*const tableRow = document.createElement('tr');

    console.log(categoria.categoria);
    
    //Colonna "categoria"
    const categoriaCell = document.createElement('td');
    categoriaCell.textContent = categoria.categoria;
    tableRow.appendChild(categoriaCell);
    
    //Colonna "azione"
    const azioneCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.id = categoria.categoria;
    deleteButton.textContent = 'Elimina';
    deleteButton.classList.add('btn', 'btn-danger');
    
    //Aggiungi un gestore di eventi al pulsante per gestire l'eliminazione della categoria
    deleteButton.addEventListener('click', function() {
        const categoriaToDelete = categoria; // Salva la categoria in una variabile
        const csrfToken = window.csrfToken; // Sostituisci con il tuo token CSRF
    
        //Creazione del form
        const form = document.createElement('form');
        form.method = 'post';
        form.action = 'settings/deleteCategories'; // Sostituisci con l'URL corretto
    
        //Creazione del campo nascosto per il token CSRF
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token'; // Assicurati che il nome del campo sia corretto per il tuo server
        csrfInput.value = csrfToken;
    
        //Creazione del campo nascosto per il nome della categoria
        const categoriaInput = document.createElement('input');
        categoriaInput.type = 'hidden';
        categoriaInput.name = 'categoria';
        categoriaInput.value = categoriaToDelete;
    
        //Aggiunta dei campi nascosti al form
        form.appendChild(csrfInput);
        form.appendChild(categoriaInput);
    
        //Aggiunta del form al documento e invio automatico
        document.body.appendChild(form);
        form.submit();
    });
    
    
    azioneCell.appendChild(deleteButton);
    tableRow.appendChild(azioneCell);
    
    return tableRow;*/

    const tableRow = document.createElement('tr');

    // Colonna "categoria"
    const categoriaCell = document.createElement('td');
    categoriaCell.textContent = categoryData.categoria;
    tableRow.appendChild(categoriaCell);

    // Colonna "azione"
    const azioneCell = document.createElement('td');

    if (categoryData.hasActiveProducts) {
        // Se ci sono prodotti attivi, mostra il pulsante "Elimina"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.classList.add('btn', 'btn-danger');

        deleteButton.addEventListener('click', function() {
            const categoriaToDelete = categoryData.categoria; // Salva la categoria in una variabile
            const csrfToken = window.csrfToken; // Sostituisci con il tuo token CSRF
        
            //Creazione del form
            const form = document.createElement('form');
            form.method = 'post';
            form.action = 'settings/deleteCategories'; // Sostituisci con l'URL corretto
        
            //Creazione del campo nascosto per il token CSRF
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = '_token'; // Assicurati che il nome del campo sia corretto per il tuo server
            csrfInput.value = csrfToken;
        
            //Creazione del campo nascosto per il nome della categoria
            const categoriaInput = document.createElement('input');
            categoriaInput.type = 'hidden';
            categoriaInput.name = 'categoria';
            categoriaInput.value = categoriaToDelete;
        
            //Aggiunta dei campi nascosti al form
            form.appendChild(csrfInput);
            form.appendChild(categoriaInput);
        
            //Aggiunta del form al documento e invio automatico
            document.body.appendChild(form);
            form.submit();
        });
        azioneCell.appendChild(deleteButton);
    } else {
        // Se non ci sono prodotti attivi, mostra il pulsante "Attiva"
        const activateButton = document.createElement('button');
        activateButton.textContent = 'Attiva';
        activateButton.classList.add('btn', 'btn-success');

        activateButton.addEventListener('click', function() {
            const categoriaToDelete = categoryData.categoria; // Salva la categoria in una variabile
            const csrfToken = window.csrfToken; // Sostituisci con il tuo token CSRF
        
            //Creazione del form
            const form = document.createElement('form');
            form.method = 'post';
            form.action = 'settings/activateCategories'; // Sostituisci con l'URL corretto
        
            //Creazione del campo nascosto per il token CSRF
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = '_token'; // Assicurati che il nome del campo sia corretto per il tuo server
            csrfInput.value = csrfToken;
        
            //Creazione del campo nascosto per il nome della categoria
            const categoriaInput = document.createElement('input');
            categoriaInput.type = 'hidden';
            categoriaInput.name = 'categoria';
            categoriaInput.value = categoriaToDelete;
        
            //Aggiunta dei campi nascosti al form
            form.appendChild(csrfInput);
            form.appendChild(categoriaInput);
        
            //Aggiunta del form al documento e invio automatico
            document.body.appendChild(form);
            form.submit();
        });

        azioneCell.appendChild(activateButton);
    }

    tableRow.appendChild(azioneCell);

    return tableRow;
}

function mostra(data) {

    const table = document.querySelector('.categoriesTable').querySelector('tbody');

    // Rimuovi il contenuto attuale della tabella
    table.innerHTML = '';


    if (data.length === 0) {
        table.textContent = 'Nessuna categoria';
        return;
    }

    // Aggiungi le nuove righe alla tabella
    for (const categoryData of data) {
        console.log(categoryData);
        const tableRow = createTableCategories(categoryData);
        table.appendChild(tableRow);
    }
    
}

function categoriesData(data) {
    mostra(data);
}

function categoriesResponse(response) {
    return response.json();
}

fetch(BASE_URL + 'settings/selectCategories')
    .then(categoriesResponse)
    .then(categoriesData);


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
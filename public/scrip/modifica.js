
function createProductCard(product){
    
        // Form
        const formElement = document.createElement('form');
        formElement.method = 'POST';
        formElement.classList.add('p-2');
    
        // CSFR
        const csrfField = document.createElement('input');
        csrfField.type = 'hidden';
        csrfField.name = '_token'; // Assicurati che il nome sia '_token' per essere compatibile con Laravel
        csrfField.value = window.csrfToken; // Questo inserisce il token CSRF generato da Laravel nel campo
        formElement.appendChild(csrfField);
    
        // Card
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'mt-2', 'ms-4');
        cardElement.style.width = '18rem';
    
        // Div immagine
        const imgDiv = document.createElement('div');
        imgDiv.style.width = '100%'; // Dimensione fissa
        imgDiv.style.height = '200px'; // Dimensione fissa (puoi cambiare questo valore a tuo piacimento)
    
        // Immagine
        const imgElement = document.createElement('img');
        imgElement.src = '../' + product.percorso_img;
        imgElement.style.width = '100%'; // Immagine si adatta alla larghezza del div
        imgElement.style.height = '100%'; // Immagine si adatta all'altezza del div
        imgElement.classList.add('card-img-top');
    
    
        imgDiv.appendChild(imgElement);
        cardElement.appendChild(imgDiv);
    
        // BodyCard
        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add('card-body', 'm-0', 'p-0');
    
        // ID
        const idInput = document.createElement('input');
        idInput.type = 'text';
        idInput.classList.add('form-control');
        idInput.classList.add('d-none');
        idInput.id = 'id';
        idInput.name = 'id';
        idInput.value = product.id;
        //idInput.disabled = true;
        cardBodyElement.appendChild(idInput);
    
        // Nome
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nome';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.classList.add('form-control');
        nameInput.id = 'nome';
        nameInput.name = 'nome';
        nameInput.value = product.nome;
        cardBodyElement.appendChild(nameLabel);
        cardBodyElement.appendChild(nameInput);
    
        // Ingredienti
        const ingredientsLabel = document.createElement('label');
        ingredientsLabel.textContent = 'Ingredienti';
        const ingredientsTextarea = document.createElement('textarea');
        ingredientsTextarea.classList.add('form-control');
        ingredientsTextarea.id = 'ingredienti';
        ingredientsTextarea.name = 'ingredienti';
        ingredientsTextarea.value = product.ingredienti;
        cardBodyElement.appendChild(ingredientsLabel);
        cardBodyElement.appendChild(ingredientsTextarea);
    
        // Prezzo
        const prezzoLabel = document.createElement('label');
        prezzoLabel.textContent = 'Prezzo';
        const prezzoInput = document.createElement('input');
        prezzoInput.type = 'text';
        prezzoInput.classList.add('form-control');
        prezzoInput.id = 'prezzo';
        prezzoInput.name = 'prezzo';
        prezzoInput.value = product.prezzo;
        cardBodyElement.appendChild(prezzoLabel);
        cardBodyElement.appendChild(prezzoInput);
    
        // Categoria
        const categoryLabel = document.createElement('label');
        categoryLabel.textContent = 'Categoria';
        const categoryInput = document.createElement('input');
        categoryInput.type = 'text';
        categoryInput.classList.add('form-control');
        categoryInput.id = 'categoria';
        categoryInput.name = 'categoria';
        categoryInput.value = product.categoria;
        cardBodyElement.appendChild(categoryLabel);
        cardBodyElement.appendChild(categoryInput);
    
        // Immagine
        const imageLabel = document.createElement('label');
        imageLabel.textContent = 'Immagine';
        const imageInput = document.createElement('input');
        imageInput.type = 'text';
        imageInput.classList.add('form-control');
        imageInput.id = 'immagine';
        imageInput.name = 'immagine';
        const imagePath = product.percorso_img;
        const fileName = imagePath.split('/').pop();
        imageInput.value = fileName;
        cardBodyElement.appendChild(imageLabel);
        cardBodyElement.appendChild(imageInput);
    
        // Pulsante "Modifica"
        const modifyButton = document.createElement('input');
        modifyButton.type = 'submit';
        modifyButton.classList.add('btn', 'btn-primary', 'mt-2');
        modifyButton.value = 'Modifica';
        modifyButton.formAction = BASE_URL+'update';
        cardBodyElement.appendChild(modifyButton);
    
        // Pulsante "Elimina"
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('btn', 'btn-danger', 'mt-2', 'position-absolute', 'end-0', 'me-2');
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
                // Invia il modulo
                formElement.submit();
            });
        });
    
        cardBodyElement.appendChild(deleteButton);
    
        // Aggiunta di tutti gli elementi al form
        const inputElements = [csrfField, idInput, nameLabel, nameInput, ingredientsLabel, ingredientsTextarea, prezzoLabel, prezzoInput, categoryLabel, categoryInput, imageLabel, imageInput, modifyButton, deleteButton];
        inputElements.forEach(input => {
            formElement.appendChild(input);
        });
    
        cardBodyElement.appendChild(formElement);
    
        cardElement.appendChild(cardBodyElement);
        return cardElement;
    }
    
    function show(data){
        const cardsContainer = document.querySelector('#cardsContainer');
        cardsContainer.innerHTML = '';
        if(data.length == 0){
            cardsContainer.textContent = 'Nessuna prodotto';
            return;
        }
        cardsContainer.append(createProductCard(data));
    }
    
    
    function productsData(data){
        show(data);
    }
    
    function productsResponse(response){
        return response.json();
    }
    
    const id = document.getElementById('input');
    
    fetch(BASE_URL + 'home/modifica/' +id.value).then(productsResponse).then(productsData);
    
    
    
    
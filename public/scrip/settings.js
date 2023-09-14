
function createSlide(slide, index) {
    // Crea un nuovo elemento "carousel-item"
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    

    // Crea l'elemento <img> per l'immagine
    const image = document.createElement('img');
    image.classList.add('d-block', 'w-100'); // Classi Bootstrap per formattare l'immagine
    image.style.height = '600px'; // Imposta l'altezza fissa desiderata
    image.src = slide.full_image_url; // Imposta l'URL completo dell'immagine
    image.alt = '...'; // Imposta il testo alternativo dell'immagine

    // Aggiungi l'elemento <img> all'elemento "carousel-item"
    carouselItem.appendChild(image);

    // Crea un elemento "carousel-caption" per il testo
    const carouselCaption = document.createElement('div');
    carouselCaption.classList.add('carousel-caption', 'd-none', 'd-md-block');

    // Aggiungi il titolo
    const title = document.createElement('h5');
    title.classList.add('text-light');
    title.textContent = slide.titolo;

    // Aggiungi il testo
    const text = document.createElement('p');
    text.classList.add('text-light');
    text.textContent = slide.testo;

    // Aggiungi il titolo e il testo all'elemento "carousel-caption"
    carouselCaption.appendChild(title);
    carouselCaption.appendChild(text);

    // Aggiungi "carousel-caption" all'elemento "carousel-item"
    carouselItem.appendChild(carouselCaption);

    // Aggiungi la classe 'active' solo alla prima slide
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    return carouselItem;
}






function show(data) {
    const slider = document.querySelector('.carousel-inner');

    // Rimuovi il contenuto attuale della tabella
    slider.innerHTML = '';

    const slidesFiltrati = data.filter(slide => slide.is_used === 1);

    if (slidesFiltrati.length === 0) {
        slider.textContent = 'Nessuna slide';
        return;
    }

    // Aggiungi le nuove righe alla tabella
    for (const [index, slide] of slidesFiltrati.entries()) {
        if(slide.is_used === 1){
            const newSlide = createSlide(slide, index); // Passa l'indice corretto
            slider.appendChild(newSlide);
        }
    }
}

function createCarouselIndicators(slides) {
    const carouselIndicators = document.querySelector('.carousel-indicators');

    // Rimuovi il contenuto attuale dei pulsanti
    carouselIndicators.innerHTML = '';
    const slidesFiltrati = slides.filter(slide => slide.is_used === 1);

    slidesFiltrati.forEach((slide, index) => {
        console.log(slide);
        const indicatorButton = document.createElement('button');
        indicatorButton.type = 'button';
        indicatorButton.setAttribute('data-bs-target', '#carouselExampleCaptions');
        indicatorButton.setAttribute('data-bs-slide-to', index);
        indicatorButton.className = 'bg-light';

        if (index === 0) {
            indicatorButton.classList.add('active');
            indicatorButton.setAttribute('aria-current', 'true');
        }

        indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
        carouselIndicators.appendChild(indicatorButton);

    });
}

// Usa questa funzione dopo aver ottenuto i dati delle slide e averle inserite nel carousel




function productsData(data){
    show(data);
    createCarouselIndicators(data);
    show2(data);
}

function productsResponse(response){
    return response.json();
}


fetch(BASE_URL + 'settings/getSlides').then(productsResponse).then(productsData);





function createTableRow(slide) {
    const tableRow = document.createElement('tr');

    // Crea e aggiungi celle alla riga
    const imgColumn = document.createElement('td');
    const img = document.createElement('img');
    img.style.width = '100px';
    img.src = BASE_URL + slide.immagine;
    imgColumn.appendChild(img);

    const nameCell = document.createElement('td');
    nameCell.textContent = slide.titolo;

    const priceCell = document.createElement('td');
    priceCell.textContent = slide.testo;

    const isUsedCell = document.createElement('td');
    const form = document.createElement('form');
    form.method = 'post';
    const csrfTokenInput = document.createElement('input');
    csrfTokenInput.type = 'hidden';
    csrfTokenInput.name = '_token';
    csrfTokenInput.value = window.csrfToken;
    form.appendChild(csrfTokenInput);
    
    const slideIdInput = document.createElement('input');
    slideIdInput.type = 'hidden';
    slideIdInput.name = 'id';
    slideIdInput.value = slide.id;
    form.appendChild(slideIdInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';

    if (slide.is_used === 1) {
        form.action =BASE_URL + 'settings/unselectSlide';
        submitButton.className = 'btn btn-danger';
        submitButton.textContent = 'Non Mostrare';
    } else {
        form.action = BASE_URL + 'settings/selectSlide';
        submitButton.className = 'btn btn-success';
        submitButton.textContent = 'Mostrare';
    }

    
    form.appendChild(submitButton);
    isUsedCell.appendChild(form);

    
    // Aggiungi le celle alla riga
    tableRow.appendChild(imgColumn);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(priceCell);
    tableRow.appendChild(isUsedCell);

    return tableRow;
}


// ...

function show2(data) {
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

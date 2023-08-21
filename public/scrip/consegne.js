var map;
var userPosition;

function calculateRoute() {
  var indirizzoDestinazione = document.getElementById("indirizzoDestinazione").value;

  if (userPosition) {
    // Crea una richiesta di geocodifica per la destinazione
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: indirizzoDestinazione }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // Coordinate di destinazione e della posizione dell'utente
        var destinazione = results[0].geometry.location;
        
        // Oggetto DirectionsService per calcolare il percorso
        var directionsService = new google.maps.DirectionsService();
  
        // Oggetto DirectionsRenderer per visualizzare il percorso sulla mappa
        var directionsRenderer = new google.maps.DirectionsRenderer({
          map: map,
        });
  
        // Opzioni di richiesta per il calcolo del percorso
        var request = {
          origin: userPosition,
          destination: destinazione,
          travelMode: google.maps.TravelMode.DRIVING, // Modalità di viaggio
        };
  
        // Calcola il percorso
        directionsService.route(request, function (result, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            // Visualizza il percorso sulla mappa
            directionsRenderer.setDirections(result);
          } else {
            console.log("Calcolo del percorso non riuscito. Stato:", status);
          }
        });
      } else {
        console.log("Geocodifica non riuscita per la destinazione. Stato:", status);
      }
    });
  } else {
    console.log("Posizione dell'utente non disponibile.");
  }
}



function initMap() {
  map = new google.maps.Map(document.getElementById("mapModal"), {
    zoom: 15,
    center: { lat: 37.0925, lng: 15.208611 },
  });

}

window.initMap = initMap;


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

function createTableRow(order) {
  const trElement = document.createElement('tr');

  // ID
  const orderId = document.createElement('td');
  orderId.textContent = order.id;
  trElement.appendChild(orderId);

  const userId = document.createElement('td');
  userId.textContent = order.user_id;
  trElement.appendChild(userId);

  // Data
  const orderDate = document.createElement('td');
  orderDate.textContent = formatDateTime(order.created_at);
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
  dropdownButton.textContent = order.stato;
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
          const form = this.closest('form');
          dropdownButton.textContent = stato;
          const inputStato = form.querySelector('[name="stato"]');
          inputStato.value = stato;
          form.submit();
      });

      listItem.appendChild(linkItem);
      dropdownMenu.appendChild(listItem);
  });

  dropdownDiv.appendChild(dropdownMenu);

  // Form
  const form = document.createElement('form');
  form.method = 'post';
  form.action = 'consegne/changeState';

  // CSRF token
  const csrfTokenInput = document.createElement('input');
  csrfTokenInput.type = 'hidden';
  csrfTokenInput.name = '_token';
  csrfTokenInput.value = getCSRFToken();
  form.appendChild(csrfTokenInput);

  const inputId = document.createElement('input');
  inputId.type = 'text';
  inputId.name = 'order_id';
  inputId.value = order.id;
  inputId.classList.add('d-none');
  form.appendChild(inputId);

  const inputStato = document.createElement('input');
  inputStato.type = 'hidden';
  inputStato.name = 'stato';
  inputStato.value = order.stato;
  form.appendChild(inputStato);

  form.appendChild(dropdownDiv);
  orderStatusCell.appendChild(form);
  trElement.appendChild(orderStatusCell);

  // Open Modal
  const openModalCell = document.createElement('td');
  const openModalButton = document.createElement('button');
  openModalButton.classList.add('btn', 'btn-primary', 'm-3', 'open-modal');
  openModalButton.setAttribute('type', 'button');
  openModalButton.setAttribute('data-bs-toggle', 'modal');
  openModalButton.setAttribute('data-bs-target', '#addModal');
  openModalButton.setAttribute('data-order-id', order.id); // Aggiungi l'ID dell'ordine come attributo data
  openModalButton.textContent = 'Mappa';
  openModalCell.appendChild(openModalButton);
  trElement.appendChild(openModalCell);

  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal', 'fade');
  modalDiv.id = `mapModal-${order.id}`;
  trElement.appendChild(modalDiv);

  return trElement;
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('open-modal')) {
    const orderId = event.target.getAttribute('data-order-id');
    const modalTitle = document.querySelector('.modal-title');
    const indirizzoDestinazione = document.getElementById('indirizzoDestinazione');
    modalTitle.textContent = `Mappa Ordine ${orderId}`;


    fetch(`consegne/openModal/` + encodeURIComponent(orderId))
      .then(response => response.json())
      .then(data => {
        indirizzoDestinazione.value = data.indirizzo;
        initMapForModal(orderId);
      })
      .catch(error => {
        console.error('Errore durante il recupero dell\'indirizzo:', error);
      });
  }
});



function initMapForModal(orderId) {
  initMap(); //per resettare la mappa
  // Crea una nuova mappa per questa modal utilizzando l'ID dell'ordine
  const mapModal = new google.maps.Map(document.getElementById(`mapModal-${orderId}`), {
    zoom: 4,
    center: { lat: 37.062665, lng: 15.314507 },
  });

    // Posizione dell'utente
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
  
        document.getElementById("calculateRouteButton").addEventListener("click", function () {
          calculateRoute();
        });
      }, function () {
        console.log("Errore nel recupero della posizione dell'utente.");
      });
    } else {
      console.log("La geolocalizzazione non è supportata dal tuo browser.");
    }
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

fetch(BASE_URL + 'consegne/ordini').then(productsResponse).then(productsData);


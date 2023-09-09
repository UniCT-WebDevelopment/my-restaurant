
<html>
  <head>
    <title>Consegne</title>
    <link rel="stylesheet" href="{{ asset('stile/consegne.css') }}">
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6ZQYyJhhuB-mi12FlcfctVHBtKZ3V_28&libraries=places&callback=initMap" defer></script>

  </head>

<body>


<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <img src="{{ url('img/logo/pizza.png') }}" alt="Logo" style="width:80px; height: 80px">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link fs-5" aria-current="page" id="home" href="prodotti">Prodotti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="orders">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 active" href="consegne">Consegne</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



<div class="d-flex justify-content-center">
  <h1 style="margin-top: 100px; margin-bottom: 20px">LISTA ORDINI</h1>
</div>
<div class="container">
    <table class="table">
        <thead>
            <tr>
            <th scope="col">ID Ordine</th>
            <th scope="col">ID Utente</th>
            <th scope="col">Data</th>
            <th scope="col">Stato</th>
            <th scope="col">Mappa</th>
            </tr>
        </thead>
        <tbody>
          <!-- Elementi creati dinamicamente-->
        </tbody>
    </table>
</div>





  <button type="button" id="modal" class="btn btn-primary m-3 d-none" data-bs-toggle="modal" data-bs-target="#addModal">
        Mappa
    </button>

 <!-- Modal -->
 <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addModalLabel">Aggiungi</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" id="indirizzoDestinazione" class="w-100 rounded" placeholder="Inserisci un indirizzo">
        
        <div id="mapModal" style="height: 400px;"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
        <button type="button" id="calculateRouteButton" class="btn btn-primary">Calcola Percorso</button>
      </div>
    </div>
  </div>
</div>




<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
</script>
   
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="{{ asset('scrip/consegne.js') }}"></script>

  
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6ZQYyJhhuB-mi12FlcfctVHBtKZ3V_28&libraries=places&callback=initAutocomplete" defer></script>
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
          <a class="nav-link fs-5" id="menu" href="../menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../ordini">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../user_chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../logout">Logout</a>
        </li>
      </ul>
      <li class="nav-item float-end me-2">
          <button class="btn btn-success d-none" id="login">Login</button>
      </li>
    </div>
  </div>
</nav>




<div class="container d-flex justify-content-center mt-4">
  <h1>Riepilogo Ordine</h1>
</div>

<div id="cardsContainer" class="container d-flex flex-wrap justify-content-around mt-5">
</div>



<div class="container mt-4 d-flex justify-content-center align-items-center mb-5">
  <form action="carrello/save" method="post" class="d-flex flex-column justify-content-center">
    @csrf
    <input type="text" name="carrello" id="carrello" class="d-none">
    <h4>Indirizzo di consegna</h4>
    <input type="text" name="indirizzo" id="indirizzo" class="rounded">
    <button type="submit" class="btn btn-success d-block mt-2">Invia ordine</button>
  </form>
</div>


<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
</script>

<script>
  function initAutocomplete() {
      let autocompleteInput = new google.maps.places.Autocomplete(document.getElementById("indirizzo"), {
          fields: ["address_components", "geometry", "name"],
          types: ["address"],
      });
      console.log('autocomplete');
  }

  const menu = document.getElementById('menu');
</script>

<script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('scrip/carrello.js') }}"></script>
</body>
</html>
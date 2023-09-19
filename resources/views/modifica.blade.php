<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifica Prodotto</title>
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
</head>
<body>

<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Pizzeria</a>
    <img src="{{ url('img/logo/pizza.png') }}" alt="Logo" style="width:80px; height: 80px">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fs-5 active" aria-current="page" id="home" href="../prodotti">Prodotti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../orders">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="../consegne">Consegne</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link fs-5" href="../logout">Logout</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    <input type="text" name="input" id="input" class="d-none" value="{{$id}}">

<div class="d-flex justify-content-center mt-2">
<div id="cardsContainer" class="container d-flex justify-content-center"></div>
</div>

<!-- Modal di conferma eliminazione -->
<div class="modal fade" id="modifyModal" tabindex="-1" aria-labelledby="modifyModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modifyModalLabel">Conferma eliminazione</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi">
            </div>
            <div class="modal-body">
                Sei sicuro di voler modificare questo prodotto?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                
                <button type="button" class="btn btn-danger" id="confirmUpdate">Sì, modifica</button>
            </div>
        </div>
    </div>
</div>





    <script>
        const BASE_URL = "{{url('/')}}/"
        window.csrfToken = "{{ csrf_token() }}";
    </script>

    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('scrip/modifica.js') }}"></script>
</body>
</html>
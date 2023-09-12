<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
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
          <a class="nav-link fs-5" aria-current="page" id="home" href="menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 active" href="ordini">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="user_chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</nav>

<div class="d-flex justify-content-center">
  <h1 style="margin-top: 100px; margin-bottom: 20px">LISTA ORDINI</h1>
</div>


<div class="container">
    <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Prodotti</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Data</th>
            <th scope="col">Stato</th>
            <th scope="col">Elimina Ordine</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
</div>
   
<!-- Modal di conferma eliminazione -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">Conferma eliminazione</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi">
            </div>
            <div class="modal-body">
                Sei sicuro di voler eliminare quest'ordine?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                
                <button type="button" class="btn btn-danger" id="confirmDelete">Sì</button>
            </div>
        </div>
    </div>
</div>

<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
       
</script>
<script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('scrip/order.js') }}"></script>
</body>
</html>
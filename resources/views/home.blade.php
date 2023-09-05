<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>

    
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">

</head>
<body>


<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <img src="{{ url('img/logo/pizza.png') }}" alt="Logo" style="width:80px; height: 80px">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fs-5 active" aria-current="page" id="home" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="orders">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="consegne">Consegne</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link fs-5" href="logout">Logout</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>






  <div style="margin-top: 110px" class="container d-flex justify-content-around">
    <input type="text" id="searchInput" class="rounded-pill" placeholder="Cerca prodotto...">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
        Aggiungi Prodotto
    </button>

    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5" id="addModalLabel">Aggiungi</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form method="post">
                  <div class="modal-body d-flex flex-column">
                      @csrf
                      <label for="nome"> Nome </label>
                      <input type="text" name="nome" id="nome">

                      <label for="ingredienti"> Ingredienti </label>
                      <input type="text" name="ingredienti" id="ingredienti">

                      <label for="prezzo"> Prezzo </label>
                      <input type="text" name="prezzo" id="prezzo">

                      <label for="categoria"> Categoria </label>
                      <input type="text" name="categoria" id="categoria">
                      
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                      <button type="submit" id="add" class="btn btn-primary">Aggiungi</button>
                  </div>
              </form>
          </div>
      </div>
    </div>

  </div>

</div>


<!-- Card -->
<div id="cardsContainer" class="container d-flex flex-wrap mt-2 mb-5">
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
                Sei sicuro di voler eliminare questo prodotto?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                
                <button type="button" class="btn btn-danger" id="confirmDelete">Sì, elimina</button>
            </div>
        </div>
    </div>
</div>


    <script>
        const BASE_URL = "{{url('/')}}/"
        window.csrfToken = "{{ csrf_token() }}";
    </script>

    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('scrip/home.js') }}"></script>
    
</body>
</html>
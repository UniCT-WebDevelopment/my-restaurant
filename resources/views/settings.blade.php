<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Impostazioni</title>

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
          <a class="nav-link fs-5" href="consegne">Consegne</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 active" href="settings">Impostazioni</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div id="carouselExampleCaptions" class="carousel slide" style="margin-top: 96px"  data-bs-ride="carousel">
  <div class="carousel-indicators">
    
  </div>
  <div class="carousel-inner">
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div class="container d-flex justify-content-center" style="margin-top: 120px">
    <h1>Slides</h1>
</div>

<div class="container w-50 mt-2 mb-5">
    <form method="post" action="settings/addSlide" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label for="titolo" class="form-label">Titolo</label>
            <input type="textarea" name="titolo" class="form-control" id="titolo">
        </div>
        <div class="mb-3">
            <label for="testo" class="form-label">Testo</label>
            <textarea name="testo" id="testo" class="form-control"></textarea>
        </div>
        <div class="mb-3">
            <label for="immagine">Immagine</label>
            <input type="file" name="immagine" class="form-control" id="immagine">
        </div>
        <button type="submit" class="btn btn-primary">Aggiungi Slide</button>
    </form>
</div>


<div class="container w-75 mb-5">
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Immagine</th>
            <th scope="col">Titolo</th>
            <th scope="col">Testo</th>
            <th scope="col">Utilizza</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
</div>

<div class="container w-75 mb-5">
    <table class="categoriesTable">
        <thead>
            <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Azione</th>
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
   
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<script src="scrip/slider.js"></script>
<script src="scrip/categorie.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    
</body>
</html>
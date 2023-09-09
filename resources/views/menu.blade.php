<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Menu</title>

    
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">

    <style>
  /* Stile per gli indicatori bianchi */
  .carousel-indicators button {
    background-color: white;
    border: none;
  }
  
  /* Stile per l'indicatore attivo */
  .carousel-indicators button.active {
    background-color: white;
    opacity: 1;
  }
</style>


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
          <a class="nav-link fs-5 active" aria-current="page" id="menu" href="menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="ordini">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="user_chat">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="logout">Logout</a>
        </li>
        <li class="nav-item">
            <form method="post" action="menu/carrello">
                @csrf
                <input type="text" name="prodottiCarrello" id="prodottiCarrello" class="d-none">
                <button type = "submit" id="carrello" class="btn btn-outline-light">Carrello
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="red" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                </button>
            </form>  
        </li>
        <li class="nav-item d-flex justify-content-end">
          <a class="nav-link fs-5" id="login" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div id="carouselExampleDark" class="carousel carousel-dark slide d-flex justify-content-center" style="margin-top: 96px" data-bs-ride="carousel">
  <div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active bg-light" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="bg-light" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="bg-light" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="max-width: 100%">

    <div class="carousel-item active" style="height: 88vh; background-image: url('img/sfondo/c2.jpg'); background-size: cover; background-position: center center">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light">Ingredienti a km zero</h5>
        <p class="text-light">
          Tutti gli ingredienti che utilizziamo sono freschi al 100%.
          La salsa di pomodoro è fatta in casa con pomodori di zona e il basilico fresco
          viene direttamente dal nostro orto
        </p>
      </div>
    </div>

    <div class="carousel-item" style="height: 88vh; background-image: url('img/sfondo/c1.jpg'); background-size: cover; background-position: center center">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light">Impasto con 72h di lievitazione</h5>
        <p class="text-light">
          Il nostro impasto è altamente digeribile grazie alla lunga lievitazione, in più
          i 3 tipi diversi di farina utilizzati, gli conferiscono un sapore unico
        </p>
      </div>
    </div>

    <div class="carousel-item" style="height: 88vh; background-image: url('img/sfondo/c3.jpg'); background-size: cover; background-position: center center">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-light">Menù sempre aggiornato</h5>
        <p class="text-light">
          Aggiorniamo di continuo il nostro menù inserendo nuove pizze realizzate con ingredienti 
          di stagione. Vieni a provare le nostre specialità
        </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<!-- Card -->

<div class="d-flex justify-content-center mt-5">
    <h1>Antipasti</h1>
  </div>
<div id="cardsContainer2" class="container d-flex flex-wrap mt-4 justify-content-around">
</div>

<div class="d-flex justify-content-center">
    <h1>Pizze</h1>
</div>
<div id="cardsContainer" class="container d-flex flex-wrap mt-4 justify-content-around">
</div>

<div class="d-flex justify-content-center">
    <h1>Dessert</h1>
</div>
<div id="cardsContainer3" class="container d-flex flex-wrap mt-4 justify-content-around">
</div>



<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
    
</script>


    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('scrip/menu.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
</body>
</html>
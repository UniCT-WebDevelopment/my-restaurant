<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Ordini</title>

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
          <a class="nav-link fs-5" aria-current="page" id="home" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 active" href="ordini">Ordini</a>
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

<div class="d-flex justify-content-center">
  <h1 style="margin-top: 100px; margin-bottom: 20px">LISTA ORDINI</h1>
</div>
<div class="container">
    <table class="table">
        <thead>
            <tr>
            <th scope="col">ID Ordine</th>
            <th scope="col">ID Utente</th>
            <th scope="col">Prodotti</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Data</th>
            <th scope="col">Stato</th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
</div>




<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="{{ asset('scrip/ordini.js') }}"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Chat</title>

    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/prova.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/chat.css') }}">
</head>
<body>


<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
          <a class="nav-link fs-5" href="orders">Ordini</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 active" href="chat">Chat</a>
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



<div class="page">
  <div class="container">
    <div class="leftSide">
      <div class="chatlist">
        
      </div>
    </div>
    <div class="rightSide">
        <div class="chatBox">
          
        </div>
      
        <form method="post" action="chat/send">
          @csrf
          <div class="chatbox_input">
            <input type="text" name="user_id" id="user_id" class="d-none">
            <input type="text" placeholder="Type a message" name="message" id="message">
            <button type="submit" id="submit-button">
              <img src="svg/send.svg" alt="Submit">
            </button>
          </div>
        </form>

      </div>
  </div>
</div>



<script>
    const BASE_URL = "{{url('/')}}/"
    window.csrfToken = "{{ csrf_token() }}";
</script>

<script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('scrip/chat.js') }}"></script>


    
</body>
</html>
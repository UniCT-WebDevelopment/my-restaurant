<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Modifica</h1>

    <input type="text" name="input" id="input" class="d-none" value="{{$id}}">

    <!-- Card -->
<div id="cardsContainer" class="container d-flex flex-wrap mt-2 mb-5">
</div>


    <script>
        const BASE_URL = "{{url('/')}}/"
        window.csrfToken = "{{ csrf_token() }}";
    </script>

    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('scrip/modifica.js') }}"></script>
</body>
</html>
<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/register.css') }}">
    <title>Login</title>
</head>
<body>


    <div class="container mt-5 mw-sm-25 hidden">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-md-6  border rounded-5 bg-white w-100 m-5">
                <div class=" d-flex justify-content-center">
                    <h1>Login</h1>
                </div>
                
                <form method='post' class="my-form">
                    @csrf

                    <div class="form-group p-1">
                        <input type="email" class="form-control" name="username" id="username" placeholder="Username/Email" value='{{old("username")}}'>
                    </div>

                    <div class="form-group p-1">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" value='{{old("password")}}'>
                    </div>


                    <div class="form-group p-1 mb-2">
                        <a href="register" class="mb-5">Registrati</a>
                        <button type="submit" id="button" class="btn btn-success w-100 rounded-pill mt-2">Accedi</button>
                    </div>

                    @if($error == "empty_fields")
                    <p>Compilare tutti i campi</p>

                    @elseif($error == "wrong")
                    <p>Credenziali non valide</p>
                    @endif
            
                </form>
            </div>
        </div>
    </div>

    



    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
</body>
</html>
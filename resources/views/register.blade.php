<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('bootstrap-5.3.0-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('stile/register.css') }}">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6ZQYyJhhuB-mi12FlcfctVHBtKZ3V_28&libraries=places&callback=initAutocomplete" defer></script>
    <title>Registrazione</title>
</head>
<body>


    <div class="container mt-5 mw-sm-25">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-md-6  border rounded-5 bg-white w-100 m-2">
                <div class="d-flex justify-content-center">
                    <h1>Registrazione</h1>
                </div>
                
                <form method='post' class="my-form">
                    @csrf
                    <div class="row">
                        <div class="col">
                            <div class="form-group p-1">
                                <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome" value='{{old("nome")}}'>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group p-1">
                                <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" value='{{old("cognome")}}'>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="form-group p-1">
                                <input type="number" class="form-control" name="eta" id="eta" placeholder="Età" value='{{old("eta")}}'>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group p-1">
                                <input type="text" class="form-control" name="n_telefono" id="n_telefono" placeholder="Numero di Telefono" value='{{old("n_telefono")}}'>
                            </div>
                        </div>
                    </div>


                    <div class="form-group p-1">
                        <input type="text" class="form-control" name="indirizzo" id="indirizzo" placeholder="Indirizzo" value='{{old("indirizzo")}}'>
                    </div>

                    <div class="form-group p-1">
                        <input type="email" class="form-control" name="username" id="username" placeholder="Username/Email" value='{{old("username")}}'>
                    </div>

                    <div class="form-group p-1">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" value='{{old("password")}}'>
                    </div>

                    <div class="form-group p-1">
                        <input type="password" class="form-control" name="confermaPassword" id="confermaPassword" placeholder="Conferma Password" value='{{old("confermaPassword")}}'>
                        <p id="err_confermaPassword" class="text-danger d-none">*campo obbligatorio</p>
                    </div>

                    <div class="form-group p-1 mb-2">
                        <a href="login">Login</a>
                        <button type="submit" id="button" class="btn btn-success w-100 rounded-pill mt-2">Registrati</button>
                    </div>

                    @if($error == "empty_fields")
                    <p>Compilare tutti i campi</p>

                    @elseif($error == 'different_password')
                    <p>Password diverse</p>

                    @elseif($error == 'existing_email')
                    <p>Email già esistente</p>

                    @elseif($error == "existing_password")
                    <p>Password già in uso</p>

                    @elseif($error == "invalid_password")
                    <p>Password non valida (i caratteri devono andare da 8 a 40)</p>
                    @endif
            
                </form>
            </div>
        </div>
    </div>

    



    <script src="{{ asset('bootstrap-5.3.0-dist/js/bootstrap.min.js') }}"></script>
    <script>
        function initAutocomplete() {
            let autocompleteInput = new google.maps.places.Autocomplete(document.getElementById("indirizzo"), {
                fields: ["address_components", "geometry", "name"],
                types: ["address"],
            });
            console.log('autocomplete');
        }
    </script>
</body>
</html>
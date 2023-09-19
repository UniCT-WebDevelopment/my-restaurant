<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\User;
use Session;

class LoginController extends BaseController{

    public function register_form(){
        $error = Session::get('error');
        Session::forget('error');
        return view('register')->with('error', $error);
    }

    public function isLogged(){
        if (Session::get('user_id')) {
            return response()->json(true); // L'utente è loggato
        } else {
            return response()->json(false); // L'utente non è loggato
        }
    }

    public function do_register(){

        if(strlen(request('nome')) == 0 || strlen(request('cognome')) ==0 || strlen(request('eta')) ==0 || strlen(request('n_telefono')) ==0 || strlen(request('indirizzo')) ==0 || strlen(request('username')) ==0 || strlen(request('password')) ==0 || strlen(request('confermaPassword')) ==0){

            Session::put('error', 'empty_fields');
            return redirect('register')->withInput();
        }
        else if(request('password') != request('confermaPassword')){
            Session::put('error', 'different_password');
            return redirect('register')->withInput();
        } 
        else if(User::where('username', request('username'))->first()){
            Session::put('error', 'existing_email');
            return redirect('register')->withInput();
        }
        else if(User::where('password', sha1(request('password')))->first()){
            Session::put('error', 'existing_password');
            return redirect('register')->withInput();
        }
        else if(User::where('password', request('password'))->first()){
            Session::put('error', 'existing_password');
            return redirect('register')->withInput();
        }
        else if(strlen(request('password'))<8 || strlen(request('password'))>40){
            Session::put('error', 'invalid_password');
            return redirect('register')->withInput();
        }
        else{
            $user= new User;
            $user->nome = request('nome');
            $user->cognome = request('cognome');
            $user->eta = request('eta');
            $user->n_telefono = request('n_telefono');
            $user->indirizzo = request('indirizzo');
            $user->username = request('username');
            $user->password = sha1(request('password'));
            $user->tipo = 'user';
            $user->save();
            return redirect('login');
        }


        
    }

    public function login_form(){
        $error = Session::get('error');
        Session::forget('error');
        return view('login')->with('error', $error);
    }

    public function do_login(){

        if(strlen(request('username')) ==0 || strlen(request('password')) ==0 ){

            Session::put('error', 'empty_fields');
            return redirect('login')->withInput();
        }
        
        $user = User::where('username', request('username'))->first();
        
        if(!$user || $user->password != sha1(request('password'))){
            Session::put('error', 'wrong');
            return redirect('login')->withInput();
        }
        else{
            Session::put('user_id', $user->id);
            Session::put('user_tipo', $user->tipo);
            if($user->tipo == 'administrator'){
                return redirect('prodotti');
            }
            if(Session::get('carrello')){
                return redirect('menu/carrello');
            }
            return view('menu');
        }
        
    }

    public function logout(){
        Session::flush();
        return redirect('login');
    }
   
}

?>

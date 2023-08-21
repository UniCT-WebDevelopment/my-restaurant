<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use Session;

class MenuController extends BaseController{

    public function menu(){
        if(!Session::get('user_id')){
            return redirect('login');
        } 
        return view('menu');
    }

    public function show_pizze(){
        if(!Session::get('user_id')){
            return [];
        }
        $products = Product::where('categoria', 'pizze')->get();
        return $products;
    }

    public function show_antipasti(){
        if(!Session::get('user_id')){
            return [];
        }
        $products = Product::where('categoria', 'antipasti')->get();
        return $products;
    }

    public function show_dessert(){
        if(!Session::get('user_id')){
            return [];
        }
        $products = Product::where('categoria', 'dessert')->get();
        return $products;
    }


    public function add(){

        $carrello = request('prodottiCarrello');

        session()->put('carrello',$carrello);

        return view('carrello');
    }
    
}

?>

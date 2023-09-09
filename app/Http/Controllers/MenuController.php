<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use Session;

class MenuController extends BaseController{

    public function menu(){
        return view('menu');
    }

    public function show_pizze(){
        $products = Product::where('categoria', 'pizze')->get();
        return $products;
    }

    public function show_antipasti(){
        $products = Product::where('categoria', 'antipasti')->get();
        return $products;
    }

    public function show_dessert(){
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

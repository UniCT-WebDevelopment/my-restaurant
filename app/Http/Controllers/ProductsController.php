<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use Session;

class ProductsController extends BaseController{

    public function home(){
        if(!Session::get('user_id')){
            return [];
        }
        return view('home');
    }

    public function show_products(){
        if(!Session::get('user_id')){
            return [];
        }
        $products = Product::whereIn('categoria', ['antipasti', 'pizze', 'dessert'])
                  ->orderBy('categoria')
                  ->get();
        return $products;
    }


    public function add(){
        if(strlen(request('nome')) ==0 || strlen(request('ingredienti')) ==0 ){

            Session::put('error', 'empty_fields');
            return redirect('home')->withInput();
        }
        $product = new Product;
        $product->nome = request('nome');
        $product->ingredienti = request('ingredienti');
        $product->categoria = request('categoria');
        $product->percorso_img = "img/pizze/".request('nome').".png";
        $product->prezzo = request('prezzo');
        $product->save();
        return view('home');
    }

    /*public function modify(){
        $product = Product::find(request('id'));
      
        $product->nome = request('nome');
        $product->ingredienti = request('ingredienti');
        $product->categoria = request('categoria');
        $product->prezzo = request('prezzo');
        $product->percorso_img = "img/pizze/".request('nome').".png";
    
        $product->save();
        return redirect('home');
    }*/

    public function modify(){
        return view('modifica')->with('id', request('id'));
    }

    public function modifyProduct($productId){
        $product = Product::find($productId);
        if (!$product) {
            return response()->json(['error' => 'product not found'], 404);
        }
        return response()->json($product);
    }

    public function delete(){
        $product = Product::find(request('id'));
    
        if ($product) {
            $product->delete();
        }
    
        return redirect('home');
    }
   
}

?>

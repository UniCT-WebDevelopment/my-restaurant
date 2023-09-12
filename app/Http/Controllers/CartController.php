<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use App\Models\Order;
use App\Models\User;
use Session;

class CartController extends BaseController{

   public function show(){
        /*$carrello = Session::get('carrello');
        dd($carrello);
        return redirect('carrello');*/
        return view('carrello');
   }

    public function products(){
        $userId = Session::get('user_id');
        $user = User::find($userId);
        
        // Se l'utente esiste, prendo l'indirizzo
        $indirizzo = null;
        if ($user) {
            $indirizzo = $user->indirizzo;
        }

        $carrello = Session::get('carrello');
        $carrelloArray = explode(',', $carrello);
        $products = [];
        foreach ($carrelloArray as $productId) {
            $product = Product::find($productId);
            if ($product) {
                $products[] = $product;
            }
        }

        return [
            'products' => $products,
            'indirizzo' => $indirizzo,
        ];
    }


   public function save(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        $carrello = request('carrello');
        $carrelloArray = explode(',', $carrello);
        $indirizzo = request('indirizzo');

        // Creazione del nuovo ordine
        $order = new Order();
        $order->stato = 'Inviato';
        $order->indirizzo = $indirizzo;
        $order->tipo = 'consegna';
        $order->user_id = Session::get('user_id');
        $order->save();

        // Creazione delle nuove righe nella tabella order_product
        foreach ($carrelloArray as $productId) {
            $product = Product::find($productId);
            if ($product) {
                // Viene utilizzato nelle relazioni molti a molti per collegare due record
                $order->products()->attach($product);
            }
        }
        Session::forget('carrello');
        return redirect('menu');
    }
}


?>
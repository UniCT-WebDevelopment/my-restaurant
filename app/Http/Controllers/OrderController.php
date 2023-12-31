<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

use Session;

class OrderController extends BaseController{
    //user page
   public function show(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        return view('order');
    }

    public function products(){
        $user_id = session()->get('user_id');
    
        // Otteniamo ordini e relativi prodotti con il nome e il cognome dell'utente
        $orders = Order::where('user_id', $user_id)
            ->with(['products', 'user:id,nome,cognome']) // Seleziona solo i campi nome e cognome dalla tabella users
            ->orderByDesc('created_at')
            ->get();
    
        $orders->transform(function ($order) {
            $productNames = $order->products->pluck('nome')->toArray();
            $order->product_names = $productNames;
            unset($order->products);
    
            // Calcola la somma dei prezzi dei prodotti per ciascun ordine
            $totalPrice = 0;
            foreach ($order->products as $product) {
                $totalPrice += (float) str_replace(',', '.', $product->prezzo);
            }
            $order->total_price = $totalPrice;
    
            return $order;
        });
    
        return $orders;
    }
    

    public function deleteOrder(){
        $order = request('order');
    
        // Elimina le righe dalla tabella order_product
        DB::table('order_product')->where('order_id', $order)->delete();
    
        // Elimina la riga dalla tabella order
        DB::table('orders')->where('id', $order)->delete();
    
        return view('order'); // Reindirizza alla pagina desiderata dopo l'eliminazione
    }
    

    //administrator page
    public function show_orders(){
        if(!Session::get('user_id')){
            return redirect('login');
        } if(Session::get('user_tipo') != 'administrator'){
            Session::flush();
            return redirect('login');
        }
        return view('ordini');
    }

    public function allOrders() {
        $orders = Order::with('products')->orderByDesc('created_at')->get();
        
        // Mi permette di modificare gli oggetti dentro $orders
        $orders->transform(function ($order) {
            // Aggiungo il campo Nome all'array
            $productNames = $order->products->pluck('nome')->toArray();
            $order->product_names = $productNames;
            unset($order->products);
            // Calcola la somma dei prezzi dei prodotti per ciascun ordine
            $totalPrice = 0;
            foreach ($order->product_prices as $price) {
                $totalPrice += (float) str_replace(',', '.', $price);
            }
            $order->total_price = $totalPrice;

            $order->user_id = $order->user->id;
            return $order;
        });
        return $orders;
    }

    public function changeState(){
        $orderId = request('order_id');
        echo '\n\n\n\n'.$orderId;
        $order = Order::find($orderId);
        if($order){
            $newState = request('stato');
            $order->stato = $newState;
            $order->save();
        } else return view('home');
        return redirect('orders');
    }
    
}



?>
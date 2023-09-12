<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Product;
use App\Models\Order;
use App\Models\User;
use Session;

class DeliveryController extends BaseController{

   public function show(){
        if(!Session::get('user_id')){
            return redirect('login');
        } if(Session::get('user_tipo') != 'administrator'){
            Session::flush();
            return redirect('login');
        }
        return view('consegne');
   }

   public function getDeliveryOrders(){
    $ordini = Order::whereIn('stato', ['pronto', 'in consegna'])
        ->with(['user:id,nome,cognome,n_telefono']) // Seleziona solo i campi desiderati dalla tabella users
        ->orderByDesc('created_at')
        ->get();

    return $ordini;
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
        return redirect('consegne');
   }

    public function openModal($order_id){
        $order = Order::findOrFail($order_id);
        return response()->json(['indirizzo' => $order->indirizzo]);
    }
}


?>
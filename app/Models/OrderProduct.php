<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model{
    use HasFactory;

    protected $table = 'order_product';

    // Relazione "belongsTo" con il modello Order
    public function order(){
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function product(){
        return $this->belongsTo(Product::class, 'product_id');
    }
}

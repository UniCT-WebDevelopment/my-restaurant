<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model{
    protected $table = 'orders';

    public $timestamps = true;

    // Relazione molti-a-molti con il modello Product
    public function products(){
        return $this->belongsToMany(Product::class, 'order_product');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    protected $appends = ['product_prices'];

    public function getProductPricesAttribute()
    {
        return $this->products->pluck('prezzo');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model{
    protected $table = 'products';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'nome',
        'ingredienti',
        'categoria',
        'percorso_img',
        
    ];

    public function orders(){
        return $this->belongsToMany(Order::class, 'order_product');
    }

}
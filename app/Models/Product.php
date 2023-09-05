<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model{
    use SoftDeletes;
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
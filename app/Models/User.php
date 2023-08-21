<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model{
    protected $table = 'users';
    public $timestamps = false;

    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

}
    

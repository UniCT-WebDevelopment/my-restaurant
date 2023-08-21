<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model{

    public function messages(){
        return $this->hasMany(Message::class);
    }

}

    


?>
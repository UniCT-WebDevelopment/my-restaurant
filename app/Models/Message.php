<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model{

    // Disabilito i timestamp e aggiungo manualmente CREATED_AT
    const CREATED_AT = 'created_at';
    public $timestamps = false;

    protected $fillable = ['chat_id', 'user_id', 'testo', 'created_at'];
    
    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

?>
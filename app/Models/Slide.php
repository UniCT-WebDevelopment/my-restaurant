<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $table = 'slides'; // Nome della tabella nel database

    protected $fillable = ['titolo', 'testo', 'immagine']; // Campi accessibili per la creazione/modifica

}

<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Slide;
use Session;

class SettingsController extends BaseController{

    public function show(){
        return view('settings');
    }

    public function addSlide(Request $request){
        // Verifica se è stata inviata un'immagine
        if ($request->hasFile('immagine')) {
            // Ottieni l'immagine dall'input
            $image = $request->file('immagine');
    
            // Genera un nome univoco per l'immagine (ad esempio, usando l'orario corrente)
            $imageName = time() . '.' . $image->getClientOriginalExtension();
    
            // Sposta l'immagine nella directory desiderata (ad esempio, public/img/pizze)
            $image->move(public_path('img/slides'), $imageName);
    
            // Salva i dati del prodotto nel database utilizzando request('campo')
            $slide = new Slide;
            $slide->titolo = request('titolo');
            $slide->testo = request('testo');
            $slide->immagine = 'img/slides/' . $imageName; // Salva il percorso dell'immagine
            $slide->save();
            // Reindirizza l'utente alla pagina home o a un'altra pagina desiderata
        }
        return redirect('settings');
    }

    public function getSlides(){
        $slides = Slide::all(); // Recupera tutte le slide dalla tabella "slides"
        foreach ($slides as $slide) {
            $slide->full_image_url = asset($slide->immagine);
        }
        return $slides;
    }

    public function selectSlide()
    {
        // Ottieni l'id della slide dalla richiesta
        $slideId = request('id');
        
        // Trova la slide nel database
        $slide = Slide::find($slideId);

        // Verifica se la slide è stata trovata
        if (!$slide) {
            return response()->json(['message' => 'Slide non trovata'], 404);
        }

        // Imposta is_used a true
        $slide->is_used = true;
        $slide->save();

        return redirect('settings');
    }

    public function unselectSlide(){
        // Ottieni l'id della slide dalla richiesta
        $slideId = request('id');
        
        // Trova la slide nel database
        $slide = Slide::find($slideId);

        // Verifica se la slide è stata trovata
        if (!$slide) {
            return response()->json(['message' => 'Slide non trovata'], 404);
        }

        // Imposta is_used a false
        $slide->is_used = false;
        echo($slide);
        $slide->save();

        return redirect('settings');
    }
   
}

?>

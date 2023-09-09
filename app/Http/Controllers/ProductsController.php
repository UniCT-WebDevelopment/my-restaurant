<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Product;
use Session;

class ProductsController extends BaseController{

    public function prodotti(){
        if(!Session::get('user_id')){
            return [];
        }
        return view('prodotti');
    }

    public function show_products(){
        if(!Session::get('user_id')){
            return [];
        }
        $products = Product::whereIn('categoria', ['antipasti', 'pizze', 'dessert'])
                  ->orderBy('categoria')
                  ->get();
        return $products;
    }


    public function add(Request $request){
        if(strlen(request('nome')) ==0 || strlen(request('ingredienti')) ==0 ){

            Session::put('error', 'empty_fields');
            return redirect('prodotti')->withInput();
        }
        

            // Verifica se è stata inviata un'immagine
            if ($request->hasFile('img')) {
                // Ottieni l'immagine dall'input
                $image = $request->file('img');
        
                // Genera un nome univoco per l'immagine (ad esempio, usando l'orario corrente)
                $imageName = time() . '.' . $image->getClientOriginalExtension();
        
                // Sposta l'immagine nella directory desiderata (ad esempio, public/img/pizze)
                $image->move(public_path('img/pizze'), $imageName);
        
                // Salva i dati del prodotto nel database utilizzando request('campo')
                $product = new Product;
                $product->nome = request('nome');
                $product->ingredienti = request('ingredienti');
                $product->categoria = request('categoria');
                $product->prezzo = request('prezzo');
                $product->percorso_img = 'img/pizze/' . $imageName; // Salva il percorso dell'immagine
                $product->save();
                // Reindirizza l'utente alla pagina home o a un'altra pagina desiderata
                return redirect('prodotti');
            
            }
        
        }

    

    /*public function modify(){
        $product = Product::find(request('id'));
      
        $product->nome = request('nome');
        $product->ingredienti = request('ingredienti');
        $product->categoria = request('categoria');
        $product->prezzo = request('prezzo');
        $product->percorso_img = "img/pizze/".request('nome').".png";
    
        $product->save();
        return redirect('home');
    }*/

    public function modify(){
        return view('modifica')->with('id', request('id'));
    }

    public function modifyProduct($productId){
        $product = Product::find($productId);
        if (!$product) {
            return response()->json(['error' => 'product not found'], 404);
        }
        return response()->json($product);
    }

    public function saveChange(Request $request, $productId){
        // Trova il prodotto da aggiornare
        $product = Product::find($productId);
        if (!$product) {
            return response()->json(['error' => 'Prodotto non trovato'], 404);
        }
        // Verifica se è stata inviata una nuova immagine
        if ($request->hasFile('immagine')) {
            // Elimina l'immagine esistente solo se è stata inviata una nuova immagine
            $oldImagePath = public_path($product->percorso_img);
            if (File::exists($oldImagePath)) {
                File::delete($oldImagePath);
            }
            // Ottieni la nuova immagine
            $newImage = $request->file('immagine');
            
            // Genera un nuovo nome univoco
            $imageName = time() . '.' . $newImage->getClientOriginalExtension();
    
            // Sposta la nuova immagine nella directory "img/pizze"
            $newImage->move(public_path('img/pizze'), $imageName);
    
            // Aggiorna il percorso dell'immagine nel database
            $product->percorso_img = 'img/pizze/' . $imageName;
        }
    
        // Aggiorna gli altri campi del prodotto
        $product->nome = request('nome');
        $product->ingredienti = request('ingredienti');
        $product->categoria = request('categoria');
        $product->prezzo = request('prezzo');
    
        // Salva le modifiche nel database
        $product->save();
    
        // Reindirizza l'utente alla pagina home o a un'altra pagina desiderata
        return redirect('prodotti');
    }
    
    

    public function delete(){
        $product = Product::find(request('id'));
    
        if ($product) {
            $product->delete();
        }
    
        return redirect('prodotti');
    }
   
}

?>

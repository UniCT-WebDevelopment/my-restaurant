<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use App\Models\Chat;
use App\Models\Message;
use Session;

class ChatController extends BaseController{

    public function show(){
        if(!Session::get('user_id')){
            return redirect('login');
        } if(Session::get('user_tipo') != 'administrator'){
            Session::flush();
            return redirect('login');
        }
        return view('chat');
    }

    public function user_chat(){
        if(!Session::get('user_id')){
            return redirect('login');
        }
        return view('user_chat');
    }

    public function send_message(){
        $userId = Session::get('user_id');
        $messageText = request('message');
    
        // Cerco il messaggio dell'utente in sessione
        $userMessage = Message::where('user_id', $userId)->first();
    
        // Chat corrispondente al messaggio
        $chat = null;
        if ($userMessage) {
            $chat = Chat::find($userMessage->chat_id);
        }
    
        // Se non esiste una chat, crea una nuova chat
        if (!$chat) {
            $chat = new Chat();
            $chat->save();
        }
    
        // Creo un nuovo messaggio
        $message = new Message();
        $message->chat_id = $chat->id;
        $message->user_id = $userId;
        $message->testo = $messageText;
        $message->save();

        // Aggiorno il campo updated_at della chat
        $chat->touch();
    
        return redirect()->back();
    }

    public function getUserChatMessages(){
        $userId = Session::get('user_id');

        // Cerco il messaggio dell'utente in sessione
        $userMessage = Message::where('user_id', $userId)->first();
    
        // Chat corrispondente al messaggio
        $chat = null;
        if ($userMessage) {
            $chat = Chat::find($userMessage->chat_id);
        }

        if (!$chat) {
            return response()->json(['error' => 'Chat not found'], 404);
        }

        // Cerco tutti i messaggi di quella chat ordinati per created_at
        $messages = Message::where('chat_id', $chat->id)->orderBy('created_at')->get();
        return $messages;
    }



    public function getChatsWithLastMessage(){
        $subquery = DB::table('messages')
            ->select('chat_id', DB::raw('MAX(created_at) as max_created_at'))
            ->where('user_id', '<>', 1)
            ->groupBy('chat_id');
    
        $chats = Chat::select(
            'chats.id',
            'chats.created_at',
            'chats.updated_at',
            DB::raw('(SELECT testo FROM messages WHERE chat_id = chats.id ORDER BY created_at DESC LIMIT 1) as last_message'),
            DB::raw('(SELECT user_id FROM messages WHERE chat_id = chats.id AND user_id <> 1 ORDER BY created_at DESC LIMIT 1) as user_id'),
            DB::raw('(SELECT nome FROM users WHERE id = (SELECT user_id FROM messages WHERE chat_id = chats.id AND user_id <> 1 ORDER BY created_at DESC LIMIT 1)) as user_nome'),
            DB::raw('(SELECT cognome FROM users WHERE id = (SELECT user_id FROM messages WHERE chat_id = chats.id AND user_id <> 1 ORDER BY created_at DESC LIMIT 1)) as user_cognome')
        )
        ->orderBy('chats.updated_at', 'desc')
        ->get();
        
        return $chats;
    }
    
    

    public function getMessages($chatId) {
        //Passo l'id della chat come parametro
        $chat = Chat::find($chatId);
    
        if (!$chat) {
            return response()->json(['error' => 'Chat not found'], 404);
        }
        $messages = Message::where('chat_id', $chat->id)->orderBy('created_at')->get();
        return $messages;
    }

    public function sendAdminMessage(){
        $userId = request('user_id');
        $messageText = request('message');
        $userMessage = Message::where('user_id', $userId)->first();

        $chat = null;
        if ($userMessage) {
            $chat = Chat::find($userMessage->chat_id);
        }
    
        // Se non esiste una chat, crea una nuova chat
        if (!$chat) {
            $chat = new Chat();
            $chat->save();
        }
    
        // Nuovo messaggio
        $message = new Message();
        $message->chat_id = $chat->id;
        $message->user_id = Session::get('user_id');
        $message->testo = $messageText;
        $message->save();

        // Aggiorna il campo updated_at della chat
        $chat->touch();
    
        return redirect()->back();
    }
    

    

}



?>
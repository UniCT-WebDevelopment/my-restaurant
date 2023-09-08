<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Hello World from laravel';
});

Route::get('register', 'App\Http\Controllers\LoginController@register_form');
Route::post('register', 'App\Http\Controllers\LoginController@do_register');

Route::get('login', 'App\Http\Controllers\LoginController@login_form');
Route::post('login', 'App\Http\Controllers\LoginController@do_login');
Route::get('logout', 'App\Http\Controllers\LoginController@logout');

Route::get('home', 'App\Http\Controllers\ProductsController@home');
Route::get('products', 'App\Http\Controllers\ProductsController@show_products');
Route::post('home', 'App\Http\Controllers\ProductsController@add');
//Route::post('update', 'App\Http\Controllers\ProductsController@modify');
Route::post('delete', 'App\Http\Controllers\ProductsController@delete');
Route::post('home/modifica', 'App\Http\Controllers\ProductsController@modify');
Route::get('home/modifica/{productId}', 'App\Http\Controllers\ProductsController@modifyProduct');


Route::get('menu', 'App\Http\Controllers\MenuController@menu');
Route::get('menu/show/pizze', 'App\Http\Controllers\MenuController@show_pizze');
Route::get('menu/show/antipasti', 'App\Http\Controllers\MenuController@show_antipasti');
Route::get('menu/show/dessert', 'App\Http\Controllers\MenuController@show_dessert');

Route::post('menu/carrello', 'App\Http\Controllers\MenuController@add');
Route::get('menu/carrello', 'App\Http\Controllers\CartController@show');
Route::get('menu/carrello/products', 'App\Http\Controllers\CartController@products');
Route::post('menu/carrello/save', 'App\Http\Controllers\CartController@save');

Route::get('ordini', 'App\Http\Controllers\OrderController@show');
Route::get('ordini/products', 'App\Http\Controllers\OrderController@products');

Route::get('orders', 'App\Http\Controllers\OrderController@show_orders');
Route::get('orders/products', 'App\Http\Controllers\OrderController@allOrders');
Route::post('orders/changeState', 'App\Http\Controllers\OrderController@changeState');

Route::get('chat', 'App\Http\Controllers\ChatController@show');
Route::get('chat/getChat', 'App\Http\Controllers\ChatController@getChatsWithLastMessage');
Route::get('chat/{chatId}', 'App\Http\Controllers\ChatController@getMessages');
Route::post('chat/send', 'App\Http\Controllers\ChatController@sendAdminMessage');


Route::get('user_chat', 'App\Http\Controllers\ChatController@user_chat');
Route::post('user_chat/send', 'App\Http\Controllers\ChatController@send_message');
Route::get('user_chat/show', 'App\Http\Controllers\ChatController@getUserChatMessages');

Route::get('consegne', 'App\Http\Controllers\DeliveryController@show');

Route::get('consegne/ordini', 'App\Http\Controllers\DeliveryController@getDeliveryOrders');
Route::post('consegne/changeState', 'App\Http\Controllers\DeliveryController@changeState');
Route::get('consegne/openModal/{order_id}', 'App\Http\Controllers\DeliveryController@openModal');





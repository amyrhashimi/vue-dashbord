<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::get('/test', function (){
    return view('test');
});

Route::get('/{any}', function () {
    return view('admin');
})->where('any', '.*');

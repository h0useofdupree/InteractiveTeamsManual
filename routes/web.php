<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// Array ( will be JSON Response )
/* Route::get('/users', function () {
    return ['PHP', 'HTML', 'LARAVEL'];
}); */

// JSON Object
/* Route::get('/users', function () {
    return response()->json([
        'name' => 'Joel',
        'gender' => 'Male'
    ]);
}); */

// Redirect user
/* Route::get('/users', function () {
    return redirect('/');
}); */

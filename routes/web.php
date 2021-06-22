<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

// Include Controllers
use App\Http\Controllers\ManualController;


//Route::get('/about', [ManualController::class, 'about']);

/* Route::get(
    '/manuals',
    [ManualController::class, 'index']
)->name('manuals'); */

// Static Route to Index Page
Route::get('/', [ManualController::class, 'index']);

// Static Route to about page
Route::get('/about', [ManualController::class, 'about']);

//Static Route to bot
Route::get('/bot', [ManualController::class, 'bot']);



// Parameter Routing

// Route to manuals
Route::get(
    '/manuals/{name}',
    [ManualController::class, 'show']
)->where([
    // String RegEx Pattern
    'name' => '[a-zA-Z]+'
]); 















// Pattern is Int
/* Route::get(
    '/manuals/{id}',
    [ManualController::class, 'show']
)->where('id', '[0-9]+'); */


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

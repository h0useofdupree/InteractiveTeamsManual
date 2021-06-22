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

Route::get('/', [ManualController::class, 'index']);
Route::get('/about', [ManualController::class, 'about']);
Route::get('/bot', [ManualController::class, 'bot']);



// Parameter Routing

// Pattern is Int
/* Route::get(
    '/manuals/{id}',
    [ManualController::class, 'show']
)->where('id', '[0-9]+'); */

// Pattern is String
Route::get(
    '/manuals/{name}',
    [ManualController::class, 'show']
)->where([
    'name' => '[a-zA-Z]+'
]); 


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

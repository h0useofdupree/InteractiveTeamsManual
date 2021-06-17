<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

// Include Controllers
use App\Http\Controllers\ManualController;


Route::get('/manuals', [ManualController::class, 'index']);
Route::get('/about', [ManualController::class, 'about']);

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

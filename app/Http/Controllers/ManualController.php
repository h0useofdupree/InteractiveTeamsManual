<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManualController extends Controller
{
    public function index()
    {
        return view('main.index');
    }
    public function about()
    {
        return view('info.about');
    }
}

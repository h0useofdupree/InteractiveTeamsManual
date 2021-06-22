<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManualController extends Controller
{
    public function index()
    {
        // TODO: #3 Parse JSON File to View in PlainText Format
        return view('main.index');
    }
    public function about()
    {
        return view('other.about');
    }

    public function show($name)
    {
        return view('other' . '.' . $name);
    }
    public function bot()
    {
        return view('other.bot.index');
    }
}


// INFO

// Passing vars to view with "with"
//return view('main.index')->with('data', $data);

// Passing vars to view with "compact"
//return view('main.index', compact('title'));

// Passing vars directly into view
/* return view('main.index', [
    'data' => $data
]); */

// Print route
/* print_r(route('manuals'));
*/

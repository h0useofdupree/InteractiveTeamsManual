<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManualController extends Controller
{
    public function index()
    {
        $data = "Test";
        // Passing vars to view with "with"
        //return view('main.index')->with('data', $data);

        // Passing vars to view with "compact"
        //return view('main.index', compact('title'));

        // Passing vars directly into view
        /* return view('main.index', [
            'data' => $data
        ]); */

        /* print_r(route('manuals'));
        return view('main.index'); */

        return view('main.index');
    }
    public function about()
    {
        return view('info.about');
    }

    public function show($id, $name)
    {
        $data = [
            '0' => 'Installation',
            '1' => 'Tabs',
            'pers1' => 'persTabs'
        ];

        return view('main.index', [
            'articles' => $data[$id] ?? 'Article ' . $name . " " . $id . ' does not exist'
        ]);
    }
}

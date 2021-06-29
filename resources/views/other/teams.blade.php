@extends('layouts.app')
@section('content')
    <div class="site">
        <div class="Title">
            <h1 class="Überschrift" id="header"></h1>
        </div>

        <div class="texts">
            <p id="text"></p>
        </div>

        <div class="Picture">
            <img src="" alt="">
        </div>
        <div class="pages">
            <p id="page"></p>
        </div>
    </div>
    <div class="buttons">
        <button onclick="nextArticle()">Next</button>
        <button onclick="prevArticle()">Previous</button>
    </div>
@endsection

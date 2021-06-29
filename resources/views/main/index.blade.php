@extends('layouts.app')
@section('content')
    <div class="logo">
        <div class="img">
            <img src="{{ asset('data/bot-new-logo.svg') }}">
        </div>
    </div>
    <div class="headings">
        <h3 class="head-move">Installation</h3>
        <h3 class="head-move">Tabs</h3>
        <h3 class="head-move">ChatBot</h3>
    </div>
    <div class="wide-links links">
        <a class="no-flickr" href="/manuals/install" id="installation"></a>
        <a class="no-flickr" href="/manuals/tabs" id="tabs"></a>
        <a class="no-flickr" href="/bot" id="chatbot"></a>
    </div>
    <div class="narrow-links links">
        <a href="/manuals/install" id="installation">Installation</a>
        <a href="/manuals/tabs" id="tabs">Tabs</a>
        <a href="/bot" id="chatbot"></a>
    </div>
@endsection

@extends('layouts.app')
@section('content')
    <div class="logo">
        <div class="titleText">
            <h1>Interactive Teams Manual</h1>
        </div>
        <div class="img">
            <img src="{{ asset('data/bot-new-logo.svg') }}">
        </div>
    </div>
    <div class="headings">
        <h3>Installation</h3>
        <h3>Tabs</h3>
        <h3>ChatBot</h3>
    </div>
    <div class="wide-links links">
        <a href="/manuals/install" id="installation"></a>
        <a href="/manuals/tabs" id="tabs"></a>
        <a href="/bot" id="chatbot"></a>
    </div>
    <div class="narrow-links links">
        <a href="/manuals/install" id="installation">Installation</a>
        <a href="/manuals/tabs" id="tabs">Tabs</a>
        <a href="/bot" id="chatbot"></a>
    </div>
@endsection

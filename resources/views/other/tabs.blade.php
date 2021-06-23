@extends('layouts.app')
@section('content')
    <link rel="stylesheet" href="../css/home_css/home.css">
    <div class="links">
        <a href="manuals/activity">Aktivität</a>
        <a href="bot">Chat</a>
        <a href="manuals/teams">Teams</a>
        <a href="manuals/assignments">Aufgaben</a>
        <a href="manuals/calendar">Kalender</a>
        <a href="manuals/calls">Anrufe</a>
        <a href="manuals/files">Datein</a>
        <a href="manuals/apps">Apps</a>
    </div>
    <div class="articles">
        @php
            $data = file_get_contents('json/articles.json');
            $arr = json_decode($data, true);
        @endphp
        <!-- TODO: Karten für Tabs erstellen und ähnlich wie unten benennen -->
        <input type="text" name="ID" id="ID" value="{{ $arr['article']['0']['ID'] }}"><br>
    </div>
@endsection

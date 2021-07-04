@extends('layouts.app')
@section('content')
    <div class="body">
        <div class="title">
            <h1>Über dieses Projekt</h1>
        </div>
        <div class="content">
            <h3>
                Interactive Teams Manual ist unsere Lösung, für alle Fragen und Probleme bezüglich Microsoft Teams
            </h3><br><br>
            <p class="par">
                ITM ist ein web-basiertes, interaktives Teams Manual, um allen Schülern und Lehrern, die mit dem
                Programm Probleme haben, auf die Sprünge zu helfen. <br>
                Die Website basiert auf einem PHP Laravel 8 Backend. <br>
                Das Frontend wurde mit VanillaJS und ein wenig JQuery geschrieben. <br>
                Die einzelnen Anleitungen werden dynamisch aus einer JSON Datei ausgegeben. <br>
                Ein Umstieg auf VueJS für die dynamische Ausgabe der einzelnen Anleitungen ist geplant. <br>

                DISCLAIMER: Dieses Projekt kratzt nur an der Oberfläche von dem, was Laravel zu bieten hat. Die meisten
                Dateien sind Client-Side vorhanden und werden nicht versteckt.
            </p><br><br>
            <p class="creators">
                Dieses Projekt wurde von Pascal Moritz, Joel Riekemann, Emre Il Can und Christoph Reimann entwickelt.
            </p>
        </div>
    </div>
@endsection

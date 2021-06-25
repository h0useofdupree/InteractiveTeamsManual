<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- App Meta --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <meta charset="utf-8">
    <title></title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap" rel="stylesheet">

    {{-- ChatBot Meta --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        @include('layouts.header')
    </header>

    @yield('content')
    <div class="popUp" id="popUp">
        <div class="formContainer">
            <div id="container"></div>

            <div id="controls">
                <button id="options_button" title="Optionen" onclick="options_click()">≡</button>
                <textarea id="textbox" placeholder="Stelle deine Frage hier..."></textarea>
                <button id="send">➤</button>
                <div id="options_menu">
                    <button id="options_tts" title="Aktiviere bzw. Deaktiviere Text-to-Speech"
                        onclick="options_tts_click()">TTS
                        aktivieren
                    </button>
                    <button id="options_link"
                        title="Nutze die Darstellung von Text oder lass dir vom Bot einen Link für dein Problem geben"
                        onclick="options_link_click()">Linkdarstellung aktivieren
                    </button>
                    <button class="btn" onclick="closeForm()">schließen</button>
                    <br><br><input id="options_volume" title="Lautstärke von TTS (7)" type="range" name="auswertung"
                        min="1" max="12" value="7" onchange="tts_changeVolume(this.value)">
                </div>
                <br><br><br>
            </div>
            <button class="openButton" id="openButton" onclick="openForm()">ChatBot</button>
        </div>
    </div>

    <footer>
        @include('layouts.footer')
    </footer>

</body>

</html>

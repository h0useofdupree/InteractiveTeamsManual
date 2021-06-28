@extends('layouts.app')
@section('content')
    <div id="container"></div>
    <div id="controls">
        <button id="options_button" title="Optionen" onclick="optionsClick()">≡</button>
        <textarea rows="1" maxlength="40" id="textbox" placeholder="Stelle deine Frage hier..."></textarea>
        <div id="vertical_line_01"></div>
        <button id="input_speech" title="Spracherkennung (Funktioniert nicht in jedem Browser)"
            onclick="speech_click()">🎙️</button>
        <button id="emoji" title="Emojis" onclick="emojiClick()">😂</button>
        <div id="vertical_line_02"></div>
        <button id="send">➤</button>
        <div id="emoji_menu">
            <button id="sel_emoji" onclick="emojiSelect(this.textContent)">😊</button>
            <button id="sel_emoji" onclick="emojiSelect(this.textContent)">😕</button>
            <button id="sel_emoji" onclick="emojiSelect(this.textContent)">😂</button>
            <button id="sel_emoji" onclick="emojiSelect(this.textContent)">😇</button>
            <button id="sel_emoji" onclick="emojiSelect(this.textContent)">😎</button>
        </div>
        <div id="options_menu">
            <button id="options_tts" title="Aktiviere bzw. Deaktiviere Text-to-Speech" onclick="options_tts_click()">TTS
                aktivieren</button>
            <button id="options_link"
                title="Nutze die Darstellung von Text oder lass dir vom Bot einen Link für dein Problem geben"
                onclick="options_link_click()">Linkdarstellung aktivieren</button>
            <br><br><input id="options_volume" title="Lautstärke von TTS (7)" type="range" name="auswertung" min="1"
                max="12" value="7" onchange="tts_changeVolume(this.value)">
        </div>
        <br><br><br>
    </div>

@endsection

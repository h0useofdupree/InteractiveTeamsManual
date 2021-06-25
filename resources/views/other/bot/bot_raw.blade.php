<div id="container"></div>

<div id="controls">
    <button id="options_button" title="Optionen" onclick="options_click()">≡</button>
    <textarea id="textbox" placeholder="Stelle deine Frage hier..."></textarea>
    <button id="send">➤</button>
    <div id="options_menu">
        <button id="options_tts" title="Aktiviere bzw. Deaktiviere Text-to-Speech" onclick="options_tts_click()">TTS
            aktivieren
        </button>
        <button id="options_link"
            title="Nutze die Darstellung von Text oder lass dir vom Bot einen Link für dein Problem geben"
            onclick="options_link_click()">Linkdarstellung aktivieren
        </button>
        <button class="btn" onclick="closeForm()">schließen</button>
        <br><br><input id="options_volume" title="Lautstärke von TTS (7)" type="range" name="auswertung" min="1"
            max="12" value="7" onchange="tts_changeVolume(this.value)">
    </div>
    <br><br><br>
</div>

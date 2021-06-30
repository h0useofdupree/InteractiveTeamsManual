<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">  
  <meta name="description">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="chatbot.js"></script>
  <link rel="stylesheet" href="bot.css" /></link> 
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
  <title> ITM Bot </title>
 
</head>

<body>

  <div id="container"></div>
  <div id="controls">
    <button id="options_button" title="Optionen">≡</button>
    <textarea rows="1" maxLength="60" id="textbox" placeholder="Stelle deine Frage hier..."></textarea>
    <div id="vertical_line_01"></div>
    <button id="input_speech" title="Spracherkennung (Funktioniert nicht in jedem Browser)">🎙️</button>
    <button id="emoji" title="Emojis">😂</button>
    <div id="vertical_line_02"></div>
    <button id="send">➤</button>
    <div id="emoji_menu">
    <button id="sel_emoji" onclick="emoji_click(this.textContent)">😊</button>
    <button id="sel_emoji" onclick="emoji_click(this.textContent)">😕</button>
    <button id="sel_emoji" onclick="emoji_click(this.textContent)">😂</button>
    <button id="sel_emoji" onclick="emoji_click(this.textContent)">😇</button>
    <button id="sel_emoji" onclick="emoji_click(this.textContent)">😎</button>
    </div>
    <div id="options_menu">
      <button id="options_tts" title="Aktiviere bzw. Deaktiviere Text-to-Speech">TTS aktivieren</button>
      <button id="options_link" title="Nutze die Darstellung von Text oder lass dir vom Bot einen Link für dein Problem geben">Linkdarstellung aktivieren</button>
      <!-- <button id="options_link" title="Nutze die Darstellung von Text oder lass dir vom Bot einen Link für dein Problem geben">✸</button> -->
      <br><br><input id="options_volume" title="Lautstärke von TTS (7)" type="range" name="auswertung" min="1" max="12" value="7">
    </div>
    <br><br><br>
  </div>




</body>

</html>
           
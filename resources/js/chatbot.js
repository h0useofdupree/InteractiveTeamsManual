{var audio;}
{var ttsvar = false;}
{var linkvar = false;}
{var writingelement = "";}
{var utter = new SpeechSynthesisUtterance();}
{var hindi = false;}
{var hindi_ee_delay = 1000;}
{var namebot = "Jenny";}
{var b = "";}
{var botwrited = true;}

var speechElement = new webkitSpeechRecognition();
speechElement.lang = 'de-DE';
speechElement.interimResults = true;
speechElement.continuous = true;
var final_transcript = '';


speechElement.onstart = function() {
}

speechElement.onresult = function(event) {
	for(var i = event.resultIndex; i < event.results.length; ++i) {
		if(event.results[i].isFinal) {
			final_transcript += event.results[i][0].transcript;
		}
	}
	document.getElementById('textbox').value += final_transcript;
}

speechElement.onspeechend = function() {
  //
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function optionsClick(){
  if(document.getElementById('options_menu').style.display == 'none'){
      document.getElementById('emoji_menu').style.display = 'none';
      document.getElementById('options_menu').style.display = 'inline';
      document.getElementById('options_button').style.color = '#6a040f';
      document.getElementById('controls').style.borderRadius = '0px 0px 0px 0px';
  }else{
      document.getElementById('options_menu').style.display = 'none';
      document.getElementById('options_button').style.color = 'black';
      document.getElementById('controls').style.borderRadius = '0px 0px 12px 12px';
  }

}

function emojiClick(){
  if(document.getElementById('emoji_menu').style.display == 'none'){
      document.getElementById('options_menu').style.display = 'none';
      document.getElementById('emoji_menu').style.display = 'inline';
      document.getElementById('emoji').style.color = '#6a040f';
      document.getElementById('controls').style.borderRadius = '0px 0px 0px 12px';
      document.getElementById('emoji').textContent = "😄";
  }else{
      document.getElementById('emoji_menu').style.display = 'none';
      document.getElementById('emoji').style.color = 'black';
      document.getElementById('controls').style.borderRadius = '0px 0px 12px 12px';
      document.getElementById('emoji').textContent = "😂";
  }

}

function emojiSelect(emoji){
  document.getElementById('textbox').value += emoji;

}


function options_tts_click(){
  if(document.getElementById("options_tts").textContent == 'TTS aktivieren'){
    document.getElementById("options_tts").textContent = 'TTS deaktivieren';
    document.getElementById("options_tts").style.background = 'lightgrey';
    document.getElementById("options_volume").style.display = "inline";
    hindi_ee_delay = 3600;
    utter.volume = 0.7;
    ttsvar = true;
  }else{
    document.getElementById("options_tts").textContent = 'TTS aktivieren';
    document.getElementById("options_tts").style.background = 'white';
    document.getElementById("options_volume").style.display = "none";
    hindi_ee_delay = 1000;
    if(speechSynthesis.speaking){
      window.speechSynthesis.cancel();
    }
    ttsvar = false;
  }

}

function options_link_click(){
  if(document.getElementById("options_link").textContent == 'Linkdarstellung aktivieren'){
    
    document.getElementById("options_link").textContent = 'Linkdarstellung deaktivieren';
    document.getElementById("options_link").style.background = 'lightgrey';
    linkvar = true;
  }else{
    document.getElementById("options_link").textContent = 'Linkdarstellung aktivieren';
    document.getElementById("options_link").style.background = 'white';
    linkvar = false;

  }
}

function speech_click(){
  if(document.getElementById("input_speech").textContent == '🎙️'){
    navigator.permissions.query(
      { name: 'microphone' }
    ).then(function(permissionStatus){
      if(permissionStatus.state == "granted"){
        document.getElementById("input_speech").textContent = '🔴';
        console.log("Speechrecognition wurde gestartet...");
        speechElement.start();
      }else{
        send_message('<a style="color:darkred">Spracherkennung konnte nicht initialisiert werden, weil kein Mikrofon erkannt wurde.</a>');
      }
  
     })
  }else{
    document.getElementById("input_speech").textContent = '🎙️';
    speechElement.stop();
    interim_transcript = "";
    final_transcript = "";
    console.log("Speechrecognition wurde gestoppt...");
  }
}
function tts (message){

  if(hindi == true){
  utter.lang = 'hi-IN';
  }else{
  utter.lang = 'de-DE';
  }
  utter.text = message;
  utter.rate = 1.1;
  window.speechSynthesis.speak(utter);
}

function tts_changeVolume (wert){

  document.getElementById("options_volume").title = "Lautstärke von TTS (" + wert + ")";

  if(speechSynthesis.speaking){
    window.speechSynthesis.cancel();
  }
  utter.volume = (wert/10);
  window.speechSynthesis.speak(utter);
  }


function gotoBottom(id){
  var element = document.getElementById(id);
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

function datetime(){

  var date=new Date();
  day=date.getDate();
  month=date.getMonth();
  month=month+1;
  hours= date.getHours();
  minutes = date.getMinutes();

  if((String(day)).length == 1)
  day='0' + day;
  if((String(month)).length == 1)
  month='0' +  month;
  if((String(hours)).length == 1)
    hours = '0' + hours;
  if((String(minutes)).length == 1)
    minutes = '0' + minutes;

  dateT = day+ '.' + month + '.' + date.getFullYear() + ' - ' + hours + ':' + minutes;
  return dateT;

}

function send_message(message) {

  var timeout = setTimeout(function(){

    var div  = document.getElementById('container');
    div.innerHTML += '</img><div id="chatb"><div id="pimg"><object id="object" type="image/svg+xml" data="data/bot-1.svg"></object></div><a id="title">' + namebot + '</a><br><br>' + message + '<br><a id="date"><br>' +  datetime() + '</a></div><span id="space"></span>';
    gotoBottom('container');
    botwrited = true;
    }, 1200);


    $(".current_message").hide();
    $(".current_message").delay(2000*20).fadeIn();
    $(".current_message").removeClass("current_message");

    if(ttsvar == true){
      fetch("json/files.json")
      .then(response => response.json())
      .then(data => {
      
      var string = String(message);

      if(string.indexOf('<a id="links" href="' + b + '">')){
        string = string.replace('<a id="links" href="' + b + '">', "").replace('</a>', '');
      }

      fetch("json/filter.json")
      .then(response => response.json())
      .then(filter => {

        for(var o = 0; o < filter['filter'].length; o++){

            const searchRegEx = new RegExp(String(filter['filter'][o]['string']), 'g');
            const replacewith = filter['filter'][o]['re'];
            string = string.replace(searchRegEx, replacewith);

        }

        tts(string);
        
      })
      })
    }
  
}

function bot(message) {
if(message != ""){
var i = message.toUpperCase();
fetch("json/files.json")
      .then(response => response.json())
      .then(data => {

  for(var u = 0; u < data['article'].length; u++){
    for(var v = 0; v <= data['article'][u]['keywords'].length; v++){
      if(i.indexOf(data['article'][u]['keywords'][v]) >= 0){
        for(var x = 0; x < data['article'][u]['pages'].length; x++){
          if(linkvar == true){
          writingelement = 'Informationen zu deinem gewünschtem Thema findest du hier: <a id="links" href="' + data['article'][u]['link'] + '">' + data['article'][u]['header'] + '</a>';
          b = data['article'][u]['link'];
          }else{
          writingelement += "<b>" + [x+1] + ".</b> " + data['article'][u]['pages'][x]['content'] + "<br>";
          }
        }
        }
      }
    }
    fetch("json/conv.json")
    .then(response => response.json())
    .then(data => {
      var rdm = 0;
      if(writingelement == ""){
      for(var x = 0; x < data['article'].length;x++){
        for(var y = 0; y <= data['article'][x]['keywords'].length;y++){
          if(i.indexOf(data['article'][x]['keywords'][y])>= 0){
            for(var u = 0; u <= data['article'][x]['inhalt'].length;u++){
              rdm = getRandomInt(u);
            }
            writingelement = data['article'][x]['inhalt'][rdm];
          }
        }
      }
    }
    if(writingelement == ""){
      var rdm = getRandomInt(3);
      switch(rdm){
        case 0:
          writingelement = "Das wonach du suchst konnte ich leider nicht finden. Probiere es vielleicht mit anderen Schlagwörtern";
          break;   
        case 1:
          writingelement = "Das weiß ich nicht. Tut mir leid :(";
          break;
        case 2:
          writingelement = "Error: Ich habe leider nicht verstanden was du von mir möchtest!";
          break;
        }
      }

      //* Easter Eggs mit Spezialfunktionen
    
    if(i.indexOf("INDER") >= 0|| i.indexOf("INDIEN") >= 0|| i.indexOf("INDISCH") >= 0||  i.indexOf("INDIA") >= 0 && ttsvar == true){
      hindi = true;
      namebot = "Shiva";
    }

    
    send_message(writingelement);
    if(hindi == true){
      var timeout = setTimeout(function(){
      hindi = false;
      var r = getRandomInt(2);
      if(r == 0){
        namebot = "Jenny";
        send_message("Hä... was war das denn?");
      }else if(r == 1){
        namebot = "Jenny";
        send_message("Ehm. Wer war das denn jetzt... Also ich war das nicht. Du musst mir das glauben.");
      }
      
      },hindi_ee_delay);
    }
    writingelement = "";
   })
   })
  }
}

//*

$(function() {
    
 

document.onselectstart = new Function ("return false");
document.getElementById("textbox").focus(); 
send_message("Hey mein Name ist Jenny. Ich helfe dir gerne bei allen Problemen bezüglich Microsoft Teams. Was ist dein Anliegen?<br> Notiz: Ich bin nicht sehr schlau :)");




    $("#textbox").keypress(function(event) {
      if (event.which == 13) {
          event.preventDefault();
          $("#send").click();
        
      }
    });

   
    $("#send").click(function() {
    final_transcript = "";
    var user = '<b><a id="titleuser">Du</a></b><br>';
    var message = $("#textbox").val();
    $("#textbox").val("");
  if(botwrited == true){
    if(message != ""){
        var div  = document.getElementById('container');
        div.innerHTML += ('<div id="chatu"><img src="data/user-2.png" id="pimg" onmousedown="return false">' + user + message.replace(':)' , '🌝') + '<br><a id="date"><br>' +  datetime() + '</a>' +  '</div><br><br>');
        botwrited = false;
      }
    
    $("#container").scrollTop($("#container").prop("scrollHeight"));
    bot(message);
   }    
    
  });

  
});

        
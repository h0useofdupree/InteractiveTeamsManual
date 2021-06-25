/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/chatbot.js ***!
  \*********************************/
{
  var audio;
}
{
  var ttsvar = false;
}
{
  var linkvar = false;
}
{
  var writingelement = "";
}
{
  var utter = new SpeechSynthesisUtterance();
}
{
  var hindi = false;
}
{
  var hindi_ee_delay = 1000;
}
{
  var namebot = "Jenny";
}
{
  var b = "";
}

var oF = function openForm() {
  document.getElementById("formContainer").style.display = "block";
};

var cF = function closeForm() {
  document.getElementById("formContainer").style.display = "hidden";
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function options_click() {
  if (document.getElementById('options_menu').style.visibility == 'hidden') {
    document.getElementById('options_menu').style.visibility = 'visible';
    document.getElementById('options_button').style.color = '#6a040f';
    document.getElementById('controls').style.borderRadius = '0px 0px 0px 0px';
  } else {
    document.getElementById('options_menu').style.visibility = 'hidden';
    document.getElementById('options_button').style.color = 'black';
    document.getElementById('controls').style.borderRadius = '0px 0px 12px 12px';
  }
}

function options_tts_click() {
  if (document.getElementById("options_tts").textContent == 'TTS aktivieren') {
    document.getElementById("options_tts").textContent = 'TTS deaktivieren';
    document.getElementById("options_tts").style.background = 'lightgrey';
    document.getElementById("options_volume").style.display = "inline";
    hindi_ee_delay = 3600;
    utter.volume = 0.7;
    ttsvar = true;
  } else {
    document.getElementById("options_tts").textContent = 'TTS aktivieren';
    document.getElementById("options_tts").style.background = 'white';
    document.getElementById("options_volume").style.display = "none";
    hindi_ee_delay = 1000;

    if (speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    ttsvar = false;
  }
}

function options_link_click() {
  if (document.getElementById("options_link").textContent == 'Linkdarstellung aktivieren') {
    document.getElementById("options_link").textContent = 'Linkdarstellung deaktivieren';
    document.getElementById("options_link").style.background = 'lightgrey';
    linkvar = true;
  } else {
    document.getElementById("options_link").textContent = 'Linkdarstellung aktivieren';
    document.getElementById("options_link").style.background = 'white';
    linkvar = false;
  }
}

function tts(message) {
  if (hindi == true) {
    utter.lang = 'hi-IN';
  } else {
    utter.lang = 'de-DE';
  }

  utter.text = message;
  utter.rate = 1.1;
  window.speechSynthesis.speak(utter);
}

function tts_changeVolume(wert) {
  document.getElementById("options_volume").title = "Lautstärke von TTS (" + wert + ")";

  if (speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  utter.volume = wert / 10;
  window.speechSynthesis.speak(utter);
}

function gotoBottom(id) {
  var element = document.getElementById(id);
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

function datetime() {
  var date = new Date();
  day = date.getDate();
  month = date.getMonth();
  month = month + 1;
  hours = date.getHours();
  minutes = date.getMinutes();
  if (String(day).length == 1) day = '0' + day;
  if (String(month).length == 1) month = '0' + month;
  if (String(hours).length == 1) hours = '0' + hours;
  if (String(minutes).length == 1) minutes = '0' + minutes;
  dateT = day + '.' + month + '.' + date.getFullYear() + ' - ' + hours + ':' + minutes;
  return dateT;
}

function send_message(message) {
  var timeout = setTimeout(function () {
    var div = document.getElementById('container');
    div.innerHTML += '</img><div id="chatb"><img src="data/bot-1.png" id="pimg" onmousedown="return false"><a id="title">' + namebot + '</a><br><br>' + message + '<br><a id="date"><br>' + datetime() + '</a></div><span id="space"></span>';
    gotoBottom('container');
  }, 500);
  $(".current_message").hide();
  $(".current_message").delay(2000 * 20).fadeIn();
  $(".current_message").removeClass("current_message");

  if (ttsvar == true) {
    fetch("json/files.json").then(function (response) {
      return response.json();
    }).then(function (data) {
      var string = String(message);

      if (string.indexOf('<a id="links" href="' + b + '">')) {
        string = string.replace('<a id="links" href="' + b + '">', "").replace('</a>', '');
      }

      fetch("json/filter.json").then(function (response) {
        return response.json();
      }).then(function (filter) {
        for (var o = 0; o < filter['filter'].length; o++) {
          string = string.replace(filter['filter'][o]['string'] + "/g", filter['filter'][o]['re']);
          console.log(filter['filter'][o]['string'] + " - " + filter['filter'][o]['re']);
        }

        console.log(string);
        tts(string);
      });
    });
  }
}

function bot(message) {
  if (message != "") {
    var i = message.toUpperCase();
    fetch("json/files.json").then(function (response) {
      return response.json();
    }).then(function (data) {
      for (var u = 0; u < data['article'].length; u++) {
        for (var v = 0; v <= data['article'][u]['keywords'].length; v++) {
          if (i.indexOf(data['article'][u]['keywords'][v]) >= 0) {
            for (var x = 0; x < data['article'][u]['pages'].length; x++) {
              if (linkvar == true) {
                writingelement = 'Informationen zu deinem gewünschtem Thema findest du hier: <a id="links" href="' + data['article'][u]['link'] + '">' + data['article'][u]['header'] + '</a>';
                b = data['article'][u]['link'];
              } else {
                writingelement += "<b>" + [x + 1] + ".</b> " + data['article'][u]['pages'][x]['content'] + " <br>";
              }
            }
          }
        }
      }

      fetch("json/conv.json").then(function (response) {
        return response.json();
      }).then(function (data) {
        var rdm = 0;

        for (var x = 0; x < data['article'].length; x++) {
          for (var y = 0; y <= data['article'][x]['keywords'].length; y++) {
            if (i.indexOf(data['article'][x]['keywords'][y]) >= 0) {
              for (var u = 0; u <= data['article'][x]['inhalt'].length; u++) {
                rdm = getRandomInt(u);
              }

              writingelement = data['article'][x]['inhalt'][rdm];
            }
          }
        }

        if (writingelement == "") {
          var rdm = getRandomInt(3);

          switch (rdm) {
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
        } //* Easter Eggs mit Spezialfunktionen


        if (i.indexOf("HINDI") >= 0 || i.indexOf("INDER") >= 0 || i.indexOf("INDIEN") >= 0 || i.indexOf("INDISCH") >= 0 || i.indexOf("INDIA") >= 0 && ttsvar == true) {
          hindi = true;
          namebot = "Shiva";
        }

        send_message(writingelement);

        if (hindi == true) {
          var timeout = setTimeout(function () {
            hindi = false;
            var r = getRandomInt(2);

            if (r == 0) {
              namebot = "Jenny";
              send_message("Hä... was war das denn?");
            } else if (r == 1) {
              namebot = "Jenny";
              send_message("Ehm. Wer war das denn jetzt... Also ich war das nicht. Du musst mir das glauben.");
            }
          }, hindi_ee_delay);
        }

        writingelement = "";
      });
    });
  }
} //*


$(function () {
  document.onselectstart = new Function("return false");
  document.getElementById("textbox").focus();
  send_message("Hallo mein Name ist Jenny. Ich helfe dir gerne bei allen Problemen bezüglich Microsoft Teams. Was ist dein Anliegen?<br> Notiz: Ich bin nicht sehr schlau :)");
  $("#textbox").keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      $("#send").click();
    }
  });
  $("#send").click(function () {
    var user = '<b><a id="titleuser">Du</a></b><br>';
    var message = $("#textbox").val();
    $("#textbox").val("");

    if (message != "") {
      var div = document.getElementById('container');
      div.innerHTML += '<div id="chatu"><img src="data/user-1.png" id="pimg" onmousedown="return false">' + user + message + '<br><a id="date"><br>' + datetime() + '</a>' + '</div><br><br>';
    }

    $("#container").scrollTop($("#container").prop("scrollHeight"));
    bot(message);
  });
});
/******/ })()
;
/* in JavaScript metto i movimenti del quadrato */

function vai_a_destra() { /* definisco il movimento */
  $("#quadrato").removeClass("left"); /* tolgo una classe */
  $("#quadrato").addClass("right"); /* aggiungo la classe che determina la posizione finale */
}

function vai_sotto_a_destra() {
  $("#quadrato").removeClass("right");
  $("#quadrato").addClass("bottom-right");
}

function vai_sotto_a_sinistra() {
  $("#quadrato").removeClass("bottom-right");
  $("#quadrato").addClass("bottom-left");
}

function vai_a_inizio() {
  $("#quadrato").removeClass("bottom-left");
  $("#quadrato").addClass("left");
}

function quando_click() { /* devo definire che il movimento del quadrato avviene al click */
if($("#quadrato").hasClass("left")) {
    vai_a_destra()
  } else if($("#quadrato").hasClass("right")){
    vai_sotto_a_destra()
  } else if($("#quadrato").hasClass("bottom-right")) {
    vai_sotto_a_sinistra()
  } else if($("#quadrato").hasClass("bottom-left")){
    vai_a_inizio()
  }
}

$("#quadrato").on("click", quando_click);

/*
Si realizzi una pagina in cui:

1. Sia presente, al centro dello schermo, un quadrato, di colore rosso, e lato pari a ⅓ dell’altezza dello schermo
2. Cliccando all’interno del quadrato, questo ruota di 225 (180+45) gradi, in senso antiorario, con una transizione che dura mezzo secondo
3. Cliccando di nuovo all’interno del quadrato, compare (si scelga un effetto di apparizione a piacere) un altro quadrato, all’interno del primo, ma di lato pari alla metà (il quadrato più piccolo è “centrato” in quello grande)
4. Ricliccando all’interno del quadrato, i due quadrati cominciano a ruotare, quello grande in senso orario, quello piccolo interno in senso antiorario, facendo un giro al secondo
*/

function ruota_quadrato_rosso() {
  $("#quadrato").addClass("rotate");
}

function disegna_quadrato_giallo() {
  $("#quadratino").addClass("qino-on");
}

function ruota_tutto() {
  $("#quadrato").addClass("rotate-orario");
  $("#quadratino").addClass("rotate-antiorario");
}

function al_click() {
  if($("#quadratino").hasClass("qino-on"))
    ruota_tutto();
  else if($("#quadrato").hasClass("rotate"))
    disegna_quadrato_giallo();
  else
    ruota_quadrato_rosso();
}

$("#quadrato").click(al_click);

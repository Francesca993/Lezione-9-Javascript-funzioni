console.log("ciao!");
/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare
la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
  if (num1 === num2) {
    return console.log((num1 + num2) * 3);
  } else {
    return console.log(num1 + num2);
  }
}

crazySum(8, 8);

crazySum(4, 3);

function crazySum2(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

let nuovaVariabile = crazySum2(5, 7);
console.log(nuovaVariabile);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è 
 incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(numero) {
  return (numero >= 20 && numero <= 100) || numero === 400;
}

console.log(boundary(70));
console.log(boundary(120));
console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita 
 (es.: EPICODE => EDOCIPE).
*/
//ALTERNATIVA
/*function reverseString(stringa) {
  let invertita = " ";
  for (let i = stringa.length - 1; i >= 0; i--) {
    invertita = invertita + stringa[i];
  }
  return invertita;
}
console.log(reverseString("MaleMale"));*/

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}

console.log(reverseString("EPPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera 
 iniziale di ogni parola.
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  let numeriCasuali = [];
  for (let i = 0; i < n; i++) {
    let numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
    numeriCasuali.push(numeroCasuale); // Aggiungi il numero casuale all'array
  }
  return numeriCasuali;
}

console.log(giveMeRandom(5));
console.log(Math.floor(Math.random() * 21));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return console.log(l1 * l2);
}
area(10, 3);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n1) {
  let diffAssoluta = Math.abs(n1 - 19);
  if (diffAssoluta > 19) {
    return console.log(diffAssoluta * 3);
  } else {
    return console.log(diffAssoluta);
  }
}

crazyDiff(50);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita 
 comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify(stringa) {
  if (stringa.startsWhit("code")) {
    return console.log(stringa);
  } else {
    return console.log("code" + stringa);
  }
}

console.loog(codify("code"));
console.loog(codify("Epicode"));
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
  
}*/

/*function check3and7(number) {
  if (nuber >=19 && number % 3 === 0 || (number % 7 === 0))
    return true;
} else if (typeof number != "number") {
  console.log("inserisci un numeroo!")
}
else {
  return false
}*/

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Javascript è un linguaggio di programmazione che definisce il comportamento della pagina web
in Javascript i principali datatype sono le variabili, le variabili sono dei contenitori con all'interno un valore variabile.
Visualiziamo la variabile come una scatola dove all'interno andiamo a mettere i nostri giocattoli,
i giocattoli in questo caso sono i valori che noi attribuiamo alla nostra variabile.
prima dobbiamo definire una variabile dandogli un nome con il comando let o const
let nome
Successivamente diamo un valore alla nostra variabile in stringa, numeri o valori booleani 
let nome = "macchinina"
let nome = 2
i valori booleani sono due true o false e stabiliscono la veridicità del risultato o del valore
la variabile let è mutabile nel tempo, possiamo ridefinire il suo valore in un altro momento
mentre const è una costante e una volta definito il suo valore non può più essere modificato.
per verficare i nostri risultati usiamo la console del nostro broswer che troviamo ispezionando la nostra pagina web.
il comando è console.log(nome) per esempio.
possiamo utilizzare questo comando per aprire la nostra scatola e vedere cosa c'è al suo interno oppure il risultato di 
operazioni tra le variabili.*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Libanio";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 12;
let n2 = 20;
let somma12 = n1 + n2;
console.log(somma12);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
myName = "Leoncini";
console.log(myName);
const cognome = "Leoncini";
cognome = "Rossi";
console.log(cognome);
lo disattivo perchè l'errore non mi fa vedere le righe successive*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name2.toLowerCase());
console.log(name1.toLowerCase() === name2.toLowerCase());

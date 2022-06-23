/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*
BONUS 1: Crea un elemento contenitore nel DOM e aggiungendo 
(attraverso il metodo append(), appendChild() o innerHTML)
i vari elementi html con il numero o la stringa corretta da mostrare.
*/

//Recupero l'elemento block-container dal DOM
myContainerContent = document.getElementById("block-container");

//creo una variabile per stampare il contenuto in pagina
let content = "<ul>";

//creo ciclo per creare i numeri e farci validazioni e operazioni
for (let i = 1 ; i <= 100 ; i++) {
  const number = i;
  let outputNumber = number;

  if ((number % 3 === 0) && (number % 5 === 0)) {
    outputNumber = "FizzBuzz";
  }

  else if (number % 3 === 0) {
    outputNumber = "Fizz";
  }

  else if (number % 5 === 0) {
    outputNumber = "Buzz";
  }

  content += `<li>${outputNumber}</li>`;
  
}

content += `</ul>`;

myContainerContent.innerHTML = content;
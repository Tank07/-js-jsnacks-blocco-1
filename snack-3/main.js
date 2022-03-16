let arrayDieci = [];                                        

for (i=0; i<=10; i++){
    let numeri = parseInt(prompt("Inserisci un numero")); 
    arrayDieci.push(numeri);
    let somma = somma + arrayDieci[i];

    if (i=10){
        document.getElementById("esito").innerHTML = `<div>La somma di tutti i numeri inseriti è <span class="blue">"${somma}"</span> </div>`;    
    }
}
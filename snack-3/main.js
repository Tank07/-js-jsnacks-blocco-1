let somma = 0;


for (i=0; i<=10; i++){
    let numeri = parseInt(prompt("Inserisci un numero")); 
    somma += numeri;
    console.log(somma,)
}

     
    document.getElementById("esito").innerHTML = `<div>La somma di tutti i numeri inseriti è <span class="blue">"${somma}"</span> </div>`;    
     
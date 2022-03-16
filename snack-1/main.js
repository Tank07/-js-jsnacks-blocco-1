let numeroUno = prompt(`Inserisci il primo numero`)
console.log(numeroUno)

let numeroDue = prompt(`Inserisci il secondo numero`)
console.log(numeroDue)

if (numeroUno > numeroDue){
    console.log(numeroUno)
    document.getElementById("esito").innerHTML = `<div>Il primo numero inserito: <span>"${numeroUno}"</span> è il maggiore"</span> </div>`;
} else if (numeroUno < numeroDue){
    console.log(numeroDue)
    document.getElementById("esito").innerHTML = `<div>Il secondo numero inserito: <span>"${numeroDue}"</span> è il maggiore"</span> </div>`;
} else {
    document.getElementById("esito").innerHTML = `<div>Il primo numero inserito <span>"${numeroDue}"</span> ed il secondo numero inserito <span>"${numeroDue}"</span> sono uguali"</span> </div>`;
}
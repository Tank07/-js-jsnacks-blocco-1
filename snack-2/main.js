let parolaUno = prompt (`Inserisci la prima parola`);
console.log(parolaUno,parolaUno.length)

let parolaDue = prompt (`Inserisci la seconda parola`);
console.log(parolaDue, parolaDue.length)

if (parolaUno.length > parolaDue.length){
    console.log(parolaUno, parolaDue)
    document.getElementById("esito").innerHTML = `<div>La prima parola inserita: <span class="blue">"${parolaUno}"</span> è la più lunga</span> con ben ${parolaUno.length} lettere </div>`;
} else if (parolaUno.length < parolaDue.length){
    console.log(parolaDue, parolaUno)
    document.getElementById("esito").innerHTML = `<div>La seconda parola inserita: <span class="blue">"${parolaDue}"</span> è la più lunga</span> con ben ${parolaDue.length} lettere </div>`;
} else {
    document.getElementById("esito").innerHTML = `<div>La prima parola inserita <span class="blue">"${parolaUno}"</span> ed la seconda parola inserita <span class="blue">"${parolaDue}"</span> sono uguali</span> con rispettivamente con ben ${parolaUno.length} e ${parolaDue.length} lettere  lettere  </div>`;
}
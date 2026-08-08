const nbrSecret = Math.floor(Math.random() * 100) + 1;
let cpt = 0;

const elementInput = document.getElementById('champ');
const msg = document.getElementById('message');
const valSpan = document.getElementById('span');
const bouton = document.getElementById("btn");



// Logique principal du jeu
function afficherReponse() {
    let valInput = elementInput.value.trim();

    if (valInput === "") {
        alert("veuillez renseigner se champs");
        return;

    } else cpt++;

    valInput = Number(valInput);
    msg.innerHTML = "";

    if (valInput < nbrSecret) {
        msg.innerHTML = `<div id="message">${valInput} est plus petit</div>`;
        msg.classList.add('echoue');
    }
    else if (valInput > nbrSecret) {
        msg.innerHTML = `<div id="message">${valInput} est plus grand</div>`;
        msg.classList.add('echoue');
    }
    else {
        arreterChrono();

        elementInput.disabled = true;
        msg.innerHTML = `<div id="message">BRAVO 👏 ! vous avez trouvez en ${cpt} essai(s)</div>`;
        msg.innerHTML += `Temps : ${min} min : ${seconde} s => restant</div>`;
        msg.classList.add('trouve');

        bouton.disabled = true;

    }

    valSpan.innerHTML = `<span class="form-group" id="span">ESSAIS : ${cpt}</span>`;

    elementInput.value = "";
}



// Demarrage chronometre
let seconde = 0;
let min = 1;
let heure = 0;

const valChrono = document.querySelector('.chrono');
const btnRestart = document.getElementById('btn-restart');

function demarrerChrono() {
    heure = setTimeout(demarrerChrono, 1000);
    if (min === 1) {
        min = 0;
        seconde = 60;
    }
    if (seconde > 0) {
        btnRestart.disabled = true;
        seconde--;
    }

    if (seconde === 0) {
        btnRestart.disabled = false;
        elementInput.disabled = true;
        bouton.disabled = true;

        bouton.classList.add('btnForce');
        bouton.style.backgroundColor = 'red';
        bouton.style.color = 'white';

        bouton.textContent = `Temps ecoulé`;

        msg.innerHTML = `<div id="message">Echoué ✖️  en ${cpt} essai(s)</div>`;
        msg.innerHTML += `<div id="message">Temps : ${min}min : ${seconde}s => restant</div>`;
        msg.classList.add('echoue');
    }

    if (seconde < 10) {
        valChrono.style.color = 'red';
        valChrono.classList.add('btn-chrono');
        if (seconde === 0) {
            valChrono.className="";
        }
    } else {
        valChrono.style.color = 'blue';
    }

    let a = seconde < 10 ? `0` + seconde : seconde;
    let b = min < 10 ? `0` + min : min;

    valChrono.textContent = `${b} : ${a}`;
}



// Arret chronometre
function arreterChrono() {
    clearTimeout(heure);
}

demarrerChrono();



// Fonction pour recommencer le jeu
function recommencer() {
    arreterChrono();

    cpt = 0;
    valSpan.textContent = `ESSAI(S) : 0`;

    elementInput.disabled = false;
    elementInput.value = "";
    msg.textContent = "";
    msg.className = "";

    bouton.disabled = false;
    bouton.classList.remove('btnForce');
    bouton.style.backgroundColor = '';
    bouton.style.color = '';
    bouton.textContent = "VALIDER";

    min = 1;
    seconde = 0;
    valChrono.style.color = '';
    valChrono.textContent = `01 : 00`;
    valChrono.className = "";

    demarrerChrono();
}

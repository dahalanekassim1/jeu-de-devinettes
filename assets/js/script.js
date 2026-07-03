const nbrSecret = 77;

function afficherReponse() {
    const valInput = document.querySelector('#champ').value;
    const textValeur = document.querySelector('#text');

    document.querySelector('#champ').innerHTML = '';

    if (valInput === '') {
        alert('Vous devez renseigner ce champ ');
    }
    else if (valInput > nbrSecret) {
        document.getElementById('text').innerHTML = (`✖️ ECHOUÉ ! LE NOMBRE ${valInput} EST PLUS GRAND <br>`);
        textValeur.classList.add('notResponse');
    }
    else if (valInput < nbrSecret) {
        document.querySelector('#text').innerHTML = (`✖️ ECHOUÉ ! LE NOMBRE ${valInput} EST PLUS PETIT <br>`);
        textValeur.classList.add('notResponse');
    }
    else {
        document.querySelector('#text').innerHTML = (`✅ BRAVO ! VOUS AVEZ TROUVE 👏`);
        textValeur.classList.add('response');
    }
}



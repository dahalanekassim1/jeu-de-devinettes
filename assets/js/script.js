const nbrSecret = 77;

let cpt = 0;

function afficherReponse() {
    const elementInput = document.getElementById('champ');
    const msg = document.getElementById('message');
    const valSpan = document.getElementById('span');

    let valInput = elementInput.value.trim();

    if (valInput === "") {
        alert("veuillez renseigner se champs");
        return;
    }
    
    valInput = Number(valInput);
    msg.innerHTML = "";
    cpt++;
    
    if (valInput < nbrSecret) {
        msg.innerHTML = `<div id="message">${valInput} est plus petit</div>`;
        msg.classList.add('echoue');
    }
    else if (valInput > nbrSecret) {
        msg.innerHTML = `<div id="message">${valInput} est plus grand</div>`;
        msg.classList.add('echoue');
    }
    else {
        msg.innerHTML = `<div id="message">BRAVO ! vous avez trouvez</div>`;
        msg.classList.add('trouve');
    }
    
    valSpan.innerHTML = `<span class="form-group" id="span">ESSAIES : ${cpt}</span>`; 

    if (valInput === nbrSecret) {
        elementInput.disabled = true;
    }
    if (cpt === 3) {
        elementInput.disabled = true;
        msg.innerHTML = `<div id="message">Nombre de tentative terminé</div>`;
    }

    elementInput.value= "";
}



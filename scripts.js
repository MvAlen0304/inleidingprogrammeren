console.log("Het is gelukt!")

function skinChange(event) {
    console.log(event)
    const buttonId = event.target.id;
    
    document.getElementById('face').src = './img/svg/' + buttonId + '.svg';
}

function eyeChange(event) {
    const buttonId = event.target.id;

    document.getElementById('eyes').src = './img/svg/' + buttonId + '.svg';
}

function lashChange(event) {
    const buttonId = event.target.id;

    document.getElementById('lashes').src = './img/svg/' + buttonId + '.svg';
}

function eyebrowChange(event) {
    const buttonId = event.target.id;

    document.getElementById('eyebrow').src = './img/svg/' + buttonId + '.svg';
}

function mouthChange(event) {
    const buttonId = event.target.id;

    document.getElementById('mouth').src = './img/svg/' + buttonId + '.svg';
}

function hairChange(event) {
    const buttonId = event.target.id;

    if (buttonId === "brownHair") {
        document.querySelector('.hairBrown').style.display = 'block';
        document.querySelector('.hairBlond').style.display = 'none';
        document.querySelector('.hairRed').style.display = 'none';
    } else if (buttonId === "blondHair") {
        document.querySelector('.hairBlond').style.display = 'block';
        document.querySelector('.hairBrown').style.display = 'none';
        document.querySelector('.hairRed').style.display = 'none';
    } else if (buttonId === "redHair") {
        document.querySelector('.hairRed').style.display = 'block';
        document.querySelector('.hairBlond').style.display = 'none';
        document.querySelector('.hairBrown').style.display = 'none';
    }


    document.getElementById('hair').src = './img/svg/' + buttonId + '.svg';
}


document.querySelector('.faceBtns').addEventListener("click", skinChange);

document.querySelector('.eyeBtns').addEventListener("click", eyeChange)

document.querySelector('.lashBtns').addEventListener("click", lashChange)

document.querySelector('.eyebrowBtns').addEventListener("click", eyebrowChange)

document.querySelector('.mouthBtns').addEventListener("click", mouthChange)

document.querySelector('.hairBtns').addEventListener("click", hairChange)

document.querySelector('.hairColor').addEventListener("click", hairChange)


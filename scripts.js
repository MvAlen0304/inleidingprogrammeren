console.log("Het is gelukt!")

// const lightBtn = document.getElementById("lightBtn")
// const mediumLBtn = document.getElementById("mediumLBtn")
// const mediumDBtn = document.getElementById("mediumDBtn")
// const darkBtn = document.getElementById("darkBtn")

// function skinChangeLight() {
//     document.getElementById('face').src='./img/svg/faceLight.svg'
// }

// function skinChangeMediumL() {
//     document.getElementById('face').src='./img/svg/faceLightM.svg'
// }

// function skinChangeMediumD() {
//     document.getElementById('face').src='./img/svg/faceDarkM.svg'
// }

// function skinChangeDark() {
//     document.getElementById('face').src='./img/svg/faceDark.svg'
// }

function skinChange(event) {
    console.log(event)
    const buttonId = event.target.id;
    
    if (buttonId === 'faceLight') {
        document.getElementById('face').src = './img/svg/' + buttonId + '.svg';
    } else if (buttonId === 'faceLightM') {
        document.getElementById('face').src = './img/svg/faceLightM.svg';
    } else if (buttonId === 'faceDarkM') {
        document.getElementById('face').src = './img/svg/faceDarkM.svg';
    } else if (buttonId === 'faceDark') {
        document.getElementById('face').src = './img/svg/faceDark.svg';
    }
}

function eyeChange(event) {
    const buttonId = event.target.id;

    if (buttonId === 'eyesBlue') {
        document.getElementById('eyes').src = './img/svg/eyesBlue.svg';
    } else if (buttonId === 'eyesGreen') {
        document.getElementById('eyes').src = './img/svg/eyesGreen.svg';
    } else if (buttonId === 'eyesBrown') {
        document.getElementById('eyes').src = './img/svg/eyesBrown.svg';
    }
}

document.querySelector('.faceBtns').addEventListener("click", skinChange);

document.querySelector('.eyeBtns').addEventListener("click", eyeChange)


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

    document.getElementById('hair').src = './img/svg/' + buttonId + '.svg';
}

document.querySelector('.faceBtns').addEventListener("click", skinChange);

document.querySelector('.eyeBtns').addEventListener("click", eyeChange)

document.querySelector('.lashBtns').addEventListener("click", lashChange)

document.querySelector('.eyebrowBtns').addEventListener("click", eyebrowChange)

document.querySelector('.mouthBtns').addEventListener("click", mouthChange)

document.querySelector('.hairBtns').addEventListener("click", hairChange)

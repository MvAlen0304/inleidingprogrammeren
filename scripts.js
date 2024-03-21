console.log("Het is gelukt!")

const lightBtn = document.getElementById("lightBtn")
const mediumLBtn = document.getElementById("mediumLBtn")
const mediumDBtn = document.getElementById("mediumDBtn")
const darkBtn = document.getElementById("darkBtn")

function skinChangeLight() {
    document.getElementById('face').src='./img/svg/faceLight.svg'
}

function skinChangeMediumL() {
    document.getElementById('face').src='./img/svg/faceLightM.svg'
}

function skinChangeMediumD() {
    document.getElementById('face').src='./img/svg/faceDarkM.svg'
}

function skinChangeDark() {
    document.getElementById('face').src='./img/svg/faceDark.svg'
}

lightBtn.addEventListener("click", skinChangeLight)
mediumLBtn.addEventListener("click", skinChangeMediumL)
mediumDBtn.addEventListener("click", skinChangeMediumD)
darkBtn.addEventListener("click", skinChangeDark)
console.log("Het is gelukt!")

const faceBtn = document.getElementById(faceBtn)

function skinChange() {
    document.getElementById('face').src='./img/svg/faceDark.svg'
}

faceBtn.addEventListener("click", skinChange)
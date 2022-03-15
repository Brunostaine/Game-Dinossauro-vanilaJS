const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let sePulando = false

function dandleKeyUp (event) {
    if(event.keyCode === 32){
        if(!sePulando){
            pular()
        }
    }
}

function pular () {
    let position = 0

    sePulando = true

    let upInterval = setInterval (() => {
        if (position >= 150) {
            clearInterval(upInterval)

    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval)
            sePulando = false
        } else {
            position -= 20
            dino.style.bottom = position + 'px'
        }
    }, 20 )        
        }else {
            position += 20
            dino.style.bottom = position + 'px'
        }
    }, 20 )
}

//

function criaCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)
}

criaCactus()

document.addEventListener('keyup', dandleKeyUp)
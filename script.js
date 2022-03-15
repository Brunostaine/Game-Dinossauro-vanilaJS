const dino = document.querySelector('.dino')

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

document.addEventListener('keyup', dandleKeyUp)
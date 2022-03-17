const background = document.querySelector('#background')
const dino = document.querySelector('#dino')

function iniciar() {    
    criaCactus() 
    criarTela()       
}

function criarTela() {
    dino.classList.add('dino'),
    background.classList.add('background')
}

meuButton = document.querySelector('.botaoJogar')
meuButton.onclick = function (){
        iniciar()    
}

// -----------------------------------------------------------------------------------------------

let sePulando = false
let position = 0

function dandleKeyUp (event) {
    if(event.keyCode === 32 || event.keyCode === 38){
        if(!sePulando){
            pular()
        }
    }
}

function pular () {

    sePulando = true

    let upInterval = setInterval (() => {
        if (position >= 200) {
            clearInterval(upInterval)

    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval)
            sePulando = false
        } else {
            position -= 20
            dino.style.bottom = position + 'px'
        }
    }, 18 )        
        }else {
            position += 20
            dino.style.bottom = position + 'px'
        }
    }, 18 )
}

// //

function criaCactus() {
                   
                const cactus = document.createElement('div')
                let cactusPosition = 1000
                let randomTime = Math.random() + 8000
            

                cactus.classList.add('cactus')
                cactus.style.left = 1000 + 'px'
                background.appendChild(cactus)

                let leftInterval = setInterval (() => {
                if (cactusPosition <= -55) {
                    clearInterval(leftInterval)
                    background.removeChild(cactus)
                } else if (cactusPosition > 0 && cactusPosition < 55 && position < 55){
                    clearInterval(leftInterval)
                    
                    document.body.innerHTML = '<h1 class="game-over"> Game Over </h1> <buttom class="reiniciar"> Reiniciar</buttom>'  
                    reiniciar = document.body.querySelector('.reiniciar')
                    reiniciar.onclick = function (){
                        reiniciarJogo()    
                    }
                } {
                    cactusPosition -= 10
                    cactus.style.left = cactusPosition + 'px'
                } 
            }, 20 )
                setTimeout(criaCactus, randomTime)          
            }

            function reiniciarJogo() {
                location.reload()
            }
document.addEventListener('keyup', dandleKeyUp)
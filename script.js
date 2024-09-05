const buttonTry = document.querySelector('#button-try')
const buttonAgain = document.querySelector('#button-again')
const inputValue = document.querySelector('#input-number')
const amountTimes = document.querySelector('#limit')
const screen1 = document.querySelector('#screen1')
const screen2 = document.querySelector('#screen2')
const error = document.querySelector('#error')

let generateRandomValue = () => Math.round(Math.random() * amountTimes.value)
let randomValue = generateRandomValue()
let errorCounter = 0

amountTimes.addEventListener('input',()=>{
    randomValue = generateRandomValue()
})

const checkValue = (event) => {
    event.preventDefault()
    if (inputValue.value == randomValue) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        document.querySelector('h2').innerHTML = `Got it right on the ${errorCounter + 1}rd try!`
        errorCounter = 0;
    }
    errorCounter++
    error.style.color = 'rgb(178, 53, 53)'
    error.innerHTML = `You made a mistake! Try again (${errorCounter})`

    inputValue.value = ''

}

const backHome = (event) => {
    event.preventDefault()

    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    error.innerHTML = ''
    error.style.color = 'rgb(106, 106, 106)'
    errorCounter = 0
    amountTimes.value = 5
    randomValue = generateRandomValue()
}

buttonTry.addEventListener('click', checkValue)
buttonAgain.addEventListener('click', backHome)

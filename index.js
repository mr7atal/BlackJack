let hasBlackJack = false
let isAlive = true
let message = ""
let sum = 0

let FE_Sum = document.getElementById("El-sum")
let FE_Message = document.getElementById("El-message")  
let FE_Cards = document.getElementById("El-cards")


function Start(){
    let localCard = Math.floor(Math.random() * (11-2 +1)) + 2

    sum += localCard
    FE_Cards.innerText += localCard + " , "
    FE_Sum.innerText = "sum : " + sum

    if (sum < 21){
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
    FE_Message.innerText = message
}

function reset(){
    sum = 0
    isAlive = true
    hasBlackJack = false
    message = ""
    FE_Cards.innerText = "cards :"
    FE_Sum.innerText = "sum : "
    FE_Message.innerText = message
}



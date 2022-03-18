/// PLAYER ///
let firstCard = getRandomCard(1, 11)
let secondCard = getRandomCard(1, 11)
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

/// ELEMENTS ///
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

/// HOUSE ///
let houseHand = getRandomCard(10, 26)
let finalHouseHand = houseHand
let houseEl = document.getElementById("house-el")

/// CARD RANDOMIZER //
function getRandomCard(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/// START GAME ///
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    houseEl.textContent = "House: " + finalHouseHand
    sumEl.textContent = "Sum: " + sum

    if (finalHouseHand === 21 && sum != 21){
        message = "Sorry you lost :("
        isAlive = false
    } else if (sum === 21 && finalHouseHand != 21){
        message = "Congrats! You've got BlackJack"
        hasBlackJack = true
    } else if (sum <= 16){
        message = "Hit or Stand?"
    } else if (finalHouseHand > 21 && sum <= 21) {
        message = "Congratulations! You've won!!!"
    } else if (finalHouseHand <= 21 && sum > 21) {
        message = "Sorry you lost :("
        isAlive = false
    } else if (finalHouseHand > 21 && sum <= 21) {
        message = "Congratulations! You've won!!!"
    } else {
        message = "Hit or Stand?"
    }
    messageEl.textContent = message
}

/// NEW CARD ///
let card = getRandomCard(1, 11)

/// HIT + ///
function hitPlus() {
    if (sum <= 16){
        sum += card
        cards.push(card)
    } else if (sum === 21){
        stand()
    }
    renderGame()
}
/// STAND ///
function stand() {
    if (finalHouseHand <= 16){
        finalHouseHand += card
        houseEl.textContent = "House: " + finalHouseHand
        stand()
    } else if (finalHouseHand > 21 && sum <= 21) {
        message = "Congratulations! You've won!!!"
    } else if (finalHouseHand <= 21 && sum > 21) {
        message = "Sorry you lost :("
        isAlive = false
    } else if (finalHouseHand > sum) {
        message = "Sorry you lost :("
        isAlive = false
    } else if (finalHouseHand === sum){
        message = "It's a draw, try again"
        isAlive = false
    } else {
        message = "Congratulations! You've won!!!"
    }
    messageEl.textContent = message
}



function reloadGame() {
    location.reload()
}
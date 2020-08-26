//Challange 1: Your Age in Days


function birthday(){

    let birthdate = prompt("Enter your birthdate in (dd-mm-yyyy) format. Don't Fuck around!!")

    let birthday = (birthdate.split("-")[0])/365.25
    let month = (birthdate.split("-")[1])/12
    let year = birthdate.split("-")[2]

    origin = month + birthday + parseInt(year);

    let currentDate = 24/365.25
    let currentMonth = 8/12
    let currentYear = 2020

    current = currentDate + currentMonth + currentYear

    console.log(birthday)
    console.log(month)
    console.log(year)

    let result = (current - origin)*365.25

    let h1 = document.createElement('h1')
    let ans = document.createTextNode('You are ' + result + ' Days Old')
    h1.setAttribute('id','Age')
    h1.appendChild(ans)
    document.getElementById("flex-container1-result").appendChild(h1)
    
}

function reset(){
    document.getElementById('Age').remove()
}


function generateCat(){
    let image = document.createElement("img")
    let div = document.getElementById("flex-container2-gen-cat")
    image.src="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}

function rpsgame(choice){
    let humanChoice, botChoice
    humanChoice = choice.id
    botChoice = numtoChoice(Math.floor(Math.random() * 3))
    let result = decideWinner(humanChoice,botChoice) //0 Human lost, 1 Bot Lost
    message = finalMessage(result); // {'Message': 'You Won', 'Color':'Green'}
    // console.log(humanChoice, botChoice, message)
    rpsFrontEnd(humanChoice, botChoice, message)
}

function decideWinner(humanChoice, botChoice){
    let rpsDatabase = {
        'Rock' : {'Rock': 0.5 , 'Paper': 0, 'Scissors': 1},
        'Paper' : {'Rock': 1 , 'Paper': 0.5, 'Scissors': 0},
        'Scissors' : {'Rock': 0 , 'Paper': 1, 'Scissors': 0.5}
    }

    let finalResult = rpsDatabase[humanChoice][botChoice]
    return finalResult
}

function rpsFrontEnd(humanChoice, botChoice, message){
    let imageDatabase = {
        'Rock' : document.getElementById('Rock').src,
        'Paper' : document.getElementById('Paper').src,
        'Scissors' : document.getElementById('Scissors').src
    }

    // removing the images

    document.getElementById('Rock').remove()
    document.getElementById('Paper').remove()
    document.getElementById('Scissors').remove()

    let humanDiv = document.createElement('div')
    let botDiv = document.createElement('div')
    let resultDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>"
    resultDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size = 60px; padding: 30px '>" + message['message'] + "</h1>"

    document.getElementById('flex-rps-container3').appendChild(humanDiv)
    document.getElementById('flex-rps-container3').appendChild(resultDiv)
    document.getElementById('flex-rps-container3').appendChild(botDiv)
    
}

function numtoChoice(num1){
    return ['Rock', 'Paper', 'Scissors'][num1]
}

function finalMessage(result) {
    if(result === 0){
        return ({'message': 'You Lost!', 'color':'Red'})
    }
    else if (result === 1) {
        return ({'message': 'You Won!', 'color':'Green'})
    }
    else {
        return ({'message': 'You Tied!', 'color':'Yellow'})
    }
}



// Challange 4: change the color of all the buttons

let allButtons = document.getElementsByTagName('button')


var copyAllButtons = [];

for (let j=0; j < allButtons.length; j++){
    copyAllButtons.push(allButtons[j].classList[1]);
}

function buttonColorChange(buttoninput){
    if(buttoninput.value === 'Red'){
        changeToRed()
    } else if(buttoninput.value === 'Green'){
        changetoGreen()
    } else if(buttoninput.value === 'Random'){
        changeToRandom()
    }
    else if(buttoninput.value === 'Reset'){
        buttonReset()
    }
}


function changeToRed(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add("btn-danger")
    }
}

function changetoGreen(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add("btn-success")
    }
}

function buttonReset(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(copyAllButtons[i])
    }
}

function changeToRandom(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (i = 0; i < allButtons.length; i++){
        let randomNum = Math.floor( Math.random() * 4)
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(choices[randomNum])
    }


}


//Challange 5 Code

let blackjackGame = {
    'you' : {'scoreSpan': '#your-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]}
}

let YOU = blackjackGame['you']
let DEALER = blackjackGame['dealer']
let CARDS = blackjackGame['cards']

document.querySelector('#Hit').addEventListener('click',blackJackHit)
document.querySelector('#Stand').addEventListener('click',blackJackStand)
document.querySelector('#Deal').addEventListener('click',blackjackDeal)

const hitSound = new Audio('./sounds/swish.m4a')


function blackJackHit(){
    let card = generateCard()
    console.log(card)
    showCard(YOU, card)
    updateScore(YOU, card)
    showScore(YOU)
    
}

function blackJackStand(){
    let card = generateCard()
    console.log(card)
    showCard(DEALER, card)
}

function showCard(activePlayer, card){
    if(activePlayer['score'] <=21){
        let cardImage = document.createElement('img')
        cardImage.src = `./images/${card}.png`
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play()
    }
    
}

function blackjackDeal(){
    let yourImages = document.querySelector(blackjackGame['you']['div']).querySelectorAll('img')
    for (i = 0; i < yourImages.length; i++){
        yourImages[i].remove()
    }

    let dealerImages = document.querySelector(blackjackGame['dealer']['div']).querySelectorAll('img')
    for (i = 0; i < dealerImages.length; i++){
        dealerImages[i].remove()
    }

    YOU['score'] = 0
    DEALER['score'] = 0

    document.querySelector(YOU['scoreSpan']).textContent = 0
    document.querySelector(YOU['scoreSpan']).style.color = 'white'
    document.querySelector(DEALER['scoreSpan']).textContent = 0
    document.querySelector(DEALER['scoreSpan']).style.color = 'white'
}

function generateCard(){
    return CARDS[Math.floor(Math.random()*13)]
}

function updateScore(activePlayer, card){
    if(card === 'A'){
        if((activePlayer['score'] + blackjackGame['cardsMap'][card][1]) <= 21){
           activePlayer['score'] += blackjackGame['cardsMap'][card][1] 
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
    
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}
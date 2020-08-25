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
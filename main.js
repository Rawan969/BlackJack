
let cards=[]
let sum= 0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let player={
    Name:"per",
    Chips:145 ,
    sayHello: function(){
        console.log("hello")
    }
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name +":$"+player.Chips

function getRandomCard(){
    let randomNumber= Math.floor( Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber==1){
        return 11
    }else {
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    renderGame()
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
}

function renderGame(){
    cardEl.textContent="Cards:" 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+ " "
    }
    sumEl.textContent="sum:"+sum
    if(sum<=20){
        message="Do you want to draw new card?"
    }else if(sum ==21){
        message="Wohoo! you've got BlachJack!"
        hasBlackJack=true
    }
    else{
        message="You are out the game"
        isAlive=false
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive==true && hasBlackJack==false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
    }
    
}


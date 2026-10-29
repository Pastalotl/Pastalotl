/*Fisher-Yates shuffle (from Stack Overflow)*/
function shuffle(array) {
//for(let n = 0;n<25;n++){
  let currentIndex = array.length-1;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    //console.log(`current index: ${currentIndex}`)
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * (currentIndex+1));
    //console.log(`random index: ${randomIndex}`)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    //console.log(array)
  }
  //}
  return array
}

/*Sophcode below*/
let characters = []
let weapons = []
let rooms = []
let deck = []
let suspect = []
let hands = {}
let handCount = 0
let currentHand = 0
const defChars = ["Reverend_Green","Professor_Plum","Mrs_Peacock","Colonel_Mustard","Miss_Scarlet","Mrs_White"]
const defWeaps = ["Candlestick","Knife","💖Lead_Pipe💖","Revolver","Rope","Wrench"]
const defRooms = ["Conservatory","Lounge","Kitchen","Library","Hall","Study","Ballroom","Living_Room","Billiards_Room"]
let listC = defChars
let listW = defWeaps
let listR = defRooms
let handspace = document.getElementById("handspace")
let guessResult = document.getElementById("guessResult")
function initialise(){
    handCount = 0
    currentHand = 0
    suspect = []
    hands = {}
    characters = listC
    document.getElementById('characterSelect').innerHTML = 
    `<option value=${listC[0]} id=${listC[0]}>${listC[0]}</option>
    <option value=${listC[1]} id=${listC[1]}>${listC[1]}</option>
    <option value=${listC[2]} id=${listC[2]}>${listC[2]}</option>
    <option value=${listC[3]} id=${listC[3]}>${listC[3]}</option>
    <option value=${listC[4]} id=${listC[4]}>${listC[4]}</option>
    <option value=${listC[5]} id=${listC[5]}>${listC[5]}</option>`
    //console.log(characters)
    weapons = listW
    document.getElementById('weaponSelect').innerHTML = 
    `<option value=${listW[0]} id=${listW[0]}>${listW[0]}</option>
    <option value=${listW[1]} id=${listW[1]}>${listW[1]}</option>
    <option value=${listW[2]} id=${listW[2]}>${listW[2]}</option>
    <option value=${listW[3]} id=${listW[3]}>${listW[3]}</option>
    <option value=${listW[4]} id=${listW[4]}>${listW[4]}</option>
    <option value=${listW[5]} id=${listW[5]}>${listW[5]}</option>`
    //console.log(weapons)
    rooms = listR
    document.getElementById('roomSelect').innerHTML = 
    `<option value=${listR[0]} id=${listR[0]}>${listR[0]}</option>
    <option value=${listR[1]} id=${listR[1]}>${listR[1]}</option>
    <option value=${listR[2]} id=${listR[2]}>${listR[2]}</option>
    <option value=${listR[3]} id=${listR[3]}>${listR[3]}</option>
    <option value=${listR[4]} id=${listR[4]}>${listR[4]}</option>
    <option value=${listR[5]} id=${listR[5]}>${listR[5]}</option>
    <option value=${listR[6]} id=${listR[6]}>${listR[6]}</option>
    <option value=${listR[7]} id=${listR[7]}>${listR[7]}</option>
    <option value=${listR[8]} id=${listR[8]}>${listR[8]}</option>`
    //console.log(rooms)
}
function listDefault(){
    listC=defChars
    listW=defWeaps
    listR=defRooms
}
function listUni(){
    listC=["Ella","Jo","Sophie","G_H_Hardy","Leonhard_Euler","✨Bob✨"]
    listW=["'A_Mathematician's_Apology'_Copy","Fireball","Sssglock","Lightsaber","Extended_Euclidean_Algorithm","Lecture_Notes"]
    listR=["Fey_Building","Senate_House","Ivy_Gate","Priory_Road_Complex","Woodland_Road","Wills_Memorial","Victoria_Rooms","Physics_Building","Richmond_Building"]
}
function pickSuspect(){
    console.log(characters)
    characters = shuffle(characters)
    console.log(characters)
    weapons = shuffle(weapons)
    rooms = shuffle(rooms)
    charIndex = Math.floor(Math.random() * characters.length)
    wpnIndex = Math.floor(Math.random() * weapons.length)
    roomIndex = Math.floor(Math.random() * rooms.length)
    suspect = suspect.concat(characters.splice(charIndex,1))
    suspect = suspect.concat(weapons.splice(wpnIndex,1))
    suspect = suspect.concat(rooms.splice(roomIndex,1))
    console.log(`The suspect is: ${suspect}`)
    //console.log("Suspect picked <3")
}
function dealCards(playerCount){
    deck = deck.concat(characters)
    deck = deck.concat(weapons)
    deck = deck.concat(rooms)
    //console.log(deck)
    deck = shuffle(deck)
    //console.log(deck)
    let i = playerCount
    handCount = playerCount
    for(i; i>0; i--){
        hands["player"+i.toString()] = []
    }
    i = 0
    let n = deck.length - 1
    for(n; n>-1;n--){
        //console.log(`n=${n}, i=${i}`)
        card = deck.splice(0,1)
        //console.log(card)
        hands["player"+(i+1).toString()].push(card)
        //console.log(hands["player"+(1+i)])
        i = (i+1)%playerCount
        
    }
    console.log(hands["player"+playerCount])
}
function finalGuess(character,weapon,room){
    //console.log(character,weapon,room)
    if(character==suspect[0]&&weapon==suspect[1]&&room==suspect[2]){
        guessResult.innerHTML = `<div class="content peridot" style="text-align:center">Your guess was: <h1>CORRECT</h1>
        (${character} with the ${weapon} in the ${room})</div>`
    }
    else{
        guessResult.innerHTML = `<div class="content ruby" style="text-align:center">Your guess was: <h1>INCORRECT</h1>
        (${character} with the ${weapon} in the ${room})</div>`
    }
}
function showHand(){
    if(handCount == 0) return false
    currentHand = (currentHand%handCount)+1
    //console.log(currentHand,hands["player"+currentHand.toString()])
    let htmlList = `<h3>Player ${currentHand.toString()}</h3><ul>`
    for(let n = hands["player"+currentHand.toString()].length - 1;n>-1;n--){
        let card = hands["player"+currentHand.toString()][n].toString()
        htmlList+=`<li>${card}</li>`
    }
    htmlList+="</ul>"
    handspace.innerHTML=htmlList
}
function hideHand(){
    handspace.innerHTML = "<h3>Hand Hidden</h3>"
}

//listUni()
initialise()
//UH FIX THIS
playerSlider = document.getElementById("players")
sliderVal = document.getElementById("sliderVal")
playerSlider.oninput = function(){
    sliderVal.innerHTML = this.value.toString() + " players"
}
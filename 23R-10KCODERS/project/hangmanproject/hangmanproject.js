
let guessedLetters = []; 
let incorrectGuesses = 0;
const maxGuesses = 6; 
const keyboard = document.getElementById("keyboard");
const wordsContainer = document.getElementById("words");
const hangmanDisplay = document.getElementById("hangman");
keyboard.addEventListener("click",fun)
async function api(){
    let obj= await fetch('https://random-words-api-plum.vercel.app/word/noun')
    let data=await obj.json()
    var words=data.map((val)=>{
         console.log(val.word)
    })

}
api()
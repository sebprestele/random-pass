const outputEl = document.getElementById("output-el")
const createButton = document.querySelector("button")
const characters = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","x","y","z","0","1","2","3","4","5","","6","7","8","9"]
const specialChars = ["!","@","#","$","%","&","(",")","-","_","+","*","/"]
const capsLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T", "U","V","W","X","Y","Z"]

let password = []
let passwordLength = document.getElementById("passlength")
let x = ""
const specialChecked = document.getElementById("specialchars")
const capsChecked = document.getElementById("caps")

specialChecked.addEventListener("change", function() {
  if (specialChecked.checked === true) {
    characters.push.apply(characters, specialChars)
  } else {
    characters = characters.filter(function (item){
      return !specialChars.includes(item)
    })
  }
  })

capsChecked.addEventListener("change", function()  {
  if (capsChecked.checked === true) {
    characters.push.apply(characters, capsLetters)
  } else {
    characters = characters.filter(function(item) {
      return !capsLetters.includes(item)
    })
  }
  
})

function createPassword () {
   x = passwordLength.value
  for (let i=0; i<x; i++){
let character = characters[Math.floor(Math.random() * characters.length)]
password.push(character)
     }
  outputEl.innerText = password.join("")
}



createButton.addEventListener("click", function(){
  resetPasswordEl();
   createPassword()
 } )

function resetPasswordEl() {
  outputEl.innerText = password.splice(0, password.length)   
  }




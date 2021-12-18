const submitButtonCalf = document.getElementById("submit-btn-calf")
const submitButtonThigh = document.getElementById("submit-btn-thigh")
const outputEl = document.querySelector(".output-el")
const errorEl = document.querySelector(".error-el")

const pointA = document.getElementById("A")
const pointB = document.getElementById("B")
const pointC = document.getElementById("C")

const pointD = document.getElementById("D")
const pointE = document.getElementById("E")
const pointF = document.getElementById("F")

let size = ""
let length = ""

// Listen for clicks on submit button Calf and call functions

submitButtonCalf.addEventListener("click",function (){
  errorEl.innerText =""
  getSizeCalf()
  getLengthCalf()
  outputSize()
   } )

// Function to get the size for "wade". Currently only works exactly within the ranges. 

function getSizeCalf() {
  if (pointA.value >= 27 && pointA.value <= 34 && pointB.value >= 18 && pointB.value <= 20) {
     size = "1"
   } else if (pointA.value >= 29 && pointA.value <= 37 && pointB.value >= 20 && pointB.value <= 22){
    size = "2"
  }
  else if (pointA.value >= 32 && pointA.value <= 40 && pointB.value >= 22 && pointB.value <= 24){
    size = "3"
  }
   else if (pointA.value >= 35 && pointA.value <= 43 && pointB.value >= 24 && pointB.value <= 27){
    size = "4"
  }
   else if (pointA.value >= 38 && pointA.value <= 47 && pointB.value >= 27 && pointB.value <= 30){
    size = "5"
  }
   else if (pointA.value >= 41 && pointA.value <= 51 && pointB.value >= 30 && pointB.value <= 33){
    size = "6"
  }
 else {
   size = "xxx"
 errorEl.innerText = "Leider ist mind. einer Deiner Messpunkte außerhalb unserer Größentabelle. \nBitte kontaktiere unseren Kundenservice für eine Empfehlung"
    }
 }

// Function to get and set the length for calf

  function getLengthCalf () {
  if (pointC.value <= 27) {
      length = "normal"
  } else {
     length = "lang" 
     }
  }

function outputSize () {
outputEl.innerText = `Deine Größe ist: ${size}, ${length}`
}

// Listen for clicks on submit button Thigh and call functions

submitButtonThigh.addEventListener("click",function (){
    errorEl.innerText =""
  getSizeThigh()
  getLengthThigh()
  outputSize()
   } )

// Function to get the correct size for "Oberschenkel"

function getSizeThigh() {
  if (pointD.value >= 46 && pointD.value <= 53 && pointE.value >= 32 && pointE.value < 35) {
     size = "1"
   } else if (pointD.value >= 50 && pointD.value <= 59 && pointE.value >= 35 && pointE.value <= 38 ) {
    size = "2"
  }
  else if (pointD.value >= 55 && pointD.value <= 64 && pointE.value >= 38 && pointE.value < 41){
    size = "3"
  }
   else if (pointD.value >= 60 && pointD.value <= 69 && pointE.value >= 41 && pointE.value < 44){
    size = "4"
  }
   else if (pointD.value >= 65 && pointD.value <= 74 && pointE.value >= 44 && pointE.value < 47 ) {
    size = "5"
  }
   else if (pointD.value >= 70 && pointD.value <= 79 && pointE.value >= 47 && pointE.value <= 51){
    size = "6"
  }
 else {
 size = "xxx"
   errorEl.innerText = "Leider ist mind. einer Deiner Messpunkte außerhalb unserer Größentabelle.\nBitte kontaktiere unseren Kundenservice für eine Empfehlung"
    }
 }

  function getLengthThigh () {
  if (pointF.value <= 26) {
      length = "normal"
  } else {
     length = "lang" 
     }
  }

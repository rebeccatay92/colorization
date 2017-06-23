// returns number between 0 and 255
function randNum () {
  return Math.floor(Math.random() * 256)
}
var counter = 0
var score = document.querySelector('.score')
var body = document.querySelector('body')
var colorText = document.querySelector('.colorText')
var colorPalette = ['red', 'green', 'blue', 'orange','purple']

//colors change independently of button click
setInterval(colorize, 2000)

document.querySelector('div').addEventListener('click', function() {
  //scoring logic to be inserted here
})
document.querySelector('div').addEventListener('click', function() {
  if (true) { //if scoring says true
    counter ++ //icnrease score
  }
  score.innerText = counter
})
//create function scoring which checks if background color = colorText


function colorize () {
  body.style.backgroundColor = colorPalette[Math.floor(Math.random() * 5)] //changes body backgroundColor
  colorText.innerText = colorPalette[Math.floor(Math.random() * 5)]
}

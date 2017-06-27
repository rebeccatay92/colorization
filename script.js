var body = document.querySelector('body')
var colorText = document.querySelector('.colorText')
var colorPalette = ['red', 'green', 'blue', 'orange', 'purple']
var counter = 0
var color = ''
var score = document.querySelector('.score')

// colors change independently of button click
setInterval(colorize, 1000)


document.querySelector('div').addEventListener('click', function () {
  if (colorText.innerText === color) {
    counter++
    score.innerText = counter
    colorText.innerText = colorPalette[Math.floor(Math.random() * 5)]
  }
})

function colorize () {
  body.style.backgroundColor = colorPalette[Math.floor(Math.random() * 5)] //changes body backgroundColor
  color = body.style.backgroundColor
  colorText.innerText = colorPalette[Math.floor(Math.random() * 5)]
}

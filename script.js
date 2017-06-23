var colors = ['yellow', 'red', 'green', 'blue', 'purple']
var color = ''
// returns number between 0 and 255
function randNum () {
  return Math.floor(Math.random() * 6)
}

var counter = 0
var score = document.querySelector('.score')

// click to change color
document.querySelector('div').addEventListener('click', colorize)

document.querySelector('div').addEventListener('click', function () {
  // if (document.querySelector('div').textcontent === color) {
  counter++
  score.innerText = counter
  // }
})

function colorize () {
  var randStore = randNum()
  document.querySelector('body').style.backgroundColor = colors[randStore]
  color = colors[randStore]
}

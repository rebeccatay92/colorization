// returns number between 0 and 255
function randNum () {
  return Math.floor(Math.random() * 256)
}
var counter = 0
var score = document.querySelector('.score')
document.querySelector('div').addEventListener('click', colorize)
document.querySelector('div').addEventListener('click', function() {
  counter ++
  score.innerText = counter
})

function colorize () {
  document.querySelector('body').style.backgroundColor = 'rgba(' + randNum() + ',' + randNum() + ',' + randNum() + ',' + randNum() + ')'
}

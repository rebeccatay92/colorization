// returns number between 0 and 255
function randNum () {
  return Math.floor(Math.random() * 256)
}

document.querySelector('div').addEventListener('click', colorize)

function colorize () {
  document.querySelector('body').style.backgroundColor = 'rgba(' + randNum() + ',' + randNum() + ',' + randNum() + ',' + randNum() + ')'
}

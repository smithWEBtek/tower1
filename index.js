$(() => {
  console.log('index.js is loaded ... ');
  bindListeners()
})

const bindListeners = () => {
  $('button').on('click', (event) => {
    event.preventDefault()
    if (event.target.classList[0] == 'bg1') {
      $('p')[0].style["background-color"] = 'blue'
    }
    if (event.target.classList[0] == 'bg2') {
      $('p')[1].style["background-color"] = 'green'
    }
    if (event.target.classList[0] == 'bg3') {
      $('p')[2].style["background-color"] = 'yellow'
      alert("THIS is the yellow button.")
    }
    if (event.target.classList[0] == 'bg4') {
      $('p')[3].style["background-color"] = 'pink'
    }
    alert("THAT is the PINK button!")
  })
}
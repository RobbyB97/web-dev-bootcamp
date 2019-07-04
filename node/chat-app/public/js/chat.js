const socket = io()

const count_num = document.querySelector('#count')
const count_but = document.querySelector('#increment')

socket.on('countUpdated', count => {
  console.log('The count has been updated!')
  count_num.innerHTML = count
})

count_but.addEventListener('click', () => {
  alert('DONT CLICK THE BUTTON')
  socket.emit('increment')
})

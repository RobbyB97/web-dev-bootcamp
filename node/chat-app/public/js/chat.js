const socket = io()

socket.on('message', message => {
  console.log(message)
})

// Page Elements
const chatForm = document.querySelector('#chatForm')
const chatMessage = document.querySelector('#chatMessage')

chatForm.addEventListener('submit', e => {
  e.preventDefault()

  if (chatMessage.value.replace(' ', '') === '') {
    alert('Cannot send empty message')
    return
  }

  socket.emit('sentMessage', chatMessage.value) // Emit message
  chatMessage.value = ''  // Clear input
})

//const count_num = document.querySelector('#count')
//const count_but = document.querySelector('#increment')

//socket.on('countUpdated', count => {
//  console.log('The count has been updated!')
//  count_num.innerHTML = count
//})

//count_but.addEventListener('click', () => {
//  alert('DONT CLICK THE BUTTON')
//  socket.emit('increment')
//})

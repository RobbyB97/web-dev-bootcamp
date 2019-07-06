const socket = io()

socket.on('message', message => {
  console.log(message)
})

// Page Elements
const chatForm = document.querySelector('#chatForm')
const chatMessage = document.querySelector('#chatMessage')

chatForm.addEventListener('submit', e => {
  e.preventDefault()

  const message = e.target.elements.message


  if (message.value.replace(' ', '') === '') {
    alert('Cannot send empty message')
    return
  }

  socket.emit('sendMessage', message.value) // Emit message
  message.value = ''  // Clear input
})

socket.on('emitMessage', message => {
  alert(message)
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

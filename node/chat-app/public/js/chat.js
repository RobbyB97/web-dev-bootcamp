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
<<<<<<< HEAD
  chatMessage.value = ''  // Clear input
=======
  chatMessage.value = ''
>>>>>>> 6d81ec2a478b82c0d4fc40abf27e5de8323b1996
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

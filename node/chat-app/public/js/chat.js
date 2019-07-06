const socket = io()

// Receive message from server
socket.on('message', message => {
  console.log(message)
})

// Page Elements
const chatForm = document.querySelector('#chatForm')
const chatMessage = document.querySelector('#chatMessage')
const locationButton = document.querySelector('#sendLocation')

// Receive user message
socket.on('emitMessage', message => {
  console.log(message)
})


// Send user message
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

// Send location
locationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation service is not compatible with your browser')
  }

  navigator.geolocation.getCurrentPosition((position) => {
    // Get coordinates
    const userPos = {}
    userPos.latitude = position.coords.latitude
    userPos.longitude = position.coords.longitude

    socket.emit('sendLocation', userPos)
  })
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

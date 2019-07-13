const socket = io()

// Receive message from server
socket.on('message', message => {
  console.log(message)
})

// Page Elements
const $chatForm = document.querySelector('#chatForm')
const $chatMessage = $chatForm.querySelector('input')
const $chatButton = $chatForm.querySelector('button')
const $locationButton = document.querySelector('#sendLocation')

// Receive user message
socket.on('emitMessage', message => {
  console.log(message)
})


// Send user message
$chatForm.addEventListener('submit', e => {
  e.preventDefault()

  if ($chatMessage.value.replace(' ', '') === '') {
    alert('Cannot send empty message')
    return
  }

  socket.emit('sendMessage', $chatMessage.value, (error) => {
    if (error) {
      if (error === 'Bad word...') {
        $chatMessage.value = ''
      }
      return console.log(error)
    }
    console.log('Message delivered! :)')
    $chatMessage.value = ''  // Clear input
  })
})

// Send location
$locationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation service is not compatible with your browser')
  }

  navigator.geolocation.getCurrentPosition((position) => {
    // Get coordinates
    const userPos = {}
    userPos.latitude = position.coords.latitude
    userPos.longitude = position.coords.longitude

    socket.emit('sendLocation', userPos, (error) => {
      if (error) {
        return console.log(error)
      }
      console.log('Location shared!')
    })
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

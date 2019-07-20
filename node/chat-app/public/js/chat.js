const socket = io()

// Page Elements
const $chatForm = document.querySelector('#chatForm')
const $chatMessage = $chatForm.querySelector('input')
const $chatButton = $chatForm.querySelector('button')
const $locationButton = document.querySelector('#sendLocation')
const $messages = document.querySelector('#messages')
const $sidebar = document.querySelector('#sidebar')


// Templates
const messageTemplate = document.querySelector('#messageTemplate').innerHTML
const locationTemplate = document.querySelector('#locationTemplate').innerHTML
const sidebarTemplate = document.querySelector('#sidebarTemplate').innerHTML


// Options
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})


// Functions
const autoscroll = () => {  // Determine whether chat should scroll for new message
  // New message element
  const $newMessage = $messages.lastElementChild

  // Get total height of new message
  const newMessageStyles = getComputedStyle($newMessage)
  const newMessageMargin = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin
  console.log(newMessageMargin)

  // Visible height
  const visibleHeight = $messages.offsetHeight

  // Height of messages container
  const containerHeight = $messages.scrollHeight

  // How far down is user scrolled
  const scrollOffset = $messages.scrollTop + visibleHeight

  // Scroll to bottom if user was at bottom before new message
  if (containerHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight
  }
}


// Events
socket.on('message', message => { // System message
  console.log(message)
})

socket.on('emitMessage', message => { // Chat app message
  console.log(message)
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format('h:mm a')
  })
  $messages.insertAdjacentHTML('beforeend', html)
  autoscroll()
})

socket.on('emitLocation', url => {  // Location message
  console.log(url)
  const html = Mustache.render(locationTemplate, {
    username: url.username,
    url,
    createdAt: moment(url.createdAt).format('h:mm a')
  })
  $messages.insertAdjacentHTML('beforeend', html)
  autoscroll()
})

socket.on('roomData', ({room, users}) => {  // Room and users in sidebar
  console.log(room)
  console.log(users)
  const html = Mustache.render(sidebarTemplate, {
    room,
    users
  })
  $sidebar.innerHTML = html
})


// Event listeners
$chatForm.addEventListener('submit', e => { // Send message
  e.preventDefault()

  // Disable chat button until message is processed/delivered
  $chatButton.setAttribute('disabled', 'disabled')

  if ($chatMessage.value.replace(' ', '') === '') {
    $chatButton.removeAttribute('disabled')
    alert('Cannot send empty message')
    return
  }

  socket.emit('sendMessage', $chatMessage.value, (error) => {
    $chatButton.removeAttribute('disabled')
    $chatMessage.value = ''
    $chatMessage.focus()

    if (error) {
      return console.log(error)
    }

    console.log('Message delivered! :)')
  })
})

$locationButton.addEventListener('click', () => { // Send location
  $locationButton.setAttribute('disabled', 'disabled')

  if (!navigator.geolocation) {
    return alert('Geolocation service is not compatible with your browser')
  }

  navigator.geolocation.getCurrentPosition((position) => {
    // Get coordinates
    const userPos = {}
    userPos.latitude = position.coords.latitude
    userPos.longitude = position.coords.longitude

    socket.emit('sendLocation', userPos, (error) => {
      $locationButton.removeAttribute('disabled')
      if (error) {
        return console.log(error)
      }
      console.log('Location shared!')
    })
  })
})

socket.emit('join', {username, room}, (error) => {
  if (error) {
    alert(error)
    location.href = '/'
  }
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

const socket = io()
const count_div = document.querySelector('#count')

socket.on('countUpdated', count => {
  console.log('The count has been updated!')
  count_div.innerHTML = count
})

console.log('js/app.js is loaded')

// Select elements of page
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const pOne = document.querySelector('#pOne')
const pTwo = document.querySelector('#pTwo')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()  // Prevent page from refreshing

  if (search.value.replace(' ', '') === '') {
    pOne.innerHTML = 'Cannot get weather without a location!'
    return
  }
  const location = search.value.replace(' ', '-')

  pOne.innerHTML = 'Loading...'
  pTwo.innerHTML = ''

  // Generate query URL
  const queryURL = '/weather?address=' + location

  // Fetch data and log json object
  fetch(queryURL).then((response) => {

    response.json().then((data) => {
      if (data.error) {
        console.log(data.error)
        pOne.innerHTML = data.error
      } else {
        pOne.innerHTML = data.location
        pTwo.innerHTML = data.data
      }
    })
  })
})

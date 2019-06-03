console.log('js/app.js is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=boston').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(data.data)
    }
  })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()  // Prevent page from refreshing

  const location = search.value
  console.log(location)

  // Generate query URL
  const queryURL = 'http://localhost:3000/weather?address=' + location

  // Fetch data and log json object
  fetch(queryURL).then((response) => {
    response.json().then((data) => {
      console.log('Dynamic query')
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.data)
      }
      console.log('End dynamic query')
    })
  })

  console.log('Form submitted!')
})

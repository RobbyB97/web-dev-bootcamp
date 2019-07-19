// User tracking functions
const users = []

const addUser = ({id, username, room}) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required!'
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: `Username '${username}' already exists in ${room}`
    }
  }

  // Store user
  const user = {id, username, room}
  users.push(user)
  return {user}
}

const removeUser = (id) => {
  // Find user
  const index = users.findIndex((user) => user.id === id)

  // Remove user (if exists)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

// Test functions
const test = () => {
  // addUser tests
  addUser({
    id: 22,
    username: 'Robby',
    room: 'CT'
  })
  const copy = addUser({
    id: 22,
    username: 'Robby',
    room: 'CT'
  })
  const empty = addUser({
    id: 23,
    username: '',
    room: ''
  })
  console.log(copy) // Return error
  console.log(e)  // Return error
  console.log(users)  // Return 1 object in array
}

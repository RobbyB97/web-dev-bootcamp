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

// Test functions
const test = () => {
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

  console.log(copy)
  console.log(e)
  console.log(users)
}

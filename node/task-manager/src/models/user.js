const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value < 0) {
        throw new Error('You can\'t be negative years old')
      }
      if (value < 18) {
        throw new Error('You must be 18 years or older')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length <= 6) {
        throw new Error('Password too short!')
      }
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain password!')
      }
    }
  }
})

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({email})

  if (!user) {
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to login')
  }

  return user
}

// Hash plaintext password
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)


module.exports = User

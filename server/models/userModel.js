const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  company_name: String,
  company_email: String,
  password: String,
})

module.exports = mongoose.model('Users', userSchema)

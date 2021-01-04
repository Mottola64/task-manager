// /Users/michaelmottola/mongodb/bin/mongod --dbpath=/Users/michaelmottola/mongodb-data

require('../src/db/mongoose')
const User = require('../src/models/user')

// 5fbd7b21524cc61256458307

User.findByIdAndUpdate("5fceaee4aabfca17e7036ed8", { age: 1}).then((user) => {
    console.log(user)

    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
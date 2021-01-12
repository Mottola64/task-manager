// /Users/michaelmottola/mongodb/bin/mongod --dbpath=/Users/michaelmottola/mongodb-data

require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// 5fbd7b21524cc61256458307

// User.findByIdAndUpdate("5fceaee4aabfca17e7036ed8", { age: 1}).then((user) => {
//     console.log(user)

//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({age})
//     return count    
// }

// updateAgeAndCount("5fceaee4aabfca17e7036ed8", 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("5fceb0e2866b97185beed8e8").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete("5fbd7ddfaf4c1612c4582d74", {completed: false}).then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})
const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('60133a330800576dd8dfe7ef')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner.name)

//     const user = await User.findById('60133a000800576dd8dfe7ec')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()
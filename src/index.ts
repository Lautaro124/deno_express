import express from 'npm:express'
import taskRoutes from './routes/task.routes.ts'
import './db.ts'
const app = express()

app.use(taskRoutes)
app.listen(3000, ()=> {
  console.log('Port 3000 open')
})

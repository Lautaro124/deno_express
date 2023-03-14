import { Router } from 'npm:express'
import { 
  changeTask, 
  createTask, 
  deleteTask, 
  getTasks 
} from "../controllers/task.controller.ts";

const taskRoutes = Router()

taskRoutes.get('/task', getTasks)
taskRoutes.get('/task/:id', getTasks)
taskRoutes.post('/task', createTask)
taskRoutes.put('/task', changeTask)
taskRoutes.delete('/task', deleteTask)

export default taskRoutes
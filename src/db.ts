import mongoose from 'npm:mongoose'

try {
  const db =await mongoose.connect('mongodb://localhost/taskdb')
  console.log('Database conected:', db.connection.name)
}
catch (err){
  console.error(err)
}
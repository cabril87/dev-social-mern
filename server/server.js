import express from 'express'
import connectDB from './config/db.js'
import users from './routes/api/users.js'
import auth from './routes/api/auth.js'
import profile from './routes/api/profile.js'
import posts from './routes/api/posts.js'




const app = express()

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false}))
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.static('public'));



//Define routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
import mongoose from 'mongoose'
import config from 'config'

const db = config.get('mongoURI')

const connectDB = async () => {
    try {
       await mongoose.connect(db, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true 
       })
       console.log('MongoDB Connected.. ')
    } catch (err) {
        console.error(err.message)

        //Exit process with faluire
        process.exit(1)
    }
}

export default connectDB
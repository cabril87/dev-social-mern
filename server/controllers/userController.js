import { validationResult } from "express-validator"
import User from '../models/User.js'
import gravatar from 'gravatar'
import bcrypt from 'bcryptjs'


export const userController = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }

    const { name, email, password } = req.body;

    try {
        //See if the user exist
        let user = await User.findOne({ email })

        if(user) {
            return res.status(400).json({ errors: [ { msg: 'Users already exists '}] })
        }
    
        //Get users gravatars
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })
    
        //Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save()
    
        //Return json web token

        res.send('User registered')
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

  
}
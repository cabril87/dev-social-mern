import { validationResult } from "express-validator"
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'


export const userController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password} = req.body;

    try {
        //See if the user exist
        let user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ errors: [{ msg: 'Users already exists ' }] })
        }

        //Get users gravatars
       
        user = new User({
            name,
            email,
            password,
        })

        //Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save()

        //Return json web token
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            }
        )

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }


}
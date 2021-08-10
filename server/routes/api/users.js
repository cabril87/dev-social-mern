import express from 'express';
import { check } from 'express-validator';
import { userController } from '../../controllers/userController.js'

const router = express.Router();

router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a vaild email')
        .isEmail(),
    check('password', 'Please enter a password with 6 characters')
        .isLength({ min: 6 })
],
    userController
)

export default router;
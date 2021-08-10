import express from 'express';
import auth from '../../middleware/auth.js'
import { check } from 'express-validator';
import { authController, authValidateController } from '../../controllers/authController.js'

const router = express.Router();

router.get('/', auth, authController)
router.post('/', [
    check('email', 'Please include a vaild email')
        .isEmail(),
    check('password', 'Password is required')
        .exists()
],
    authValidateController
)


export default router;


import express from 'express';
import auth from '../../middleware/auth.js'
import { check } from 'express-validator';
import {
    profileGetOne,
    profileCreateOne,
    profileGetAll,
    profileGetOneUser,
    profileDelete,
    profileAddExperience,
    profileDeleteExperience,
    profileAddEducation,
    profileDeleteEducation
} from '../../controllers/profileController.js'

const router = express.Router();

router.get('/me', auth, profileGetOne);
router.post('/', [
    auth,
    check('status', 'Status is required')
        .not()
        .isEmpty(),
    check('skills', 'Skills is required')
        .not()
        .isEmpty()
],
    profileCreateOne
);
router.get('/', profileGetAll)
router.get('/user/:user_id', profileGetOneUser)
router.delete('/', auth, profileDelete)
router.put('/experience', [
    auth,
    [
        check('title', 'Title is required')
            .not()
            .isEmpty(),
        check('company', 'Company is required')
            .not()
            .isEmpty(),
        check('from', 'From date is required')
            .not()
            .isEmpty(),
    ]
],
    profileAddExperience
)
router.delete('/experience/:edu_id', auth, profileDeleteExperience)
router.put('/education', [
    auth,
    [
        check('school', 'School is required')
            .not()
            .isEmpty(),
        check('degree', 'Degree is required')
            .not()
            .isEmpty(),
        check('fieldofstudy', 'Field of study date is required')
            .not()
            .isEmpty(),
        check('from', 'From date is required')
            .not()
            .isEmpty(),
    ]
],
    profileAddEducation
)
router.delete('/education/:edu_id', auth, profileDeleteEducation)

export default router;
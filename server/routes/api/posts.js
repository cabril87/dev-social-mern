import express from 'express';
import { check } from 'express-validator';
import auth from '../../middleware/auth.js'
import { postCreate, postGetOne, postGetAll, postDelete } from '../../controllers/postsController.js'

const router = express.Router();

router.post('/', [auth, [
    check('text', 'Text is required')
        .not()
        .isEmpty()
]
],
    postCreate
)
router.get('/', auth, postGetAll )
router.get('/:id', auth, postGetOne )
router.delete('/:id', auth, postDelete )

export default router;

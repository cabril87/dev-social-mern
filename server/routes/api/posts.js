import express from 'express';
import { check } from 'express-validator';
import auth from '../../middleware/auth.js'
import { postCreate, postGetOne, postGetAll, postDelete, postLike, postUnLike, postCommentCreate, postCommentDelete } from '../../controllers/postsController.js'

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
router.put('/like/:id', auth, postLike )
router.put('/unlike/:id', auth, postUnLike )
router.post('/comment/:id', [auth, [
    check('text', 'Text is required')
        .not()
        .isEmpty()
]
],
    postCommentCreate
)
router.delete('/comment/:id/:comment_id', auth, postCommentDelete)

export default router;

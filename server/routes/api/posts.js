import express from 'express';

import { postsController } from '../../controllers/postsController.js'

const router = express.Router();

router.get('/', postsController)

export default router;

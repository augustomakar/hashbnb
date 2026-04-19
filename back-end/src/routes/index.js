import { Router } from 'express';
import userRouter from '../domains/user.routes.js';
import placeRouter from '../domains/place.routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/places', placeRouter);

export default router;

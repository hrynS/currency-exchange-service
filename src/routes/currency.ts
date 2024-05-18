import { Router } from 'express';
import { getRate } from '../controllers/currency';

const router = Router();

router.get('/rate', getRate);

export default router;

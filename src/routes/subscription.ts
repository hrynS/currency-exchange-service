import { Request, Response, Router } from 'express';
const router = Router();

router.post('/subscribe', (req: Request, res: Response) => {
  res.send('// TODO: subscribed!');
});

export default router;

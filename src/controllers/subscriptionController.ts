import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import emailService from '../services/emailService';

export const subscribe = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;

  // TODO: used for testing, remove when the daily job is setup
  await emailService.sendEmail(
    email,
    'Subscription Successful',
    'Thank you for subscribing!',
  );

  res.status(200).json({ message: 'Subscribed successfully' });
});

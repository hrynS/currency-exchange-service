import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import CurrencyService from '../../services/currencyService';
import { CurrencyCodes } from '../../constants/currencyCodes';

export const getRate = asyncHandler(async (req: Request, res: Response) => {
  const rate = await CurrencyService.getExchangeRate(
    CurrencyCodes.UAH,
    CurrencyCodes.USD,
  );
  res.json(rate);
});

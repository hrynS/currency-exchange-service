import { Request, Response, Router } from "express";
import index from "../index";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default router;

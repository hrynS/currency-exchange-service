import express from "express";
import type { Request, Response, NextFunction } from "express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/", routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

import 'dotenv/config';
import express from 'express';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import syncDatabase from './models/syncDb';

const app = express();
const port = (process.env.PORT && parseInt(process.env.PORT)) || 8080;
const hostname = process.env.SERVICE_HOSTNAME || '0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorHandler);

syncDatabase()
  .then(() => {
    app.listen(port, hostname, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to sync database:', error);
  });

export default app;

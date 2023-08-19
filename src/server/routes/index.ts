import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();



router.get('/', (_, res) => {
  return res.send('Hello World!');
});

router.post('/test', (req, res) => {
  console.log(req);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});




export { router };

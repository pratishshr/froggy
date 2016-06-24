import express from 'express';
import facebookController from '../controllers/facebookController';

let router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to FROGGY CHAT BOT!');
});

export default router;
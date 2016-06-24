import express from 'express';
import * as facebookController from '../controllers/facebookController';

let router = express.Router();

router.get('/', facebookController.validate)
  .post('/', facebookController.parseMessage);

export default router;
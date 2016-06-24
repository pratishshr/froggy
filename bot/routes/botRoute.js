import express from 'express';
import * as facebookController from '../controllers/facebookController';
import * as botController from '../controllers/botController';

let router = express.Router();

router.post('/', botController.parseMessage);

export default router;
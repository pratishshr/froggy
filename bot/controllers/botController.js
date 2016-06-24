import HttpStatus from 'http-status-codes';
import * as witService from '../services/witService';

export function parseMessage(request, response) {
  console.log(request.body.message);
  witService.runActions(request.body.message);
  response.sendStatus(200);
}

import HttpStatus from 'http-status-codes';
import * as witService from '../services/witService';

export function parseMessage(request, response) {
  witService.runActions(request.body.message);
  let data = {
    message: request.body.message
  };
  response.status(HttpStatus.OK).json(data);
}
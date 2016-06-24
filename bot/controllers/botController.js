import HttpStatus from 'http-status-codes';
import * as witService from '../services/witService';

export function parseMessage(request, response) {
  witService.runActions(request.body);
  response.status(HttpStatus.OK).json({message: 'hawa'});
}

import {Wit} from 'node-wit';
import actions from '../actions/witActions';

const token = 'MEYXUKUJVRQP4VLZHLHMKZSGGQYZTPZH';
let sessionId = 1;
let client = new Wit(token, actions);
let sessions = {};

let initialContext = {};

export function witMessage(message) {
  client.message(message, initialContext, (error, data) => {
    if (error) {
      console.log('Oops! Got an error: ' + error);
    } else {
      console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
    }
  });
}

export function runActions(message, sessionId) {
  client.runActions(
    sessionId, // the user's current session
    message, // the user's message
    initialContext, // the user's current session state
    (error, context) => {
      if (error) {
        console.log('Oops! Got an error from Wit:', error);
      } else {
        console.log('Waiting for futher messages.');
      }
    }
  );
}



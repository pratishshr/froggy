import {Wit} from 'node-wit';
import actions from '../actions/witActions';

const token = 'MEYXUKUJVRQP4VLZHLHMKZSGGQYZTPZH';

let client = new Wit(token, actions);
let sessionId = 1;
let initialContext = {};

export function witMessage(message) {
  client.message('Hello', initialContext, (error, data) => {
    if (error) {
      console.log('Oops! Got an error: ' + error);
    } else {
      console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
    }
  });
}

export function runActions(message) {
  client.runActions(
    sessionId, // the user's current session
    message, // the user's message
    initialContext, // the user's current session state
    (error, context) => {
      if (error) {
        console.log('Oops! Got an error from Wit:', error);
      } else {
        // Our bot did everything it has to do.
        // Now it's waiting for further messages to proceed.
        console.log('Waiting for futher messages.');

        // Based on the session state, you might want to reset the session.
        // This depends heavily on the business logic of your bot.
        // Example:
        // if (context['done']) {
        //   delete sessions[sessionId];
        // }

      }
    }
  );
}



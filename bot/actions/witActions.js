import * as facebookService from '../services/facebookService';
import * as infoService from '../services/infoService';

const actions = {
  say(sessionId, context, message, cb) {
    facebookService.sendTextMessage(sessionId, message);
    cb();
  },
  merge(sessionId, context, entities, message, cb) {
    // Retrieve the location entity and store it into a context field
    cb(context);
  },
  error(sessionId, context, error) {
    console.log(error.message);
  },
  'fetchVacancies': (sessionId, context, cb) => {
    // Here should go the api call, e.g.:
    // context.forecast = apiCall(context.loc)
    context.vacancies = 'ios developer, hawa developer';
    cb(context);
  },
  'fetchLocation': (sessionId, context, cb) => {
    infoService.fetchLocation().then((response)=> {
      console.log(response);
      context.location = response.data.general_infos[0].description;
      cb(context);
    });
  },
  
};

export default actions;
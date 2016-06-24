import * as facebookService from '../services/facebookService';
import * as infoService from '../services/infoService';
import * as vacancyService from '../services/vacancyService';
import * as socketService from '../services/socketService';

const actions = {
  say(sessionId, context, message, cb) {
    if (sessionId)
      facebookService.sendTextMessage(sessionId, message);
    else
      socketService.postData(message);

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
    vacancyService.fetchVacancies().then((response)=> {
      if (response.data.vacancies.length) {
        let vacancies = 'Vacancies: ';
        response.data.vacancies.forEach((vacancy) => {
          vacancies += '\n' + ' - ' + vacancy.position;
        });
        context.vacancies = vacancies + '\n' + 'More info:' + '\n' + 'https://resource-froggy.herokuapp.com/vacancies';
      }
      context.vacancyCount = response.data.vacancies.length;
      cb(context);
    });
  },
  'checkVacancy': (sessionId, context, cb) => {
    console.log(context);
    vacancyService.fetchVacanciesByPosition(context.post).then((response) => {
      if (response.data.vacancies.length) {
        let vacancies = '\n Vacancies: ';
        response.data.vacancies.forEach((vacancy) => {
          vacancies += '\n' + ' - ' + vacancy.position;
        });
        context.vacancies = vacancies + '\n' + 'More info:' + '\n' + 'https://resource-froggy.herokuapp.com/vacancies';
      }
      context.vacancyCount = response.data.vacancies.length;
      cb(context);
    });
  },
  'fetchLocation': (sessionId, context, cb) => {
    infoService.fetchLocation().then((response)=> {
      context.location = response.data.general_infos[0].description;
      cb(context);
    });
  }
};

export default actions;
import * as facebookService from '../services/facebookService';
import * as infoService from '../services/infoService';
import * as vacancyService from '../services/vacancyService';
import * as socketService from '../services/socketService';
import * as technologyService from '../services/technologyService';
import * as subscriberService from '../services/subscriberService';

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
    console.log(entities);
    for(let entity in entities) {
      context[entity] = entities[entity][0].value;
    }
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
      let vacancies = '';
      if (response.data.vacancies.length) {
        vacancies = '\n Vacancies: ';
        response.data.vacancies.forEach((vacancy) => {
          vacancies += '\n' + ' - ' + vacancy.position;
        });
        vacancies += '\n' + 'More info:' + '\n' + 'https://resource-froggy.herokuapp.com/vacancies';
      }
      context.vacancies = vacancies;
      context.vacancyCount = response.data.vacancies.length;
      cb(context);
    });
  },
  'fetchLocation': (sessionId, context, cb) => {
    infoService.fetchLocation().then((response)=> {
      context.location = response.data.general_infos[0].description;
      cb(context);
    });
  },
  'fetchTechnologies': (sessionId, context, cb) => {
    technologyService.fetchTechnologies().then((response) => {
      let technologies = response.data.technologies.join('\n - ');
      context.technologies = "\n - " + technologies;
      cb(context);
    })
  },
  'fetchContactNo': (sessionId, context, cb) => {
    infoService.fetchContactNo().then((response) => {
      context.contactNo = response.data.general_infos[0].description;
      cb(context);
    })
  },
  'saveEmail': (sessionId, context, cb) => {
    subscriberService.saveContactInfo(context.email).then(() => {
      cb(context);
    })
  }
};

export default actions;
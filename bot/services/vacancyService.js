import axios from 'axios';

export function fetchVacancies() {
  return axios.get('https://resource-froggy.herokuapp.com/api/v1/vacancies');
}

export function fetchVacanciesByPosition(position) {
  return axios.get('https://resource-froggy.herokuapp.com/api/v1/vacancies?q=' + position);
}
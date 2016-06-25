import axios from 'axios';

export function fetchTechnologies() {
  return axios.get('https://resource-froggy.herokuapp.com/api/v1/technologies');
}
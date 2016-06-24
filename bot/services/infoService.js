import axios from 'axios';

export function fetchLocation() {
  return axios.get('https://resource-froggy.herokuapp.com/api/v1/infos?q=location');
}
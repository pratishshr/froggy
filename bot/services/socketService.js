import axios from 'axios';

export function postData(message) {
  axios.post('https://server-froggy.herokuapp.com/value', {message: message})
}
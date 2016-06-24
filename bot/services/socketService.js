import axios from 'axios';

export function postData(message) {
  axios.post('http://10.10.11.216:3000/value', {message: message})
}
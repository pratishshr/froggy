import axios from 'axios';

export function saveContactInfo(contactInfo) {
  return axios.post('https://resource-froggy.herokuapp.com/api/v1/subscribers', {
    "contact_info": contactInfo
  })
}
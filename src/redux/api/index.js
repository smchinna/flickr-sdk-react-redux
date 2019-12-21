// import { http } from '../http';

// const apiCall = (method, url, options) => {
//   switch (method) {
//     case 'GET':
//       return http
//         .get(url, options)
//         .then(response => response)
//         .catch(error => ({ error }));
//     case 'POST':
//       return http
//         .post(url, options)
//         .then(response => response)
//         .catch(error => ({ error }));
//     case 'PUT':
//       return http
//         .put(url, options)
//         .then(response => response)
//         .catch(error => ({ error }));
//     case 'DELETE':
//       return http
//         .delete(url, options)
//         .then(response => response)
//         .catch(error => ({ error }));
//     default:
//       return { error: 'Undefined API Method' };
//   }
// };
import Flickr from 'flickr-sdk';

const API_KEY = 'ca3900f9491486d6900bd49baad0a950'

const apiCall = () => {
  var flickr = new Flickr(API_KEY);
  return flickr;
}

export default apiCall;

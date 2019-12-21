import axios from 'axios';

const API_URL = "https://api.flickr.com/services/rest"
const API_KEY = 'ca3900f9491486d6900bd49baad0a950'


const instance = axios.create({
  baseURL: API_URL
});

// request header
instance.interceptors.request.use(
  config => parseConfig(config),
  error => Promise.reject(error)
);

// configuration parse
const parseConfig = (config) => {
  const configuration = { ...config };
  configuration.params['api_key'] = API_KEY
  return configuration;
};

// response parse
instance.interceptors.response.use(
  response => parseBody(response),
  error => {
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

// parse response
const parseBody = (response) => {
  console.log(typeof response.data)
  if (response.data.status_code === 200) {
    return response.data;
  } else {
    return parseError(response.data);
  }
};

// parse error
const parseError = (messages) => {
  if (messages.status.status_code === 401) {
    window.location.replace('/login');
    localStorage.removeItem('auth_token');
    return messages;
  } else {
    return Promise.reject({ messages: 'Something went Wrong' });
  }
};

export const http = instance;

import apiCall from './index';
let flickr = apiCall();

export const getGroupAPI = (queryParam) => {
  let result = flickr.groups.search(queryParam).then(function (res) {
    return res.body;
  }).catch(function (err) {
    return undefined;
  });
  return result;
};
  
export const getGalleryOfGroupAPI = (queryParam) => {
  let result = flickr.groups.pools.getPhotos(queryParam).then(function (res) {
    return res.body;
  }).catch(function (err) {
    return undefined;
  });
  return result;
}
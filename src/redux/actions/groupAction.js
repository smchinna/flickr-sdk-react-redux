import * as actionTypes from "../actionTypes";

export let getGroupAction = (data) => {
  return { type: actionTypes.FETCH_GROUP_DATA, data }
};

export let getGalleryAction = (groupId, page) => {
  return { type: actionTypes.FETCH_GALLERY_DATA, page, groupId}
}

export let makeEmptyGallery = () => {
  return { type: actionTypes.SAVE_EMPTY_GALLERY }
}

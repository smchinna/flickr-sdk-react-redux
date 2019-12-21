import * as actionTypes from "../actionTypes";

let initialSatte = {
  groupAutoFillData: [],
  groupData: [],
  total: 0,
  pages: 0,
  groupApiCalled: false,
  totalPhotos: 0,
  totalGalleryPage: 0,
  galleryData: [],
  activeGalleryPage: 0,
  groupNotFound: false
};

const reducer = (state = initialSatte, action) => {
  switch(action.type) {
    case actionTypes.SAVE_AUTO_FILL_DATA:
      return {
        ...state,
        groupAutoFillData: action.data,
        total: action.total,
        pages: action.pages,
        groupNotFound: false
      }

    case actionTypes.SAVE_GROUP_DATA:
      return {
        ...state,
        groupData: action.data,
        groupApiCalled: true,
        groupNotFound: false
      }

    case actionTypes.SAVE_GALLERY_DATA:
      return {
        ...state,
        galleryData: state.galleryData.concat(action.data),
        totalGalleryPage: action.totalPage,
        totalPhotos: action.totalPhotos,
        activeGalleryPage: action.activePage,
        groupNotFound: false
      }

    case actionTypes.SAVE_GROUP_NOT_FOUND:
      return {
        ...state,
        groupNotFound: true
      }

    default:
      return state;
  }
};

export default reducer;

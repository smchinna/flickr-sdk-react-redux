import { all, fork, takeLatest, call, put } from 'redux-saga/effects';

import * as actionTypes from '../../actionTypes';

import { getGroupAPI, getGalleryOfGroupAPI } from '../../api/group';

function* groupData(action) {
  //let groupData = yield select(getGroupData)
  let param = {
    extras: 'datecreate,date_activity,eighteenplus,invitation_only,needs_interstitial,non_members_privacy,pool_pending_count,privacy,member_pending_count,icon_urls,date_activity_detail,use_vespa,membership_info,has_pending_invite,secure_rules',
    format: 'json',
    text: action.data.text
  }
  try {
    let res = yield call(getGroupAPI, param);
    if(res && res.groups) {
      let data = res.groups;
      yield put({ type: actionTypes.SAVE_AUTO_FILL_DATA, data: data.group ? data.group : [] , total: data.total, pages: data.pages });
      if(action.data.setGroupData && action.data.setGroupData === 'setGroupData') {
        yield put({ type: actionTypes.SAVE_GROUP_DATA, data: data.group ? data.group : []})
      }
    } else {

    }
  } catch(e) {
    console.log("groupDataErr", e)
  }
}

function* galleryData(action) {
  //let groupData = yield select(getGroupData)
  let param = {
    extras: 'url_c',
    format: 'json',
    group_id: action.groupId,
    per_page: 20,
    page: action.page
  }
  try {
    let res = yield call(getGalleryOfGroupAPI, param);
    if(res && res.photos) {
      let obj = res.photos;
      yield put({ 
        type: actionTypes.SAVE_GALLERY_DATA, 
        data: obj.photo, 
        totalPage: obj.pages,
        totalPhotos: obj.total,
        activePage: action.page
      })
    } else {
      if(!res) {
        yield put({ type: actionTypes.SAVE_GROUP_NOT_FOUND })
      } else {
        yield put({ 
          type: actionTypes.SAVE_GALLERY_DATA, 
          data: [], 
          totalPage: 0,
          totalPhotos: 0,
          activePage: 0
        })
      }
    }
  } catch(e) {
    console.log("groupDataErr", e)
  }
}


/**group Sagas */
function* group() {
  yield takeLatest(actionTypes.FETCH_GROUP_DATA, groupData);
  yield takeLatest(actionTypes.FETCH_GALLERY_DATA, galleryData)
}

/**Root Auth */
export default function* rootSaga() {
  yield all([fork(group)]);
}

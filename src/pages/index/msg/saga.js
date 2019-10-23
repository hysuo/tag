import { takeEvery, put } from 'redux-saga/effects'

import { loadChatListtData,loadWeData} from './actionCreator'
import http from 'utils/http'

function loadChatListDataSaga() {
  return takeEvery('saga_load_chatlist', function* () {
    let result = yield http.get({url: '/api/chatlist'})
    yield put(loadChatListtData(result))
  })
}
function loadWeDataSaga() {
  return takeEvery('saga_wechatlist', function* (action) {
    let result = yield http.get({url: `/api/wechat${action.data}`})
    yield put(loadWeData(result))
  })
}
export {
    loadChatListDataSaga,
    loadWeDataSaga
  }
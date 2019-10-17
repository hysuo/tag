import { takeEvery, put } from 'redux-saga/effects'

import { loadChatListtData} from './actionCreator'
import http from 'utils/http'

function loadChatListDataSaga() {
  return takeEvery('saga_load_chatlist', function* () {
    let result = yield http.get({url: '/api/chatlist'})
    yield put(loadChatListtData(result))
  })
}
export {
    loadChatListDataSaga
  }
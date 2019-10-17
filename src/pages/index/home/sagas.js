import { takeEvery, put } from 'redux-saga/effects'

import { SAGA_TAGLISTDATA} from './actionTypes'
import { tagListData} from './actionCreator'

import http from 'utils/http'

function tagListDataSaga() {
  return takeEvery(SAGA_TAGLISTDATA, function* () {
    let result = yield http.get({url: '/api/tagList'})
    yield put(tagListData(result))
  })
}

export {
    tagListDataSaga
}
import { sagas as homeSaga } from 'pages/index/home/'
import { sagas as msgSaga } from 'pages/index/msg/'

function* sagas() {
  yield homeSaga.tagListDataSaga()
  yield msgSaga.loadChatListDataSaga()
}

export default sagas
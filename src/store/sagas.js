import { sagas as homeSaga } from 'pages/index/home/'

function* sagas() {
  yield homeSaga.tagListDataSaga()
}

export default sagas
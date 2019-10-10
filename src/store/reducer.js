import { combineReducers } from 'redux'

import { reducer as msg } from 'pages/index/msg/'
import {reducer as index} from 'pages/index/index/'

export default combineReducers({
  msg,
  index
})
import { combineReducers } from 'redux'

import { reducer as msg } from 'pages/index/msg/'
import {reducer as index} from 'pages/index/index/'
import {reducer as profile} from 'pages/index/profile/'
import {reducer as home} from 'pages/index/home'

export default combineReducers({
  msg,
  index,
  profile,
  home
})
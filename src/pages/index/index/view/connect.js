import { connect } from 'react-redux'
import { IndexActionCreator } from 'pages/index/index/'
import { changeHeadImg } from '../actionCreator';
import { changeSex } from '../actionCreator'

const publishState = (state) => {
  return {
    isShowPublish: state.index.isShowPublish,
    isUpdateheadimg: state.index.isUpdateheadimg,
    isUpadatesex: state.index.isUpadatesex
  }
}

const publishDispatch = (dispatch) => {
  let { changePublishState } = IndexActionCreator
  return {
    changePublishState() {
      dispatch(changePublishState())
    },
    changeHeadImg() {
      dispatch(changeHeadImg())
    },
    changeSex() {
      dispatch(changeSex())
    }
  }
}

export default connect(publishState, publishDispatch)
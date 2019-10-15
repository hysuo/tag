import { connect } from 'react-redux'
import { IndexActionCreator } from 'pages/index/index/'
import { changeHeadImg } from '../actionCreator';
import { changeSex } from '../actionCreator'
import { updateSex } from '../actionCreator'

const publishState = (state) => {
  return {
    isShowPublish: state.index.isShowPublish,
    isUpdateheadimg: state.index.isUpdateheadimg,
    isUpadatesex: state.index.isUpadatesex,
    sex: state.index.sex
  }
}

const publishDispatch = (dispatch) => {
  let { changePublishState } = IndexActionCreator
  return {
    changePublishState(data) {
      dispatch(changePublishState(data))
    },
    changeHeadImg(data) {
      dispatch(changeHeadImg(data))
    },
    changeSex(data) {
      dispatch(changeSex(data))
    },
    updateSex(data) {
      dispatch(updateSex(data))
    }
  }
}

export default connect(publishState, publishDispatch)
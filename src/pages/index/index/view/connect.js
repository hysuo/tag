import { connect } from 'react-redux'
import { IndexActionCreator } from 'pages/index/index/'
import { changeHeadImg } from '../actionCreator';
import { changeSex } from '../actionCreator'
import { updateSex } from '../actionCreator'
import { changImg } from '../actionCreator'

const publishState = (state) => {
  return {
    isShowPublish: state.index.isShowPublish,
    isUpdateheadimg: state.index.isUpdateheadimg,
    isUpadatesex: state.index.isUpadatesex,
    sex: state.index.sex,
    img: state.index.headimg
  }
}

const publishDispatch = (dispatch) => {
  let { changePublishState } = IndexActionCreator
  return {
    changePublishState(data,img) {
      dispatch(changePublishState(data,img))
    },
    changeHeadImg(data,img) {
      dispatch(changeHeadImg(data,img))
    },
    changeSex(data,img) {
      dispatch(changeSex(data,img))
    },
    updateSex(data,img) {
      dispatch(updateSex(data,img))
    },
    changImg(data,img) {
      dispatch(changImg(data,img))
    }
  }
}

export default connect(publishState, publishDispatch)
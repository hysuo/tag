import { connect } from 'react-redux'
import { IndexActionCreator } from 'pages/index/index/'

const publishState = (state) => {
  return {
    isShowPublish: state.index.isShowPublish
  }
}

const publishDispatch = (dispatch) => {
  let { changePublishState } = IndexActionCreator
  return {
    changePublishState() {
      dispatch(changePublishState())
    }
  }
}

export default connect(publishState, publishDispatch)
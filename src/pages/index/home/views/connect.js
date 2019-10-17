import { connect } from 'react-redux'

import { sagaTagListData } from '../actionCreator'

const mapState = (state) => {
  console.log(state.home.tagList)
  return {
    tagList: state.home.tagList
  }
}

const mapDispatch = (dispatch) => {
  return {
    tagListData() {
      dispatch(sagaTagListData())
    }
  }
}

export default connect(mapState, mapDispatch)
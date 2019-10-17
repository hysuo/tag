import { connect } from 'react-redux'

import { sagaTagListData } from '../actionCreator'

const mapState = (state) => {
  return {
    list: state.home.list
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
import { connect } from 'react-redux'
import { changewechatname } from '../../../actionCreator'

const mapState = (state) => {
  return {
    list: state.msg.list,
    selfInfo:state.msg.selfInfo
  }
}
const mapDispatch = (dispatch) => {
    return {
      changewechatname(data) {
        dispatch(changewechatname(data))
      }
    }
  }

export default connect(mapState,mapDispatch)
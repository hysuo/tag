import { connect } from 'react-redux'
import { changewechatname ,saga_load_chatlist} from '../../../actionCreator'

const mapState = (state) => {
  return {
    list: state.msg.chatlist,
  }
}
const mapDispatch = (dispatch) => {
    return {
      changewechatname(data) {
        dispatch(changewechatname(data))
      },
      // laodchatdata() {
      //   dispatch(saga_load_chatlist())
      // }
    }
  }

export default connect(mapState,mapDispatch)
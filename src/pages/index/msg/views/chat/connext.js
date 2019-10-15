import { connect } from 'react-redux'
import { addchat } from '../../actionCreator'

const mapState = (state) => {
  return {
    list: state.msg.chatlist,
    chat:state.msg.chat
  }
}
const mapDispatch = (dispatch) => {
    return {
        addchat(data) {
        dispatch(addchat(data))
      }
    }
  }

export default connect(mapState,mapDispatch)
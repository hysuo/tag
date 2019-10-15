import { connect } from 'react-redux'
import { addwechatlist,clearcontent } from '../../actionCreator'

const mapState = (state) => {
  return {
    list: state.msg.list,
    selfInfo:state.msg.selfInfo
  }
}
const mapDispatch = (dispatch) => {
    return {
      addwechat() {
        dispatch(addwechatlist())
      },
      clearcontent() {
        dispatch(clearcontent())
      }
    }
  }

export default connect(mapState,mapDispatch)
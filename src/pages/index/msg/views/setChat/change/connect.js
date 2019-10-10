import { connect } from 'react-redux'
// import { addwechatlist } from '../../actionCreator'

const mapState = (state) => {
  return {
    list: state.msg.list,
    selfInfo:state.msg.selfInfo
  }
}
// const mapDispatch = (dispatch) => {
//     return {
//       addwechat() {
//         dispatch(addwechatlist())
//       }
//     }
//   }

export default connect(mapState)
import { connect } from 'react-redux'
import { addwechatlist ,sagawechatlist} from '../../actionCreator'

const mapState = (state) => {
    return {
      list: state.msg.list,
      name: state.msg.name
    }
  }
const mapDispatch = (dispatch) => {
    return {
        addwechat(data) {
            dispatch(addwechatlist(data))
        },
        requestWe(data){
          dispatch(sagawechatlist(data))
        }
    }
}

export default connect(mapState,mapDispatch)
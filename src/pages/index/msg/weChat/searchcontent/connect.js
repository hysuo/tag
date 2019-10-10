import { connect } from 'react-redux'
import { searchcontent,clear } from '../../actionCreator'


const mapState = (state) => {
  return {
    list: state.msg.list
  }
}
const mapDispatch = (dispatch) => {
  return {
      search(data) {
          dispatch(searchcontent(data))
      },
      clear(){
        dispatch(clear())
      }
  }
}

export default connect(mapState,mapDispatch)
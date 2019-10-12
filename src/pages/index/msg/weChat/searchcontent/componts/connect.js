import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    list: state.msg.list
  }
}

export default connect(mapState)
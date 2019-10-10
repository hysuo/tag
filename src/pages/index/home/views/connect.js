import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    isShowPublish: state.index.isShowPublish
  }
}

export default connect(mapState)
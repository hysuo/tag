import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'
import {
  Span
} from '../changeUsr/styledusr.js'

class Spanimg extends Component {
	render() {
    return (
      <Span>
        <img src={this.props.img} alt="" onClick={() => {
          this.props.handleclick()
        }}/>
      </Span>
    )
  }
}
export default withRouter(Spanimg)
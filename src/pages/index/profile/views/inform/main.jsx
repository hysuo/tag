import React, { Component } from 'react'
import nextImg from '../../../../../assets/img/profile/next.png'
import {
  withRouter
} from 'react-router-dom'

import {
  Main
} from './Main.js'

class Mainer extends Component {
	render() {
    return (
      <Main>
        <div>
          <p>修改密码</p>
          <span onClick={() => this.handleCick('/profile/updatepwd')}><img src={nextImg} alt=""/></span>
        </div>
        <div>
          <p>修改绑定手机</p>
          <span onClick={() => this.handleCick('/profile/updatenum')}><img src={nextImg} alt=""/></span>
        </div>
      </Main>
     
    )
  }
  handleCick(path) {
    this.props.history.push(path)
  }
}

export default withRouter(Mainer)

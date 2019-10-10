import React, { PureComponent } from 'react'
import {RegisterButton as Register} from '../../../login/index/StyledIndex'

export default class RegisterButton extends PureComponent {
  render() {
    return (
        <Register {...this.props}>
          <b>注册</b>
        </Register>
    )
  }  
}
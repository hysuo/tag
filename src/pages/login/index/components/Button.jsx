import React, { PureComponent } from 'react'
import {Button} from '../StyledIndex'
export default class LoginButton extends PureComponent {
  render() {
    return (
        <Button {...this.props}>
          <b>登录</b>
        </Button>
    )
  }  
}
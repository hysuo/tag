import React, { PureComponent } from 'react'
import {Button} from '../StyledIndex'

export default class LoginButton extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Button {...this.props}>
          <b>登录</b>
        </Button>
    )
  }  
}
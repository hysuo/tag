import React, { PureComponent } from 'react'
import {Button} from '../../../login/index/StyledIndex'

export default class  ResetButton extends PureComponent {
  render() {
    return (
        <Button {...this.props}>
          <b>确定</b>
        </Button>
    )
  }  
}
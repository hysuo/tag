import React, { PureComponent } from 'react'
import {Button} from '../../../login/index/StyledIndex'

export default class  ResetButton extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Button {...this.props}>
          <b>确定</b>
        </Button>
    )
  }  
}
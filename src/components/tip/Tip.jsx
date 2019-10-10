import React, { Component } from 'react'
import checimg from 'images/check/xuanzekuanghou.svg'
import {
  TipContainer
  ,CheckContainer
} from './Styledt'

export default class Tip extends Component {
  render() {
    return (
      <div {...this.props}>
        <TipContainer>记住密码</TipContainer>
        <CheckContainer check={checimg}></CheckContainer>
        </div>
    )
  }
}

import React, { Component } from 'react'
import {
  TipContainer
  ,CheckContainer
} from './Styledt'

export default class Tip extends Component {
  render() {
    return (
      <div {...this.props}>
        <TipContainer>记住密码</TipContainer>
        <CheckContainer><input type="checkbox"></input></CheckContainer>
        </div>
    )
  }
}
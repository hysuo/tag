import React, { Component } from 'react'

import {
  TipContainer
} from './Styledt'
export default class Tiry extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <TipContainer {...this.props}>忘记密码</TipContainer>
    )
  }
}
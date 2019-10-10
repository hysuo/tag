import React, { Component } from 'react'
import {
  TagContainer
} from './StyledTag'

export default class Tag extends Component {
  render() {
    return (
      <TagContainer {...this.props}>
        <div className="span-1">{this.props.spanbox}</div>
        <div className="tag"></div>
        <span className="spanq">{this.props.spanbox1}</span>
        </TagContainer>
    )
  }
}

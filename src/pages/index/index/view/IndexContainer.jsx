import React, { Component } from 'react'
import IndexUI from './IndexUI'
class IndexContainer extends Component {
 render(){
   return (
     <IndexUI path={this.props.match.path} handleClick={this.handleClick} pathname = {this.props.location.pathname}></IndexUI>
   )
 }
 handleClick=(value) => {
   this.props.history.push(this.props.match.path + value)
 }
}
export default IndexContainer
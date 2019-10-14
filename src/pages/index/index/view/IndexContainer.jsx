import React, { Component } from 'react'
import IndexUI from './IndexUI'
import connect from './connect'
 
@connect
class IndexContainer extends Component {
 render(){
   return (
     <IndexUI path={this.props.match.path} handleClick={this.handleClick}  pathname = {this.props.location.pathname}
     isShowPublish = {this.props.isShowPublish}
     isUpdateheadimg = {this.props.isUpdateheadimg}
     isUpadatesex = {this.props.isUpadatesex}
     changeHeadImg = {this.props.changeHeadImg}
     changeSex = {this.props.changeSex}
     changePublishState = {this.props.changePublishState}></IndexUI>
   )
 }
 handleClick=(value) => {
   this.props.history.push(this.props.match.path + value)
 }
 componentDidMount(){
  //  console.log(this.props)
 }
}
export default IndexContainer
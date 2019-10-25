import React, { Component } from 'react'
import axios from 'axios'
import IndexUI from './IndexUI'
import connect from './connect'
// import headImg from 'img/profile/headimgbig.png'
 
@connect
class IndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      img: this.props.img,
    }
  }
 render(){
   return (
     <IndexUI path={this.props.match.path} handleClick={this.handleClick}  pathname = {this.props.location.pathname}
     isShowPublish = {this.props.isShowPublish} publishDynamic = {this.publishDynamic} publishTag = {this.publishTag}
     isUpdateheadimg = {this.props.isUpdateheadimg}
     isUpadatesex = {this.props.isUpadatesex}
     changeHeadImg = {this.props.changeHeadImg}
     changeSex = {this.props.changeSex}
     updateSex = {this.props.updateSex}
     sex = {this.props.sex}
     upload = {this.upload}
     img = {this.state.img}
     previmg = {this.props.img}
     changImg = {this.props.changImg}
     cancelimg = {this.cancelImg}
     changeMockImg = {this.changeMockImg}
     
     changePublishState = {this.props.changePublishState}></IndexUI>
   )
 }
 handleClick=(value) => {
   this.props.history.push(this.props.match.path + value)
 }
 componentDidMount(){
  //  console.log(this.props)
  this.forceUpdate()
 }
 publishDynamic=()=>{
  this.props.history.push('/publishDynamic')
 }
 publishTag=()=>{
  this.props.history.push('/publishTag')
 }
 cancelImg = () => {
  this.setState({
    img: this.props.img
  })
 }
  upload = (c) => {
    let $c = document.querySelector(c)
    let file = $c.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      this.setState({
        img: e.target.result
      })     
    }
  
  }
  changeMockImg = (path) => {
    axios.patch(('/data/' + 1),{
      headimg: this.state.img
    })
    // this.props.history.push('/index')
    // this.props.history.push('/index/profile')
    // this.props.to('/index/profile')
    // console.log(this.props)
    this.props.history.replace('/index/profile/1')
    // this.props.history.push('/index/profile')
    // this.forceUpdate()
  }
}

export default IndexContainer
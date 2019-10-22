import React, { Component } from 'react'
import Exif from 'exif-js'

import IndexUI from './IndexUI'
import connect from './connect'
// import headImg from 'img/profile/headimgbig.png'
 
@connect
class IndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      img: this.props.img
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
     changePublishState = {this.props.changePublishState}></IndexUI>
   )
 }
 handleClick=(value) => {
   this.props.history.push(this.props.match.path + value)
 }
 componentDidMount(){
  //  console.log(this.props)
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
    // const or = getImageTag(file, 'Orientation')
    // // reader.readAsDataURL(file)
    // reader.onloadend = function () {
    //   // this.result就是转化后的结果
    //     const result = this.result;
    //     // 将base64添加到图片标签上
    //     const img = new Image();
    //     img.src = result;
    //     img.onload = function () {
    //       // 这里添加旋转图片的代码
    //       const data = this.getRotateImg(img, or);
    //       // 如果上传接口不支持base64，则这里需要将base64转为文档流
    //       const f = dataURLtoFile(data);
    //       // 调用接口，上传图片
    //     }
    // }
  }
  // getImageTag = (file, tag) => {
  //   if (!file) return 0
  //   return new Promise((resolve, reject) => {
  //       Exif.getData(file, function () {
  //           const o = Exif.getTag(this, tag)
  //           resolve(o)
  //       })
  //   })
  // }

}

export default IndexContainer
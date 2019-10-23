import React, { Component } from 'react'
import DynamicUI from './DynamicUI'
import http from 'utils/http'

export default class DynamicContainer extends Component {
  state={
    flagM : '',
    title:'动态',
    marginLeft:'1.33rem',
    dynamicList:[],
    zanList:[]
  }
 render(){
   return (
     <DynamicUI flagM={this.state.flagM} isShowMore={this.isShowMore} goToDetail={this.goToDetail} {...this.state} zanActive={this.zanActive}
     chatForOne={this.chatForOne} focusOn={this.focusOn}></DynamicUI>
   )
 }
  isShowMore=(id)=>{
    this.setState({
      flagM:id
    })
  }
  goToDetail=(id)=>{
    this.props.history.push('/dynamic/dynamicDetail',{id})
  }
  zanActive=(id)=>{
    let zans = this.state.zanList
    zans.forEach(element => {
      if(element.id == id){
        element.flag = !element.flag
      }
    })
    zans = JSON.stringify(zans)
    localStorage.setItem('zans', zans)
    zans = JSON.parse(zans)
    this.setState({
      zanList:zans
    })
  }
  chatForOne=(id, name)=>{
    this.props.history.push('/msg/chat/'+ id, {name})
  }
  focusOn=()=>{
    this.setState({
      flagM:''
    })
  }
  async componentDidMount(){
    let dynamicList = await http.get({
      url: '/api/dynamicList'
    })
    dynamicList = dynamicList.reverse()
    this.setState({
      dynamicList:dynamicList
    })
    let dynamics = dynamicList
    let zans = []
    for(let i = 0; i<dynamics.length; i++){
      let zan = {
        id:dynamics[i].id,
        flag: false
      }
      zans.push(zan)
    }
    zans = JSON.stringify(zans)
    localStorage.setItem('zans', zans)
    zans = JSON.parse(zans)
    this.setState({
      zanList:zans
    })
   }
}

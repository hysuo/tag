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
     <DynamicUI flagM={this.state.flagM} isShowMore={this.isShowMore} goToDetail={this.goToDetail} {...this.state} zanActive={this.zanActive}></DynamicUI>
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
    console.log(this.state.zanList)
  }
  async componentDidMount(){
    let dynamicList = await http.get({
      url: '/api/dynamicList'
    })
    this.setState({
      dynamicList:dynamicList.data
    })
    let dynamics = dynamicList.data
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

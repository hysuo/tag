import React, { Component } from 'react'
import SearchContentUI from './SearchContentUI'
import connect  from './connect';
@connect
 class SearchContentContainer extends Component {
   state={
     content:[]
   }
 render(){
   return (
     <SearchContentUI
      content = {this.state.content}
      pathname={this.props.location.pathname} 
      handleClick={this.handleClick} 
      path={this.props.match.path} 
      goBack={this.goBack}
      search={this.search}
      ></SearchContentUI>
   )
 }
 handleClick=(value)=>{
  this.props.history.push(this.props.match.path + value)
 }
 goBack=()=>{
  this.props.history.push('/tag/wechat')
 }
 search=(value)=>{
   this.props.list.forEach((item,index)=>{
      if(item.content.match(new RegExp(value)) && value!==''){
        this.props.search(item.content)
      }
   })
   if(!value){
     this.props.clear()
   }
 }

}
export default SearchContentContainer
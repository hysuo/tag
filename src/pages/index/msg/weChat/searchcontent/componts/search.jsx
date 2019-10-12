import React, { Component } from 'react'
import search from 'assets/img/home/search@2x.png'
export default class Search extends Component {
 render(){
   return (
    <div>
        <input type="text" ref='search' onChange={()=>{this.props.search(this.refs.search.value)}}/>
        <img src={search} alt=""/>    
    </div>
   )
 }
}

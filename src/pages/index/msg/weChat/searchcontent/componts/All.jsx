import React, { Component } from 'react'
import connect from './connect'

@connect
class All extends Component {
 render(){
   return (
     <div>all</div>
   )
 }
}
export default All
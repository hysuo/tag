import React, { Component } from 'react'
import connect from './connect'
import {AllContainer} from './Styled'
@connect
class AllMsg extends Component {
 render(){
   return (
     <AllContainer>
       <ul>
         {
           this.props.list.map((value,index) => {
             return(
               <li key={index}>
                 <img src={value.img} alt=""/>
                 <span className={value.active ? value.active : ''}>{value.content}</span>
               </li>
             )
           })
         }
       </ul>
     </AllContainer>
   )
 }
}
export default AllMsg
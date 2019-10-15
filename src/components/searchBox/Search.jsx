import React ,{Component} from 'react'
import {Search as IndexContainer} from '../../pages/mainPageCategroy/index/StyledIndex'
// import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
    }
 render(){
   return (
     <IndexContainer {...this.props}>
         <div className='bg'>
         <div className="mosk" onClick={this.props.controllervisible}></div><div className="search">
        <input type="text" onChange={()=>{this.props.searchFromKeywords(this.refs.dfh.value)}} ref="dfh"/>
        <div></div>
    </div>
    
    <div className= "tap">
        {this.props.searchs.map((value,index)=>(
            <div className="inputbox" key={index}>  {value}
            <div className="tagq"></div>
        </div>
        ))}
        <div className="tip">{this.props.tag}</div>
    </div>
    </div>
    </IndexContainer>
   )
 }
//  handleBack(){
//     console.log(1)
//    this.setState({
//        hide:true
//    })
// }
// handleSearchFromTag(e){
//    // this.setState({
//    //     keyword:e.target.value
//    // })
//    // console.log(this.state.kyword)e
//    // console.log()
//    let keytag=this.refs.dfh.value
//    let arr =[]
//    for(var value of (this.state.datatag)){
   
//    for (let i = 0; i < keytag.length; i++) {
//        // 正则匹配所有的文本
//        let re = new RegExp(keytag[i], 'g');
//        if (re.test(value.titletag)) {
//        console.log(value.titletag);
//        arr.push(value.titletag)
//        }
//        }
       
       
//        console.log(arr)
//        this.setState({searchs:arr})
// }
// }
}
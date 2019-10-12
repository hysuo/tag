import React, { Component } from 'react'
import {IndexContainer} from '../StyledIndex'
import Tag from 'components/tag/Tag'
export default class MainPageCategory extends Component {
    constructor(props){
        super(props)
        this.state={
            hide:true
            ,datatag:[{id:0,titletag:'退役熬夜运动员',little:'999位成员已参加'}
                       ,{id:1,titletag:'o',little:'999位成员已参加'}
                       ,{id:2,titletag:'你是谁',little:'999位成员已参加'}
                       ,{id:3,titletag:'账号没了',little:'999位成员已参加'}
                       ,{id:4,titletag:'QQ',little:'999位成员已参加'}
                       ,{id:5,titletag:'很爱',little:"rgfgfhn加密"}
                       ,{id:6,titletag:'额外y',little:'热发反反复复反反复复反反复复t'}
                       ,{id:7,titletag:'熬',little:'依赖'}],
        keyword:'e'
        ,searchs:[]
                    }
        this.handleSearchTag =this.handleSearchTag.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleSearchFromTag = this.handleSearchFromTag.bind(this)
    }
     render(){
      return (
    <IndexContainer {...this.state}>
    <div className="div"></div>
    <div className="mosk" onClick={this.handleBack}></div>
    <div className="search">
        <input type="text" onChange={this.handleSearchFromTag} ref="dfh"/>
        <div></div>
    </div>
    
    <div className= "tap">
        {this.state.searchs.map((value,index)=>(
            <div className="inputbox" key={index}>  {value}
            <div className="tagq"></div>
        </div>
        ))}
        
        <div className="tip">na,就只有这么duo了</div>
    </div>

    <header><span>真的植草</span><div className="searchbox0" onClick={this.handleSearchTag}></div></header>
    <section>
        <div>
        {this.state.datatag.map((value,index)=>(
            <article key={value.id}> 
        <div className="circle0">
            <div className="circle">
            </div>
        </div>

        <Tag spanbox={value.titletag} spanbox1={value.little}></Tag>
    </article>
        ))}</div>
            
    </section>
    </IndexContainer>
   )
 }
 handleSearchTag(){
     
     this.setState({
         hide:false
     })
 }
 handleBack(){
     console.log(1)
    this.setState({
        hide:true
    })
 }
 handleSearchFromTag(e){
    // this.setState({
    //     keyword:e.target.value
    // })
    // console.log(this.state.kyword)e
    // console.log()
    let keytag=this.refs.dfh.value
    let arr =[]
    for(var value of (this.state.datatag)){
    
    for (let i = 0; i < keytag.length; i++) {
        // 正则匹配所有的文本
        let re = new RegExp(keytag[i], 'g');
        if (re.test(value.titletag)) {
        console.log(value.titletag);
        arr.push(value.titletag)
        }
        }
        
        
        console.log(arr)
        this.setState({searchs:arr})
}
 }
}

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {IndexContainer} from '../StyledIndex'
import Tag from 'components/tag/Tag'
import Search from 'components/searchBox/Search'
class MainPageCategory extends Component {
    constructor(props){
        super(props)
        this.state={
        hide:true,
         datatag:[{id:0,titletag:'退役熬夜运动员',little:'999位成员已参加'}
                       ,{id:1,titletag:'o',little:'999位成员已参加'}
                       ,{id:2,titletag:'你是谁',little:'999位成员已参加'}
                       ,{id:3,titletag:'账号没了',little:'999位成员已参加'}
                       ,{id:4,titletag:'QQ',little:'999位成员已参加'}
                       ,{id:5,titletag:'很爱',little:"rgfgfhn加密"}
                       ,{id:6,titletag:'额外y',little:'热发反反复复反反复复反反复复t'}
                       ,{id:7,titletag:'熬',little:'依赖'}
                    ],
        keyword:'e',
        searchs:[]
                    }
        this.handleSearchTag =this.handleSearchTag.bind(this) // click bg visible
        this.handleBack = this.handleBack.bind(this) // click anywhere bg 
        this.handleSearchFromTag = this.handleSearchFromTag.bind(this) // 查找
        this.handleTag= this.handleTag.bind(this)
    }
    UNSAFE_componentWillMount(){
        fetch('http://localhost:9002/tag',{
                 method: "GET",
                //  headers: {
                //      'Content-type': 'application/json'
                //  }
             }).then(
                 (res)=> {
                     return res.json()
                 }
             ).then(
                 (res)=>{
                     console.log(res.chat)
                    //  console.log(this)
                    this.setState({datatag:res.chat
                    })
                    // console.log(this.datatag)
                 }
             )
             .catch(()=>{
                 //错误
             })
    }
     render(){
      return (
    <IndexContainer {...this.state}>
            <Search controllervisible={this.handleBack} searchFromKeywords={this.handleSearchFromTag} datatag={this.state.datatag} searchs={this.state.searchs} keywords={this.state.keyword} hide={this.state.hide} tag="na,只有这么多"></Search>
    <div className="div"></div>
    <header><span>真的自嘈</span>
    <div className="searchbox0" onClick={this.handleSearchTag}></div></header>
    <section>
        <div>
        {this.state.datatag.map((value,index)=>(
            <article key={value.id} onClick={this.handleTag.bind(this,value.id)}> 
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
    this.setState({
        hide:true
    })
 }
 handleSearchFromTag(value){
    let keytag=value
    let arr =[]
    for(var value of (this.state.datatag)){
    for (let i = 0; i < keytag.length; i++) {
        let re = new RegExp(keytag[i], 'g');
        if (re.test(value.titletag)){
        arr.push(value.titletag)
        }
        }
        this.setState({searchs:arr})
}
 }
 handleTag(e){console.log(this.props)
     this.props.history.push('/tag/wechat')
 }
}
    export default withRouter(MainPageCategory) 
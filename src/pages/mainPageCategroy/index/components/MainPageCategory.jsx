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
         datatag:[],
        keyword:'e',
        searchs:[],
        jack:'',
        tagtag:''
                    }
        this.handleSearchTag =this.handleSearchTag.bind(this) // click bg visible
        this.handleBack = this.handleBack.bind(this) // click anywhere bg 
        this.handleSearchFromTag = this.handleSearchFromTag.bind(this) // 查找
        this.handleTag= this.handleTag.bind(this)
        this.jus= this.jus.bind(this)
    }
    UNSAFE_componentWillMount(){
        let ip= this.props.location.state.id
        this.setState({jack:this.jus(ip)})
        fetch('http://localhost:9002/tag',{
                 method: "GET",
             }).then(
                 (res)=> {
                     return res.json()
                 }
             ).then(
                 (res)=>{
                     let chat=[] 
                      if(this.state.jack==='hot'){
                        chat=res.hot
                      }else if(this.state.jack==='premire')
                      {
                        chat=res.premire
                      }
                      else if(this.state.jack==='chat')
                      {
                        chat=res.chat
                      }else if(this.state.jack==='back'){
                        chat=res.back
                        console.log(chat)
                      }

                    this.setState({datatag:chat
                    })
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
    <header><span>{this.state.tagtag}</span>
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
 jus(ip){
     console.log(typeof(ip));
     
    if(ip==='001'){
        this.setState({tagtag:'热词霸主'})
         return 'hot'
    }else if(ip==='002'){
        this.setState({tagtag:'请你赞扬'})
        return 'premire'
    }else if(ip==='003'){
        this.setState({tagtag:'真的自嘈'})
          return 'premire'
    }else{
        this.setState({tagtag:'复古主义'})
        return "back"}
 }
}
    export default withRouter(MainPageCategory) 
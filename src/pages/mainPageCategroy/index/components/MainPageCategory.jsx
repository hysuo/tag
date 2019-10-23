import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import {IndexContainer} from '../StyledIndex'
import Tag from 'components/tag/Tag'
import Search from 'components/searchBox/Search'
import http from 'utils/http'
class MainPageCategory extends PureComponent {
    constructor(props){
        super(props)
        this.state={
        hide:true,
        datatag:{
            "hot":[
                
                {
                    "id":0,
                    "titletag":"烈酒敬往事",
                    "little":99
        
                },
                {
                    "id":1,
                    "titletag":"永爱胖迪",
                    "little":9999
        
                },
                {
                    "id":2,
                    "titletag":"倾城笑眸",
                    "little":99
        
                },
                {
                    "id":3,
                    "titletag":"烟味少nian",
                    "little":99
        
                },
                {
                    "id":4,
                    "titletag":"Dearひ不准嚣张",
                    "little":99
        
                },
                {
                    "id":5,
                    "titletag":"都不是小仙女",
                    "little":99
        
                },
                {
                    "id":6,
                    "titletag":"卧槽",
                    "little":11
                }
            ],
            "premire":[
                {
                    "id":0,
                    "titletag":"不忘初心",
                    "little":99
        
                },
                {
                    "id":1,
                    "titletag":"陌上烟雨",
                    "little":99
        
                },
                {
                    "id":2,
                    "titletag":"南岸初晴",
                    "little":9999
        
                },
                {
                    "id":3,
                    "titletag":"落蝶",
                    "little":99
        
                },
                {
                    "id":4,
                    "titletag":"柚子yoki",
                    "little":99
        
                },
                {
                    "id":5,
                    "titletag":"喜欢的蓝色",
                    "little":99
        
                },
                {
                    "id":6,
                    "titletag":"青春旳沙漏",
                    "little":99
        
                },{
                    "id":7,
                    "titletag":"我们『范2°的青春",
                    "little":9999
        
                },
                {
                    "id":8,
                    "titletag":"忘不掉的ヤ壹切",
                    "little":99
        
                },
                {
                    "id":9,
                    "titletag":"旧日时光里的一抹微笑",
                    "little":99
        
                },
                {
                    "id":10,
                    "titletag":"回忆如烟烟如梦",
                    "little":99
        
                },
                {
                    "id":11,
                    "titletag":"想死问过涐滴意见没",
                    "little":99
        
                },
                {
                    "id":12,
                    "titletag":"人心是善变的",
                    "little":9999
        
                },
                {
                    "id":13,
                    "titletag":"霸占你的吣",
                    "little":99
        
                },
                {
                    "id":14,
                    "titletag":"说我很邪恶°",
                    "little":99
        
                },
                {
                    "id":15,
                    "titletag":"仰你教的背",
                    "little":99
        
                },
                {
                    "id":19,
                    "titletag":"都不是小仙女",
                    "little":99
        
                }
            ],
            "chat":[
                {
                    "id":0,
                    "titletag":"怦然心动",
                    "little":99
                },
                {
                    "id":1,
                    "titletag":"選擇忘記",
                    "little":90
                },
                {
                    "id":2,
                    "titletag":"回忆如烟烟如梦",
                    "little":99
        
                },
                {
                    "id":3,
                    "titletag":"想死问过涐滴意见没",
                    "little":99
        
                },
                {
                    "id":4,
                    "titletag":"人心是善变的",
                    "little":9999
        
                },
                {
                    "id":5,
                    "titletag":"霸占你的吣",
                    "little":99
        
                },
                {
                    "id":6,
                    "titletag":"说我很邪恶°",
                    "little":90
        
                },
                {
                    "id":7,
                    "titletag":"仰你教的背",
                    "little":365
        
                },
                {
                    "id":8,
                    "titletag":"都不是小仙女",
                    "little":23
        
                }
            ],
            "back":[
                {
                    "id":0,
                    "titletag":"牛逼不需要装逼",
                    "little":45
                },
                {
                    "id":1,
                    "titletag":"卧槽",
                    "little":78
                },
                {
                    "id":2,
                    "titletag":"回忆如烟烟如梦",
                    "little":99887
        
                },
                {
                    "id":5,
                    "titletag":"想死问过涐滴意见没",
                    "little":65
        
                },
                {
                    "id":4,
                    "titletag":"人心是善变的",
                    "little":9999
        
                },
                {
                    "id":3,
                    "titletag":"霸占你的吣",
                    "little":95
        
                },
                {
                    "id":9,
                    "titletag":"说我很邪恶°",
                    "little":656
        
                },
                {
                    "id":98,
                    "titletag":"仰你教的背",
                    "little":39
        
                },
                {
                    "id":50,
                    "titletag":"都不是小仙女",
                    "little":99
        
                }
            ]
        },
        datadata:'',
        keyword:'e',
        searchs:[],
        tagtag:''}           
        this.handleSearchTag =this.handleSearchTag.bind(this) // click bg visible
        this.handleBack = this.handleBack.bind(this) // click anywhere bg 
        this.handleSearchFromTag = this.handleSearchFromTag.bind(this) // 查找
        // this.handleTag(value)= this.handleTag.bind(this,value)
        this.jus= this.jus.bind(this)
    }
    async componentWillMount(){
        let ipq= this.props.location.state.id
        let chat= this.jus(ipq)
        this.setState({datadata:chat})
    }
    render(){
        let chatt= this.state.datadata
        return (
    <IndexContainer>
    <Search controllervisible={this.handleBack} searchFromKeywords={this.handleSearchFromTag} datatag={this.props.datatag} searchs={this.state.searchs} keywords={this.state.keyword} hide={this.state.hide} tag="na,只有这么多"></Search>
    <div className="div"></div>
    <header><span>{this.state.tagtag}</span>
    <div className="searchbox0" onClick={this.handleSearchTag}></div></header>
    <section>
        <div>
        {
            this.state.datatag[chatt].map((value,index)=>(
            <article key={value.id} onClick={()=>{
                this.props.history.push('/tag/wechat',{id:value.id,name:value.titletag})
            }}> 
        <div className="circle0">
            <div className="circle">
            </div>
        </div>
        
        <Tag spanbox={value.titletag} spanbox1={value.little}></Tag>
    </article>
        ))
            
            }
        </div>
        
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
 handleTag=(value)=>{
     console.log(value)
    //  this.props.history.push('/tag/wechat')
 }
//  jus(ip){
//     switch(ip){
//     case '001':
//         this.setState({tagtag:'热词霸主'})
//          return 'hot'
//          break;
//      case '002':
//         this.setState({tagtag:'请你赞扬'})
//         return 'premire'
//         break;
//     case '003':
//         this.setState({tagtag:'真的自嘈'})
//           return 'premire'
//           break;
//     case '004':
//         this.setState({tagtag:'复古主义'})
//         return "back"
//         break;
//  }}
jus(ipq){
        switch(ipq){
            case '001':
                this.setState({tagtag:'热词霸主'})
                return "hot"
                 break;
             case '002':
                this.setState({tagtag:'请你赞扬'})
                return "premire"

                break;
            case '003':
                this.setState({tagtag:'真的自嘈'})
                return "chat"
                  break;
            default:
                this.setState({tagtag:'复古主义'})
                return "back"
                break;
         }
        }
}
    export default withRouter(MainPageCategory) 
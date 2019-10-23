import React,{ PureComponent } from 'react'
import IndexUI from './IndexUI'
import http from 'utils/http'
class IndexContainer extends PureComponent {
constructor(props){
  super(props)
  this.state={
    datatag:[]
  }
  this.jus= this.jus.bind(this)
}
  async componentWillMount(){
    let ipq= this.props.location.state.id
    let iq=this.jus(ipq)
    let result =await http.get({url:'http://localhost:9002/tag'})
    let chat= result[iq]
    this.setState({datatag:chat})
    console.log(this.state.datatag)
}
   render(){
   return (
    <IndexUI data={this.state.datatag}></IndexUI>
   )
 }
 jus(ip){
  switch(ip){
  case '001':
      this.setState({tagtag:'热词霸主'})
       return 'hot'
       break;
   case '002':
      this.setState({tagtag:'请你赞扬'})
      return 'premire'
      break;
  case '003':
      this.setState({tagtag:'真的自嘈'})
        return 'premire'
        break;
  case '004':
      this.setState({tagtag:'复古主义'})
      return "back"
      break;
}}
}
export default IndexContainer
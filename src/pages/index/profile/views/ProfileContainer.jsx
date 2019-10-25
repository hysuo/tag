import React, { Component } from 'react'
import _ from 'loadsh'
import {
  ProfileContainer
} from '../Styledprofile/Styledprofile.js' 

import connect from './connect.js'
import axios from 'axios'

import Head from './Head'
import Headbottom from './Headbottom'
import Main from './Main'
import Foot from './Foot'

@connect
class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      // usrname: this.props.usrname,
      // signature: this.props.signature,
      usrItem: {},
     
    }
  }
  render(){
    
    return (
      <ProfileContainer>
        <header>
          <Head data={this.state.usrItem}></Head>
          <Headbottom data={this.state.usrItem}></Headbottom>
        </header>
        <Main></Main>
        <Foot></Foot>
      </ProfileContainer>
    )
  }
  async componentDidMount(){
    let result = await axios.get('/data')
    
    let usrList = result.data
    for(var i = 0, usr; i < usrList.length; i++){
      if(usrList[i].usrname === this.props.usrname){
        usr = usrList[i]
      }
    }
    this.setState({
      usrItem: usr
    })
    // window.location.reload()
    console.log(0)
    
  }  
}
export default Profile

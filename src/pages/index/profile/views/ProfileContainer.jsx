import React, { Component } from 'react'
import {
  ProfileContainer
} from '../Styledprofile/Styledprofile.js' 

import connect from './connect.js'
import Head from './Head'
import Headbottom from './Headbottom'
import Main from './Main'
import Foot from './Foot'

@connect
class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      usrname: this.props.usrname,
      signature: this.props.signature,
    }
  }
  render(){
    return (
      <ProfileContainer>
        <header>
          <Head usr={this.state.usrname} snt={this.state.signature}></Head>
          <Headbottom></Headbottom>
        </header>
        <Main></Main>
        <Foot></Foot>
      </ProfileContainer>
    )
  }  
}
export default Profile

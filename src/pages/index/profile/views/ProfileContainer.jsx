import React, { Component } from 'react'
import {
  ProfileContainer
} from '../Styledprofile/Styledprofile.js' 

import Head from './Head'
import Headbottom from './Headbottom'
import Main from './Main'
import Foot from './Foot'

export default class Profile extends Component {
 render(){
   return (
     <ProfileContainer>
       <header>
         <Head></Head>
         <Headbottom></Headbottom>
       </header>
       <Main></Main>
       <Foot></Foot>
     </ProfileContainer>
   )
 }
}

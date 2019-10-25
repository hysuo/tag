import React, { PureComponent } from 'react'
import axios from 'axios'

import {
	withRouter
} from 'react-router-dom'

import {
  DynamicContainer
} from './dynamic.js'

import Head from './Head'
import Main from './Main'
import Headbottom from '../Headbottom'
import Body from './Body'
import connect from '../connect'

@connect 
class Dynamic extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      usrItem: {}
    }
  }
  render() {
    return (
      <DynamicContainer>
        <header>
          <div className="header">
            <Head></Head>
            <Main data={this.state.usrItem}></Main>
            <Headbottom></Headbottom>
          </div>
        </header>
        <Body></Body>
      </DynamicContainer>
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
 
  }  
}

export default withRouter(Dynamic)
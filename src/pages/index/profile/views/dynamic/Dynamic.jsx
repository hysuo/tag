import React, { PureComponent } from 'react'

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

class Dynamic extends PureComponent {
  render() {
    return (
      <DynamicContainer>
        <header>
          <div className="header">
            <Head></Head>
            <Main></Main>
            <Headbottom></Headbottom>
          </div>
        </header>
        <Body></Body>
      </DynamicContainer>
    )
  }
}

export default withRouter(Dynamic)
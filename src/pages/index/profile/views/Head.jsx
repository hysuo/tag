import React, { Component } from 'react'
import {
  Head
} from '../Styledprofile/Styledprofile.js'
import HeadImg from '../../../../assets/img/profile/headImg.png'
export default class Header extends Component {
  render() {
    return (
      <Head>
        <div className="headLeft">
          <img src={HeadImg} alt=""/>
        </div>
        <div className="headRight">
          <div className="username">kuoluo</div>
          <div className="signature">人在塔在</div>
        </div>
      </Head>
    )
  }
}
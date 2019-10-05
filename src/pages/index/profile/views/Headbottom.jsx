import React, { Component } from 'react'
import {
    Headbottom
} from '../Styledprofile/Styledprofile.js'

const tabList = [
    {
        num: '213',
        key: 'Follow',
        txt: '关注'
    },
    {
        num: '254',
        key: 'Fans',
        txt: '粉丝'
    },
    {
        num: '365',
        key: 'Dynamic',
        txt: '动态'
    },
]
export default class Head extends Component {
   
  render() {
    return (
      <Headbottom>
          {
              tabList.map((value,index) => {
                  return <ul
                    key={value.key}
                  >
                      <li>{value.num}</li>
                      <li>{value.txt}</li>
                  </ul>
              })
          }
      </Headbottom>
    )
  }
}
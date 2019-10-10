import React, { PureComponent } from 'react'

import {
	withRouter
} from 'react-router-dom'

import {
  UsrList
} from './follow.js'
import usrimg from '../../../../../assets/img/profile/usrimg.png'
import next from '../../../../../assets/img/profile/next.png'

const usrlist = [
  {
    name: 'KUOLUO1',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO2',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO3',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO4',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO5',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO6',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO7',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO8',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO9',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO10',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO11',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: 'KUOLUO12',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
]
class Usr extends PureComponent {
	render() {
    return (
      <UsrList>
        {
          usrlist.map((value, index) => {
            return <div
              className="usr_content"
              key={value.name} 
            >
               <div
                className="usr_item">
                <div className="img">
                  <img src={value.img} alt=""/>
                </div>
                <div className="usr_right">
                  <p className="usrname">{value.name}</p>
                  <p className="signature">{value.signature}</p>
                </div>
                <div className="next"><img src={next} alt=""/></div>
              </div>
            </div>
          })
        }
      </UsrList>
    )
  }
}

export default withRouter(Usr)
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
    name: '一只小企鹅',
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571680545598&di=43f9a526b0a407e85b0d9355f57ee368&imgtype=0&src=http%3A%2F%2Fimg2.3png.com%2F10ef89ba24cd7bbff5440f6bd2a20b7cbea9.png',
    signature: '我是一只快乐的小企鹅'
  },
  {
    name: '小安',
    img: 'http://tx.haiqq.com/uploads/allimg/170419/10020TD0-5.jpg',
    signature: '晚安 世界',
    "attention":30,
    "fans":356,
    "dy":[
        {
            "id":"00110",
            "time":"2019-10-20 17:00",
            "text":"明天我要开始减肥！",
            "img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2758290440,4085495091&fm=26&gp=0.jpg",
            "zan":77,
            "praise":99
        },
        {
            "id":"00111",
            "time":"2019-10-6 7:00",
            "text":"我真的太强了",
            "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983218979&di=124ff984b7d8526f0f792c081e796dc8&imgtype=jpg&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-18%2F041256654.jpg",
            "zan":35,
            "praise":10
        },
        {
            "id":"00112",
            "time":"2019-10-1 6:00",
            "text":"这也太好看了吧",
            "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983298788&di=6e4b690cab9c8eea49bca2dcb4062fdd&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120302%2F2786001_170856553000_2.jpg",
            "zan":70,
            "praise":50
        }
    ]

  },
  {
    name: '安妮',
    img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3107940057,2280556932&fm=15&gp=0.jpg',
    signature: '你看到了我的小熊吗'
  },
  {
    name: '蜡笔小新',
    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2138676754,381437360&fm=26&gp=0.jpg',
    signature: '你喜欢吃青椒吗?'
  },
  {
    name: '小丸子',
    img: 'http://b-ssl.duitang.com/uploads/item/201810/28/20181028132354_nvwuw.jpg',
    signature: '我阔落要加冰啊'
  },
  {
    name: '海绵宝宝',
    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3476823657,1622627842&fm=26&gp=0.jpg',
    signature: '我准备好了'
  },
  {
    name: '皮卡丘',
    img: 'http://www.agri35.com/UploadFiles/img_0_2111588833_3264269301_26.jpg',
    signature: '皮卡~皮卡~'
  },
  {
    name: '蜡笔没有心',
    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2738985614,358373208&fm=26&gp=0.jpg',
    signature: '我阔落要加冰啊'
  },
  {
    name: '小二',
    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2126959982,2383631591&fm=26&gp=0.jpg',
    signature: '我阔落要加冰啊'
  },
  {
    name: '追梦者',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: '子非鱼',
    img: usrimg,
    signature: '我阔落要加冰啊'
  },
  {
    name: '左脚踩右脚',
    img: usrimg,
    signature: '我阔落要加冰啊'
  }
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
                <div className="next" onClick={() => {
                  this.props.history.push("/otherdynamic/"+ 100)
                }}><img src={next} alt=""/></div>
              </div>
            </div>
          })
        }
      </UsrList>
    )
  }
}

export default withRouter(Usr)
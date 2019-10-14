import headImg from 'assets/img/msg/chat/headImg.PNG'
const defaultState = {
    selfInfo:{
      id:1,
      name:'Angel',
      img:headImg,
      wechatname:'Angel'
    },
    list: [
        {
            id:0,
            name:'小明同学',
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3177821783,3832632740&fm=26&gp=0.jpg',
            content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或',
            time:'2019/10/1'
          },
          {
            id:2,
            name:'小高同学',
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638429004,1717840478&fm=26&gp=0.jp',
            content:'说了你又不懂，懂了你又不做',
            time:'2019/10/2'
          },
          {
            id:1,
            name:'Angel',
            flag:true,
            img:headImg,
            content:'我来了',
            time:'2019/10/2'
          },
          {
            id:3,
            name:'小黑',
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1131937362,2478239097&fm=26&gp=0.jpg',
            content:'错了你怎么不改',
            time:'2019/10/6'
          },
          {
            id:4,
            name:'userName',
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1607159738,3001324563&fm=26&gp=0.jpg',
            content:'不知道你们在说什么',
            time:'2019/10/7'
          },
          {
            id:5,
            name:'我爱我的祖国',
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg',
            content:'你做了什么',
            time:'2019/10/7'
          },
    ],
    chatlist:[
      {
        id:'002',
        name:'皮卡丘',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'003',
        name:'皮卡丘2',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1607159738,3001324563&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'004',
        name:'皮卡丘3',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3298005417,2605075504&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
      {
        id:'005',
        name:'小黄人',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326291021,2271121192&fm=26&gp=0.jpg',
        content:'最近可好',
        time:'2:00pm'
      },
    ],
    chat:[]
  }
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'addwechat':
        return {
          selfInfo:state.selfInfo,
          list: [
              ...state.list,
              action.data
          ],
          chatlist:state.chatlist,
          chat:state.chat,
        }
      case 'wechatsearch':
        state.list.map((item,value) => {
          if(item.content === action.data){
             item.active = 'active'
          }
        });
        return {
          list: [
              ...state.list
          ]
        }
        case 'wechatsearchclear':
            state.list.map((item,value) => {
              return item.active = ''
            })
            return {
              list: [
                  ...state.list
              ]
            };
        case 'changewechatname':
            state.list.map((item,value) => {
              if(item.id===1 && action.data!==''){
                return item.name =action.data
              }
          })
          let wechatname = action.data ? action.data :state.selfInfo.wechatname
            return {
              selfInfo:{
                ...state.selfInfo,
                wechatname:wechatname
              },
              list:[
                ...state.list
              ]
            };
        case 'clearcontent':
          state.list.map((item,value) => {
            return item.content = ''
          })
          return{
            selfInfo:{
              ...state.selfInfo,
            },
            list:state.list,
            chatlist:state.chatlist,
            chat:state.chat,
          }
          case 'addchat':
            return{
              chatlist:state.chatlist,
              chat:[
                ...state.chat,
                action.data
              ],
              list:state.list,
              selfInfo:state.selfInfo
            }
      default:
        return state
    }
  }
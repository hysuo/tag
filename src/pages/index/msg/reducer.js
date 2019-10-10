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
  }
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'addwechat':
        return {
          list: [
              ...state.list,
              action.data
          ]
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
                item.active = ''
            })
            return {
              list: [
                  ...state.list
              ]
            };
      default:
        return state
    }
  }
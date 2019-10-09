import headImg from 'assets/img/msg/chat/headImg.PNG'
const defaultState = {
    list: [
        {
            id:0,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3177821783,3832632740&fm=26&gp=0.jpg',
            content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
          },
          {
            id:2,
            img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638429004,1717840478&fm=26&gp=0.jp',
            content:'说了你又不懂，懂了你又不做'
          },
          {
            id:1,
            flag:true,
            img:headImg,
            content:'我来了'
          },
          {
            id:3,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1131937362,2478239097&fm=26&gp=0.jpg',
            content:'错了你怎么不改'
          },
          {
            id:4,
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1607159738,3001324563&fm=26&gp=0.jpg',
            content:'不知道你们在说什么'
          },
          {
            id:5,
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=489703808,1101083043&fm=26&gp=0.jpg',
            content:'你做了什么'
          },
    ]
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
      default:
        return state
    }
  }
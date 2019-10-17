export const addwechatlist = (data) => {
  return {
    type: 'addwechat',
    data
  }
}
export const searchcontent = (data) => {
  return {
    type: 'wechatsearch',
    data
  }
}
export const clear = () => {
  return {
    type: 'wechatsearchclear',
  }
}
export const changewechatname = (data) => {
  return {
    type: 'changewechatname',
    data
  }
}
export const clearcontent = () => {
  return {
    type: 'clearcontent',
  }
}
export const addchat = (data) => {
  return {
    type: 'addchat',
    data
  }
}
export const loadChatListtData = (data) => {
  return {
    type: 'loadChatListtData',
    data
  }
}
export const saga_load_chatlist = () => {
  return {
    type: 'saga_load_chatlist',
  }
}

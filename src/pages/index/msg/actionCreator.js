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

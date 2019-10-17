import Msg from './views/MsgContainer'
import Chat from './views/chat/ChatContiner'
import SetChat from './views/setChat/SetChatContainer'
import ChangeName from './views/setChat/change/ChangeName'
import MsgSearch from './views/msgSearch/MsgSearchContainer'
import TagWeChat from './weChat/tag/TagChatContainer'
import SetWeChat from './weChat/setWeChat/SetWeChatContainer'
import SearchContent from './weChat/searchcontent/SearchContentContainer'
import reducer from './reducer'
import * as sagas from './saga'
export{
    Msg,
    Chat,
    SetChat,
    ChangeName,
    MsgSearch,
    TagWeChat,
    SetWeChat,
    SearchContent,
    reducer,
    sagas
}
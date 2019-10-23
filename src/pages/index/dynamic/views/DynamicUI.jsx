import React from 'react'
import {DynamicContainer,UserList, DynamicList} from './DynamicStyled'
import add from 'assets/img/dynamic/add.png'
import more from 'assets/img/dynamic/more.png'
import comment from 'assets/img/dynamic/51568880997_.pic.png'
import Header from '../components/header/Header'
import zan from 'assets/img/dynamic/zan.png'
// import ZanImg from '../components/Zan'

export default (props) => {
    let {flagM, isShowMore, goToDetail, title, marginLeft,dynamicList, zanActive, zanList, chatForOne, focusOn} = props;
    return(
        <DynamicContainer>
            <div className={flagM ? 'meng active':'meng'} onClick={()=>{isShowMore()}}>
            </div>
            <Header title={title} marginLeft={marginLeft}></Header>
            <main>
                <UserList>
                    <div>
                        <img src='http://img2.imgtn.bdimg.com/it/u=3491810421,3895861461&fm=26&gp=0.jpg' alt=""/>
                        <img src={add} alt=""/>
                    </div>
                    <div>
                        <img src='http://img1.imgtn.bdimg.com/it/u=3909157488,3343575893&fm=26&gp=0.jpg' alt=""/>
                    </div>
                    <div>
                        <img src='http://img4.imgtn.bdimg.com/it/u=3716230226,2248259520&fm=15&gp=0.jpg' alt=""/>
                    </div>
                    <div>
                        <img src='http://img2.imgtn.bdimg.com/it/u=3515511970,1780882868&fm=26&gp=0.jpg' alt=""/>
                    </div>
                </UserList>

                <DynamicList>
                {
                    dynamicList.map((value, index) => (
                        <div key={value.id}>
                            <div>
                                <img src={value.headImg} alt=""/>
                                <div>
                                    <p>{value.userName}</p>
                                    <p>{value.creatTime}</p>
                                </div>
                                <img src={more} onClick={isShowMore.bind(this, value.id)} alt=""/>
                            </div>
                            <div onClick={()=>{goToDetail(value.id)}}>
                                <p>#{value.tag}#</p>
                                <p>{value.text}</p>
                                <img src={value.img} alt=""/>
                            </div>
                            <div>
                                {/* <ZanImg zanList={zanList} onClick={()=>{zanActive(value.id)}} id={value.id}></ZanImg> */}
                                
                                <img src={zan} alt=""/>
                                <p>赞</p>
                                <img src={comment} alt=""/>
                                <p>评论</p>
                            </div>
                            <div className={flagM==value.id ? 'mengShow active':'mengShow'} >
                                <p onClick={()=>{focusOn()}}>关注用户</p>
                                <p>屏蔽用户</p>
                                <p onClick={()=>{chatForOne(value.userID, value.userName)}}>给他私信</p>
                            </div>
                        </div>
                    ))
                }
                </DynamicList>
            </main>
        </DynamicContainer>
    )
}
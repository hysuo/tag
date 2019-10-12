import React from 'react'
import {DynamicContainer,UserList, DynamicList} from './DynamicStyled'
import cat from 'assets/img/dynamic/e85555c5e7440afedc20db0dad77bf2a.png'
import add from 'assets/img/dynamic/add.png'
import more from 'assets/img/dynamic/more.png'
import comment from 'assets/img/dynamic/51568880997_.pic.png'
import zan from 'assets/img/dynamic/61568880998_.pic.png'
import Header from 'pages/index/dynamic/components/header/Header'

export default (props) => {
    let {flagM, isShowMore, goToDetail, title, marginLeft} = props;
    return(
        <DynamicContainer>
            <div className={flagM ? 'meng active':'meng'} onClick={()=>{isShowMore()}}>
            </div>
            <Header title={title} marginLeft={marginLeft}></Header>
            <main>
                <UserList>
                    <div>
                        <img src={cat} alt=""/>
                        <img src={add} alt=""/>
                    </div>
                    <div>
                        <img src={cat} alt=""/>
                    </div>
                    <div>
                        <img src={cat} alt=""/>
                    </div>
                    <div>
                        <img src={cat} alt=""/>
                    </div>
                </UserList>

                <DynamicList>
                    <div>
                        <div>
                            <img src={cat} alt=""/>
                            <div>
                                <p>羊驼</p>
                                <p>1分钟前</p>
                            </div>
                            <img src={more} onClick={()=>{isShowMore()}} alt=""/>
                        </div>
                        <div onClick={()=>{goToDetail()}}>
                            <p>#铲屎官#</p>
                            <p>我家主子今天太可爱了，萌出鼻血哈哈！一定要奖
励小鱼干。</p>
                            <img src={cat} alt=""/>
                        </div>
                        <div>
                            <img src={zan} alt=""/>
                            <p>赞</p>
                            <img src={comment} alt=""/>
                            <p>评论</p>
                        </div>
                        <div className={flagM ? 'mengShow active':'mengShow'} >
                            <p>关注用户</p>
                            <p>屏蔽用户</p>
                            <p>给他私信</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={cat} alt=""/>
                            <div>
                                <p>羊驼</p>
                                <p>1分钟前</p>
                            </div>
                            <img src={more} alt=""/>
                        </div>
                        <div>
                            <p>#铲屎官#</p>
                            <p>我家主子今天太可爱了，萌出鼻血哈哈！一定要奖
励小鱼干。</p>
                            <img src={cat} alt=""/>
                        </div>
                        <div>
                            <img src={zan} alt=""/>
                            <p>赞</p>
                            <img src={comment} alt=""/>
                            <p>评论</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={cat} alt=""/>
                            <div>
                                <p>羊驼</p>
                                <p>1分钟前</p>
                            </div>
                            <img src={more} alt=""/>
                        </div>
                        <div>
                            <p>#铲屎官#</p>
                            <p>我家主子今天太可爱了，萌出鼻血哈哈！一定要奖
励小鱼干。</p>
                            <img src={cat} alt=""/>
                        </div>
                        <div>
                            <img src={zan} alt=""/>
                            <p>赞</p>
                            <img src={comment} alt=""/>
                            <p>评论</p>
                        </div>
                    </div>
                </DynamicList>
            </main>
        </DynamicContainer>
    )
}
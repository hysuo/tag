import React from 'react'
import {DynamicDetailContainer} from './DynamicDetailStyled'
import Header from 'pages/index/dynamic/components/header/Header'
import detailImg from 'assets/img/dynamic/detail/detailImg.png'
import comment from 'assets/img/dynamic/detail/comment.png'
import zan from 'assets/img/dynamic/detail/zan.png'
export default (props) => {
    let {title, marginLeft} = props;
    return(
        <DynamicDetailContainer>
            <Header title={title} marginLeft={marginLeft}></Header>
            <main>
                <div>
                    <div>
                        <img src={detailImg} alt=""/>
                        <div>
                            <p>饭兔子</p>
                            <p>许巍的歌真好听</p>
                            <img src={detailImg} alt=""/>
                            <div>
                                <p>2019-09-16 09:11</p>
                                <div>
                                    <img src={comment} alt=""/>
                                    <p>545</p>
                                    <img src={zan} alt=""/>
                                    <p>355</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <img src={detailImg} alt=""/>
                        <div>
                            <p>饭兔子</p>
                            <p>许巍的歌真好听</p>
                        </div>
                        <p>2019-09-16 09:11</p>
                    </div>
                    <div>
                        <img src={detailImg} alt=""/>
                        <div>
                            <p>饭兔子</p>
                            <p>许巍的歌真好听</p>
                        </div>
                        <p>2019-09-16 09:11</p>
                    </div>
                    <div>
                        <img src={detailImg} alt=""/>
                        <div>
                            <p>饭兔子</p>
                            <p>许巍的歌真好听</p>
                        </div>
                        <p>2019-09-16 09:11</p>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <input type="text" placeholder="输入评论内容"/>
                    <div>发送</div>
                </div>
            </footer>
        </DynamicDetailContainer>
    )
}
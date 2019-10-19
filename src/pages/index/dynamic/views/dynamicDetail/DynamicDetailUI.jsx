import React from 'react'
import {DynamicDetailContainer} from './DynamicDetailStyled'
import Header from 'pages/index/dynamic/components/header/Header'
import comment from 'assets/img/dynamic/detail/comment.png'
import zan from 'assets/img/dynamic/detail/zan.png'
export default (props) => {
    let {title, marginLeft, dynamic} = props;
    return(
        <DynamicDetailContainer>
            <Header title={title} marginLeft={marginLeft}></Header>
                <main>
                {
                    dynamic.map((value, index)=>(
                        <div key={value.id}>
                            <div>
                                <div>
                                    <img src={value.headImg} alt=""/>
                                    <div>
                                        <p>{value.userName}</p>
                                        <p>{value.text}</p>
                                        <img src={value.img} alt=""/>
                                        <div>
                                            <p>{value.createTime}</p>
                                            <div>
                                                <img src={comment} alt=""/>
                                                <p>{value.comment.length}</p>
                                                <img src={zan} alt=""/>
                                                <p>{value.zan}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            {
                                value.comment.map((value, index)=>(
                                    <div key={value.id}>
                                        <img src={value.headImg} alt=""/>
                                        <div>
                                            <p>{value.userName}</p>
                                            <p>{value.text}</p>
                                        </div>
                                        <p>{value.createTime}</p>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
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
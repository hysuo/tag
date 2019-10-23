import React from 'react'
import {DynamicDetailContainer} from './DynamicDetailStyled'
import Header from 'pages/index/dynamic/components/header/Header'
import comment from 'assets/img/dynamic/detail/comment.png'
import zan from 'assets/img/dynamic/detail/zan.png'
export default (props) => {
    let {title, marginLeft, dynamic, commentInput, handleInput, handleClick, commentList} = props;
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
                            {
                                commentList.map((value, index)=>(
                                    <div key={value}>
                                        <img src='http://img0.imgtn.bdimg.com/it/u=1073436194,380383960&fm=26&gp=0.jpg' alt=""/>
                                        <div>
                                            <p>羊驼</p>
                                            <p>{value}</p>
                                        </div>
                                        <p>1分钟前</p>
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
                    <input type="text" value={commentInput} onChange={handleInput.bind(this)} placeholder="输入评论内容"/>
                    <div onClick={()=>{handleClick()}}>发送</div>
                </div>
            </footer>
        </DynamicDetailContainer>
    )
}
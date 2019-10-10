import styled from 'styled-components'
import border from 'assets/styles/border.js'
const SetWeChatContainer = styled.div`
    header{
        height:.44rem;
        background:#fff;
        display:flex;
        align-items:center;
        padding:0 .2rem;
        img{
            width:.16rem;
            height:.16rem;
        }
        p:nth-child(2){
            margin-left:1.16rem;
            color:#191919;
            font-size:.18rem;
            font-weight:bold;        
        }
    }
    main{
        padding:0 .1rem;
        overflow-y:auto;
        .member{
            display:flex;
            flex-wrap:wrap;
            li{
                display:flex;
                flex-direction:column;
                align-items:center;
                img{
                    margin:.1rem .05rem 0;
                    width:.6rem;
                    height:.6rem;
                    border-radius:.2rem;
                }
                p{
                    margin-top:.05rem;
                }
            }
        }
        .set{
            li{
                background:#fff;
                border-radius:.2rem;
                height:.4rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-top:.1rem;
                padding:.1rem .2rem;
                font-size:.14rem;
                color:#000000;
            }
            .switch{
                padding:.1rem 0;
                display:block;
                height:1.55rem;
                >div:nth-child(3){
                    display:flex;
                    justify-content:space-between;
                    height:.4rem ;
                    align-items:center;
                    padding:.1rem .2rem .1rem .15rem;
                    span{
                        font-size:.16rem;
                        color:#707070;
                    }
                }
            }
            .showName{
                margin-top:.1rem;
                .am-list-item{
                    border-radius:.2rem;
                }
            }
            .clear{
                height:.5rem;
                >a:nth-child(1){
                width:100%;
                >p{
                display:flex;
                align-items:center;
                justify-content:space-between;
                }
                }
                >a:nth-child(1)::before{
                border:0;
                }
            }
        }
    }
`
const BorderContainer = border({
    width:'0 0 1px 0',
    comp:styled.div`
    `
})
export{
    SetWeChatContainer,
    BorderContainer
}
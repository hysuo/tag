import styled from 'styled-components'
import border from 'assets/styles/border.js'
const SetWeChatContainer = styled.div`
    .showcloak{
        position:absolute;
        z-index: 100;
        width:100%;
        height:100%;
        background:#5D5C5C;
        opacity:.55;
    }
    .showtoast{
        position:absolute;
        z-index: 100;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:3.31rem;
        height:1.75rem;
        background:#fff;
        border-radius:.2rem;
        >div:nth-child(1){
            background:#89C3EB;
            width:2.97rem;
            height:1.07rem;
            border-radius:.2rem;
            margin-top:.2rem;
            margin-left:.17rem;
            padding:.3rem .13rem .27rem .14rem;
            p{
                font-size:.18rem;
                color:#fff;
            }
        }
        >div:nth-child(2){
            margin-top:.1rem;
            span:nth-child(1){
                color:#191919;
                font-size:.2rem;
                margin-left:.75rem;
            }
            span:nth-child(2){
                color:#FF6363;
                font-size:.2rem;
                margin-left:1.41rem;
            }
        }
    }
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
                >p{
                    width:100%
                }
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
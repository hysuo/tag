import styled from 'styled-components'

const MsgContainer = styled.div`
    background:#F7F7F7;
    height:100%;
    display:flex;
    flex-direction:column;
    .title{
        background:#fff;
        height:.4rem;
        font-size:.18rem;
        text-align:center;
        line-height:.4rem;
        font-weight:bold;
    }
`
const SearchContainer = styled.div`
    height:.5rem;
    padding:.05rem .2rem;
    >div{
        height:.38rem;
        background:#fff;
        padding:.06rem .1rem;
        border-radius:.2rem;
        position: relative;
        img{
                position:absolute;
                left:.2rem;
                top:.1rem;
            }
        span{
            position:absolute;
            left:.4rem;
            top:.09rem;
            color:#707070;
        }
        input{
            border:0;
            height:.26rem;
            background:#e5e5e5;
            width:100%;
            border-radius:.2rem;
            padding:.02rem .1rem;
        }
    }
`
const MsgClassifyContainer = styled.div`
    display:flex;
    height:.7rem;
    >div{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        div{
            /* color:#070707; */
            position: relative;
            top:-.05rem;
        }
    }
    .active{
            color:#89C3EB;
    }
`
export{
    MsgContainer,
    SearchContainer,
    MsgClassifyContainer
}
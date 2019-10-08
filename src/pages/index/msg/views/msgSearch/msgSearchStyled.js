import styled from 'styled-components'
import border from 'assets/styles/border'
const MsgSearchContainer = styled.div`
    header{
        height:.44rem;
        background:#fff;
        position: relative;
        display:flex;
        align-items:center;
        img{
            position:absolute;
            left: .3rem;
            top:.12rem;
        }
        input{
            border:0;
            height:.26rem;
            background:#E5E5E5;
            border-radius:.12rem;
            margin-left:.2rem;
            width:3.12rem;
            padding:.06rem 0 .06rem .34rem ;
            color:#707070;
            font-size:.14rem;
        }
        span{
            color:#89C3EB;
            font-size:.16rem;
            margin-left:.05rem;
        }
    }
    main{
        margin-top:.1rem;
        background:#fff;
        border-radius:.3rem;
    }
`
const Border = border({
    width:'0 0 1px 0',
    comp:styled.div`
    .title{
    display:flex;
    height:.44rem;
    padding:0 .2rem ;
    align-items:center;
    font-size:.16rem;
    color:#707070;
    justify-content:space-between;
    img{
        margin-left:.04rem;
        width:.1rem;
        height:.1rem;
    }
}
`
})
export{
    MsgSearchContainer,
    Border
}
import styled from 'styled-components'

const AddCueStyled = styled.div`
.cueOne{
    &.active{
        display:block;
    }
    display:none;
    width:100%;
    height:6rem;
    position: absolute;
    background:#fff;
    top: 1rem;
    z-index: 999;
    padding:0 .2rem;
    >div:first-child{
        display:flex;
        align-items: center;
        justify-content:space-between;
        >div:first-child{
            font-size:.14rem;
            font-family:PingFang SC;
            font-weight:400;
            line-height:.2rem;
            color:rgba(112,112,112,1);
            opacity:1;
        }
        >div:nth-child(2){
            font-size:.18rem;
            font-family:PingFang SC;
            font-weight:400;
            line-height:.25rem;
            color:rgba(25,25,25,1);
            opacity:1;
        }
        >div:last-child{
            font-size:.14rem;
            font-family:PingFang SC;
            font-weight:400;
            line-height:.2rem;
            color:rgba(71,129,208,1);
            opacity:1;
        }
    }
    >div:last-child{
        width:3.29rem;
        height:.34rem;
        background:rgba(247,247,247,1);
        opacity:1;
        border-radius:.17rem;
        margin-top:.2rem;
        input{
            margin:.07rem 0 0 .4rem;
            border:none;
            background:rgba(247,247,247,1);
            font-size:.16rem;
            font-family:PingFang SC;
            font-weight:400;
            line-height:.22rem;
            color:rgba(175,175,175,1);
        }
    }
}
`
export{AddCueStyled}
import styled from 'styled-components'
import bg from 'assets/img/publish/tag/01f97a5d2e93f3a80120695cf04d1d.jpg@1280w_1l_2o_100sh.png'

const PublishTagContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    header{
        height:.64rem;
        display:flex;
        background:#fff;
        align-items:center;
        >div:first-child{
            margin: 0 1rem 0 .22rem;
        }
        font-size:.2rem;
        font-family:Sana;
        font-weight:400;
    }
    main{
        background-image: url(${bg});
        flex:1;
        >div:first-child{
            width:2.53rem;
            height:.62rem;
            background:rgba(255,255,255,1);
            box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
            opacity:1;
            border-radius:.2rem;
            margin: .46rem 0 0 .64rem;
            line-height:.62rem;
            text-align:center;
            font-size:.18rem;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(137,195,235,1);
            margin-bottom:.59rem;
        }
        >div:last-child{
            width:1.6rem;
            height:.5rem;
            background:rgba(68,218,94,1);
            box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
            border-radius:.2rem;
            margin: 1.17rem 0 0 1.08rem;
            color:#fff;
            font-size:.18rem;
            line-height:.5rem;
            text-align:center;
        }
    }
`
const ThreeInput = styled.div`
    display:flex;
    >div{
        width:2.76rem;
        height:.4rem;
        background:rgba(255,255,255,1);
        box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
        opacity:1;
        border-radius:.2rem;
        display:flex;
        align-items: center;
        margin:0 0 .28rem .5rem;
        img{
            margin:0 .09rem 0 .2rem;
        }
        input{
            width:2.03rem;
            height:.24rem;
            background:rgba(229,229,229,1);
            opacity:1;
            border-radius:.12rem;
            border:none;
            font-size:.1rem;
            font-family:PingFang SC;
            font-weight:600;
            line-height:.14rem;
            color:#fff;
            padding-left: .15rem;
        }
    }
    >img{
        width:.18rem;
        height:.18rem;
        margin:.11rem 0 .11rem .1rem;
    }
`
export{
    PublishTagContainer,
    ThreeInput
}
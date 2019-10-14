import styled from 'styled-components'
const DynamicContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    main{
        flex:1;
        padding:.2rem .2rem 0 .2rem;
    }
    .meng{
        &.active{
            display:block;
        }
        display:none;
        height:100%;
        width:100%;
        background:rgba(93,92,92,1);
        opacity:0.55;
        position: absolute;
        z-index: 2;
    }
`
const UserList = styled.div`
    display:flex;
    >div{
        width:60px;
        height:60px;
        background:rgba(0,0,0,0);
        box-shadow:0px 3px 6px rgba(178,178,178,0.65);
        border-radius:50%;
        opacity:1;
        margin-right:.32rem;
        position: relative;
        img:first-child{
            height:100%;
            width:100%
            border-radius:50%;
        }
        img:nth-child(2){
            position: absolute;
            bottom: -.1rem;
            right: -.15rem;
        }
    }
    >div:last-child{
        margin-right:0;
    }
`
const DynamicList = styled.div`
    margin-top:.3rem;
    >div{
        width:3.35rem;
        background:rgba(255,255,255,1);
        box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
        opacity:1;
        border-radius:.2rem;
        padding:.2rem .2rem .1rem .2rem;
        margin-bottom:.2rem;
        position: relative;
        >div:first-child{
            display:flex;
            img:first-child{
                width:.4rem;
                height:.4rem;
                background:rgba(0,0,0,0);
                box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
                border-radius:50%;
                opacity:1;
            }
            >div{
                margin:0 1.75rem 0 .1rem;
                text-align:center;
                p:first-child{
                    font-size:.14rem;
                    font-weight:400;
                    color:rgba(25,25,25,1);
                }
                p:last-child{
                    font-size:.1rem;
                    color:rgba(112,112,112,1);
                }
            }
            img:last-child{
                height:.24rem;
                width:.24rem;
            }
        }
        >div:nth-child(2){
            margin: .12rem 0;
            p:first-child{
                color:rgba(71,129,208,1);
                font-size:.14rem;
            }
            p:nth-child(2){
                color:rgba(25,25,25,1);
                font-size:.12rem;
                margin:.04rem 0;
            }
            img{
                width:2.95rem;
                height:2.36rem;
            }
        }
        >div:nth-child(3){
            display:flex;
            img{
                width:.16rem;
                height:.16rem;
            }
            p{
                color:rgba(112,112,112,1);
                font-size:.12rem;
            }
            img:first-child{
                margin: 0 .08rem 0 1.84rem;
            }
            img:nth-child(3){
                margin: 0 .08rem 0 .18rem;
            }
        }
        .mengShow{
            &.active{
                display:block;
            }
            display:none;
            width:84px;
            height:63px;
            background:rgba(255,255,255,1);
            box-shadow:0px 3px 6px rgba(112,112,112,0.16);
            opacity:1;
            border-radius:20px 0px 20px 20px;
            position: absolute;
            top: 0.37rem;
            left: 2.2rem;
            padding:.08rem .2rem;
            z-index:999;
            p{
                font-size:.18rem;
                font-family:PingFang SC;
                font-weight:400;
                line-height:.13rem;
                transform: scale(0.5);
                margin-left: -.17rem;
                width: .8rem;
                margin-bottom:.05rem;
            }
            p:first-child{
                color:rgba(137,195,235,1);
            }
            p:nth-child(2){
                color:rgba(255,99,99,1);
            }
            p:last-child{
                color:rgba(124,124,124,1);
            }
        }
    }
`

export {
    DynamicContainer,
    UserList,
    DynamicList
}
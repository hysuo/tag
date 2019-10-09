import styled from 'styled-components'

const HomeContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
    .publishD{
        position: absolute;
        left:.99rem;
        top:5.37rem;
        z-index: 999;
        display:none;
    }
    .publishT{
        position: absolute;
        left:2.09rem;
        top:5.37rem;
        z-index: 999;
        display:none;
    }
    .active{
        display:block;
    }
    header{
        height : .72rem;
        width : 100%;
        display : flex;
        align-items: center;
        justify-content : space-between;
        div:first-child{
            margin-left : .1rem;
        }
        div:last-child{
            margin-right : .1rem;
        }
    }
    main{
        flex:1;
        >div:first-child{
            margin-left:.3rem;
        }
        >div:nth-child(2){
            display:flex;
            margin-left:.26rem;
            margin-right:.21rem;
            >div{
                flex:1;
                display:flex;
                flex-direction:column;
                align-items: center;
                justify-content : center;
                img{
                    height:.5rem;
                    width:.5rem;
                }
                p{
                    color:#191919;
                    font-size:.1rem;
                    font-family:PingFang SC;
                    line-height:.2rem;
                }
            }
        }
        >div:nth-child(3){
            margin:.2rem 0 .04rem 0;
            >div:first-child{
                font-size:.15rem;
                color:#191919;
                font-weight:bold;
                margin-left:.23rem;
            }
            >div:last-child{
                display:flex;
                flex-direction:column;
                margin-left:.14rem;
                >div{
                    display:flex;
                    img{
                        z-index:999;
                    }
                    >div{
                        display:flex;
                        margin-top:.25rem;
                        margin-left:-.2rem;
                        width:264px;
                        height:60px;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 3px 6px rgba(112,112,112,0.16);
                        opacity:1;
                        border-radius:20px;
                        justify-content : space-between;
                        p{
                            margin-left:.31rem;
                            color:#191919;
                            font-size:.12rem;
                            font-weight:bold;
                        }
                        p:last-child{
                            color:#707070;
                            margin-top:.06rem;
                        }
                        img{
                            margin:.21rem .19rem 0 0;
                        }
                    }
                }
            }
        }
    }
`
export{
    HomeContainer
}
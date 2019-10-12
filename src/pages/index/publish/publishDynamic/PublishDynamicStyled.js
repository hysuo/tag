import styled from 'styled-components'

const PublishDynamicContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    background:#89C3EB;
    header{
        height:.64rem;
        width:100%;
        display:flex;
        padding: 0 .2rem;
        justify-content:space-between;
        align-items:center;
        div{
            color:#fff;
            font-size:.18rem;
        }
    }
    main{
        flex:1;
        border-radius: .4rem .4rem 0 0;
        background:#fff;
        textarea{
            border:none;
            margin:.4rem .2rem;
        }
        .cueOne,.addTag{
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
            >div:nth-child(2){
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
                    width: 2.5rem;
                }
            }
        }
        .cueOne{
            &.active{
                display:block;
            }
        }
        .addTag{
            &.active{
                display:block;
            }
            .tuijianTag{
                >div:first-child{
                    font-size:18px;
                    font-family:PingFang SC;
                    font-weight:400;
                    line-height:25px;
                    color:rgba(25,25,25,1);
                    margin: .31rem 0 .12rem 0;
                }
                >div:last-child{
                    display:flex;
                    >div{
                        width:.8rem;
                        height:.3rem;
                        background:rgba(255,255,255,1);
                        border:1px solid rgba(191,191,191,1);
                        border-radius:.2rem;
                        margin-right:.05rem;
                        line-height:.3rem;
                        text-align:center;
                    }
                }
            }
        }
    }
    footer{
        background:#fff;
        >div:first-child{
            margin-bottom:.2rem;
            padding:0 .2rem;
            >div:first-child{
                display:flex;
                >div:first-child{
                    margin-top: 0.07rem;
                    position: relative;
                    img:last-child{
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: 222;
                    }
                }
                >div:last-child{
                    position: relative;
                    img:last-child{
                        position: absolute;
                        left: .32rem;
                        top: .32rem;
                    }
                }
            }
            >div:last-child{
                display:flex;
                font-size:.12rem;
                >div{
                    background:rgba(137,195,235,1);
                    opacity:1;
                    border-radius:10px;
                    padding: .06rem .17rem;
                    color:#fff;
                }
                >div:nth-child(2){
                    margin:0 .58rem 0 .1rem; 
                }
                >div:nth-child(3){
                    position: relative;
                    >div{
                        display:none;
                        width:1.07rem;
                        height:.86rem;
                        background:rgba(137,195,235,1);
                        box-shadow:0px 3px 6px rgba(178,178,178,0.16);
                        opacity:1;
                        border-radius:.2rem;
                        position: absolute;
                        top: -.55rem;
                        left: -.2rem;
                        padding:.06rem .11rem;
                        >div{
                            font-size:12px;
                            font-family:PingFang SC;
                            font-weight:400;
                            line-height:24px;
                            border-bottom:1px solid #fff;
                            display:flex;
                            p{
                                width:.8rem;
                            }
                            input{
                                margin-top: .06rem;
                            }
                        }
                        >div:last-child{
                            border:none;
                        }
                        &.active{
                            display:block;
                        }
                    }
                }
                img{
                    height:.2rem;
                    width:.2rem;
                    margin:.05rem 0 0 .1rem;
                }
            }
        }
        >div:last-child{
            height:.5rem;
            width:100%;
            display:flex;
            background:rgba(247,247,247,1);
            justify-content:space-between;
            align-items:center;
            padding:0 .1rem;
            input{
                width:2.85rem;
                height:.36rem;
                background:rgba(255,255,255,1);
                border:0px solid rgba(216,206,206,1);
                opacity:1;
                border-radius:.1rem;
            }
            button{
                width:.6rem;
                height:.36rem;
                background:rgba(137,195,235,1);
                opacity:1;
                border-radius:.1rem;
                border: none;
                color: #fff;
            }
        }
    }
`
export{
    PublishDynamicContainer
}
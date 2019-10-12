import styled from 'styled-components'
const DynamicDetailContainer = styled.div`
    height:100%;
    background:#fff;
    display:flex;
    flex-direction: column;
    main{
        flex:1;
        padding:.2rem .2rem 0 .2rem;
        >div:first-child{
            >div:first-child{
                display:flex;
                >img{
                    width:.46rem;
                    height:.46rem;
                    background:rgba(0,0,0,0);
                    border-radius:50%;
                    margin-right:.14rem;
                }
                >div{
                    >p:first-child{
                        color:rgba(137,195,235,1);
                        font-size:.14rem;
                    }
                    >p:nth-child(2){
                        color:rgba(9,9,9,1);
                        font-size:.12rem;
                        margin: .04rem 0 .06rem 0;
                    }
                    >div{
                        justify-content: space-between;
                        display:flex;
                        margin-top:.1rem;
                        >p:first-child{
                            color:rgba(112,112,112,1);
                            font-size:.2rem;
                            transform: scale(0.5);
                            margin-left: -.4rem;
                        }
                        >div{
                            display:flex;
                            align-items:center;
                            >p{
                                color:rgba(112,112,112,1);
                                font-size:.12rem;
                            }
                            img{
                                width:.14rem;
                                height:.14rem;
                            }
                        }
                    }
                }
            }
        }
        >div:last-child{
            width:3.35rem;
            background:rgba(247,247,247,1);
            border-radius:.1rem;
            padding:.27rem .16rem .2rem .2rem;
            >div{
                display:flex;
                img{
                    width:.26rem;
                    height:.26rem;
                    border-radius:50%;
                }
                >div{
                    flex:1;
                    margin-left:.06rem;
                    >p:first-child{
                        color:rgba(137,195,235,1);
                        font-size:.12rem;
                    }
                    >p:last-child{
                        font-size:.2rem;
                        color:rgba(25,25,25,1);
                        transform: scale(0.5); 
                        margin-left: -.67rem;
                        margin-top: -.05rem;
                    }
                }
                >p{
                    color: rgba(112,112,112,1);
                    font-size: .12rem;
                    transform: scale(0.85);
                    margin-left: -.4rem;
                }
            }
        }
    }
    footer{
        div{
            background:rgba(247,247,247,1);
            height:.5rem;
            display:flex;
            align-items:center;
            justify-content:center;
            input{
                width:2.85rem;
                height:.36rem;
                background:rgba(255,255,255,1);
                border:none;
                border-radius:.1rem;
                margin-right:.1rem;
                padding-left:.1rem;
            }
            div{
                width:.6rem;
                height:.36rem;
                background:rgba(137,195,235,1);
                border-radius:.1rem;
                color:#fff;
                text-align:center;
                line-height:.36rem;
            }
        }
    }
`
export{
    DynamicDetailContainer
}
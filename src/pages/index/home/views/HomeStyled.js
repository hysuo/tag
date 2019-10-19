import styled from 'styled-components'

const HomeContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
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
                margin-bottom: .1rem;
            }
            >div:last-child{
                display:flex;
                flex-direction:column;
                margin-left:.14rem;
                >div{
                    display:flex;
                    margin-bottom: .15rem;
                    >img{
                        z-index:1;
                        width:.8rem;
                        height:.8rem;
                        border-radius: 20%;
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
const SwiperShow = styled.div`
    overflow:hidden;
    .swiper-container {
        width: 100%;
        height: 1.68rem;
        overflow: visible!important;
        margin-left: .6rem;
        .swiper-scrollbar{
            width:.9rem;
            position: absolute;
            top: 1.4rem;
            left: .8rem;
        }
    }
    .swiper-container .swiper-wrapper .swiper-slide{ width: 3.18rem; border-radius: 20px; margin-right:0!important;}
    .swiper-container .swiper-wrapper .swiper-slide img{width: 100%; height: 1.68rem; border-radius: 20px;}
    .swiper-container .swiper-wrapper .swiper-slide-prev{     margin-top: .09rem;height: 1.46rem!important; width:2.76rem!important; margin-right:0!important;}
    .swiper-container .swiper-wrapper .swiper-slide-prev img{ height: 1.46rem!important; width:2.76rem!important;}
    .swiper-container .swiper-wrapper .swiper-slide-next{     margin-top: .09rem; height: 1.46rem!important; width:2.76rem!important; margin-right:0!important;}
    .swiper-container .swiper-wrapper .swiper-slide-next img{ height: 1.46rem!important; width:2.76rem!important;}
    .swiper-container .swiper-wrapper .swiper-slide-active{ width: 3.18rem;}
    
    .swiper-pagination{
        bottom: -30px!important;
    }
    .swiper-pagination .swiper-pagination-bullet{width: 12px; height: 12px; background: #ff1e1e;}
    .swiper-pagination .swiper-pagination-bullet-active{width: 21px; height: 12px; background: #e75230; border-radius: 6px;}
`

export{
    HomeContainer,
    SwiperShow
}
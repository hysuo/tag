import styled from 'styled-components'
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
    SwiperShow
}
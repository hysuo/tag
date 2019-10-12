import React, { Component } from 'react'
import {SwiperShow} from './SwiperStyled'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'

import banner1 from 'assets/img/home1/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh(1).png'
import banner2 from 'assets/img/home1/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh(2).png'
import banner3 from 'assets/img/home1/01679e5d2e9402a80120695cc3c92b.jpg@1280w_1l_2o_100sh.png'

export default class SwiperContainer extends Component{
    render(){
        return (
            <SwiperShow>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={banner1} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={banner2} alt=""/>
                    </div>
                    <div className="swiper-slide"> 
                        <img src={banner3} alt=""/>
                    </div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </SwiperShow>
        )
    }
    componentDidMount () {
    
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: true,
            slidesPerView: "auto",
            centeredSlides:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        });
    }
}
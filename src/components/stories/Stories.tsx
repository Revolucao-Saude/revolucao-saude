import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Avatar, Divider } from "@mui/material";
import "swiper/css/free-mode";
import { Box, Card, CardContent } from "@material-ui/core";
import './Stories.css';
import pedro from "../../assets/images/pedro.jpg";
import ismael from "../../assets/images/ismael.jpg";
import lilian from "../../assets/images/lilian.jpg";
import marcos from "../../assets/images/marcos.jpg";
import anderson from "../../assets/images/anderson.jpg";
import alice from "../../assets/images/alice.jpg";
import joao from "../../assets/images/joao.jpg";
import revolucao from "../../assets/images/revolucao-saude.png";
import { ModalStories } from "./modalStories/ModalStories";
import { Link } from "react-router-dom";
import ButtonBases from "./complexButton/ComplexButton";

function Stories() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper m0 mb"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="center">
          
            <div className="container ml-75">
              <div className="center ml-75">
                {/* <Avatar className="center" sx={{ width: 110, height: 110 }}>  */}
                <Avatar sx={{ width: 110, height: 110 }}>
                <ModalStories/>
                </Avatar>
                {/* </Avatar> */}
              </div>
              <div className="ml-59">
                Revolução Saúde
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div  className="center container ml-75">
          
          <Avatar  sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={lilian}/>
            </Avatar>
          <div className="mLilian"> 
            Lilian
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={anderson}/>
          </Avatar>           
          <div className="mA"> 
            Anderson
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={joao}/>
          </Avatar> 
          <div className="mJ"> 
            João
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={alice}/>
          </Avatar> 
          <div className="mAlice"> 
            Alice
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={pedro}/>
          </Avatar> 
          <div className="mP"> 
            Pedro
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={marcos}/>
          </Avatar> 
          <div className="mM"> 
            Marcos
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
          <div className="center container ml-75">
          <Avatar sx={{ width: 110, height: 110 }}>
              <img className="circular" width={100} height={100} src={ismael}/>
          </Avatar>         
          <div className="mI"> 
            Ismael
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Divider orientation="horizontal" />
    </>
  );
}

export { Stories }
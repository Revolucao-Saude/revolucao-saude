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

function Stories() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                
              <img onClick={handleOpen} src={revolucao} className="stories-image" />
              {/* <ModalStories /> */}

                
              </div>
              <div className="ml-59">
                Revolução Saúde
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
       
        </SwiperSlide>
        <SwiperSlide>
         
          
        </SwiperSlide>
        <SwiperSlide>
       
         
        </SwiperSlide>
        <SwiperSlide>
        
        
        </SwiperSlide>
        <SwiperSlide>
        
      
        </SwiperSlide>
        <SwiperSlide>
        
          
        </SwiperSlide>
      </Swiper>
      <Divider orientation="horizontal" />
    </>
  );
}

export { Stories }
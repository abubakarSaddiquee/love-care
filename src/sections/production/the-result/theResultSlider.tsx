"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CustomHeading from "@/components/custom-heading";
import Work from "@/assets/production/work.png";
import slideRounded from "@/assets/production/slider1.png";
import slideRounded1 from "@/assets/production/slider2.png";
import slideRounded2 from "@/assets/production/slider3.png";
import slideRounded3 from "@/assets/production/slider4.png";
import slideRounded4 from "@/assets/production/slider6.png";
import Top from "@/assets/production/Top.png";
import Colonbottom from "@/assets/production/colonbottom.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const sliderData = [
  {
    id: "1",
    name: "Desirae Philips",
    disc: "I am so grateful for the service your company provided. The team was professional, friendly, and went above and beyond to make sure I was satisfied with the final result.",
    img: slideRounded1,
  },
  {
    id: "2",
    name: "Alfonso Culhane",
    disc: "I just wanted to say thank you for the great experience I had with your company. Your team was knowledgeable, helpful, and made the process easy and stress-free.",
    img: slideRounded2,
  },
  {
    id: "3",
    name: "Skylar Vetrovs",
    disc: "I love this brand, i can’t say anything more than they’re absolutely amazing. You need to buy their products, my life has been changed since using them!",
    img: slideRounded,
  },
  {
    id: "4",
    name: "Wilson Vaccaro",
    disc: "I am extremely satisfied with the service I received from your company. The staff were friendly and helpful, and my issue was resolved quickly and efficiently.",
    img: slideRounded3,
  },
  {
    id: "5",
    name: "Nolan Septimus",
    disc: "I was very impressed with the quality of the product I received. It exceeded my expectations, and I will definitely be a repeat customer.",
    img: slideRounded4,
  },
];

const TheResultSlider = () => {
  const [centeredSlideIndex, setCenteredSlideIndex] = useState(2);

  const handleSlideChange = (swiper: any) => {
    setCenteredSlideIndex(swiper.realIndex);
  };

  return (
    <Box sx={{ padding: { xs: "50px 10px", sm: "100px" } }}>
      <Box>
        <CustomHeading
          label="Still not convinced? check out the results"
          textFontSize="36px"
          textFontWeight="700"
          textAlign="center"
        />
      </Box>

      <Box>
        <Swiper
          effect={"coverflow"}
          spaceBetween={100}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 5,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
          onSlideChange={handleSlideChange}
          initialSlide={centeredSlideIndex}
        >
          {sliderData.map((item: any, index: any) => (
            <SwiperSlide
              key={index}
              style={{
                boxShadow:
                  "0px 6.88775px 29.08163px -9.18367px rgba(255, 178, 0, 0.15)",
                background: "#FEDE4B",
                position: "relative",
                borderRadius: "7px",
                width: "320px",
                height: "361px",
              }}
            >
              <Box
                sx={{
                  boxShadow:
                    "0px 6.88775px 29.08163px -9.18367px rgba(255, 178, 0, 0.15)",
                  background: "#FEDE4B",
                  position: "relative",
                  borderRadius: "7px",
                  width: "320px",
                  height: "361px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    transform: "translateY(-60px)",
                    zIndex: "999",
                  }}
                >
                  <Image
                    src={item.img}
                    alt="icon"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      zIndex: 999,
                    }}
                    width={99}
                  />
                </div>

                <Box sx={{ textAlign: "center", paddingX: "8px" }}>
                  <Box
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#18323A",
                      paddingBottom: "1rem",
                    }}
                  >
                    {item.name}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#18323A",
                      lineHeight: "20px",
                    }}
                  >
                    {item.disc}
                  </Box>
                </Box>

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                  }}
                >
                  <Image src={Top} alt="icon" width={30} height={30} />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                  }}
                >
                  <Image src={Colonbottom} alt="icon" width={30} height={30} />
                </div>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TheResultSlider;

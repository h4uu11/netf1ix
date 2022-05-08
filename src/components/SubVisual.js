import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SubVisual = ({ content, videoType }) => {
  const navigate = useNavigate();

  const goLink = (videoType, id) => {
    navigate(`/${videoType}/${id}`);
  };
  return (
    <>
      <Swiper
        slidesPerView={7}
        slidesPerGroup={7}
        spaceBetween={10}
        speed={1000}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className=""
      >
        {content.map((item, index) => (
          <SwiperSlide key={index} onClick={() => goLink(videoType, item.id)}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SubVisual;

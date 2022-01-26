import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

const Section1 = ({ movies, setMovie }) => {
  const Slider = () => {
    return (
      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        /* pagination={{
          clickable: true
        }} */
        navigation={true}
        className="mySwiper"
      >
        {movies.map((item, id) => (
          <SwiperSlide
            key={id}
            className="text-white"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_IMDB_API_IMG_URL}${item.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 200,
            }}
            onClick={(e) => {
              e.preventDefault(), setMovie(item);
            }}
          >
            {item.original_title}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div
      id="slider"
      style={{ height: 200, backgroundColor: "black", marginTop: 400 }}
    >
      <Slider />
    </div>
  );
};
export default Section1;

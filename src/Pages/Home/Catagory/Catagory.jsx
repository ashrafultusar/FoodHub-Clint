import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slid1 from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <div>
      <div>
        <SectionTitle subHeading={'ORDER ONLINE'} heading={'---From 11:00am to 10:00pm---'} >

        </SectionTitle>
</div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
                  <img src={slid1} alt="" />
                  <h1 className="uppercase text-center -mt-20 text-white">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid2} alt="" />
                  <h1 className="uppercase text-center -mt-20 text-white">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid3} alt="" />
                  <h1 className="uppercase text-center -mt-20 text-white">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid4} alt="" />
                  <h1 className="uppercase text-center -mt-20 text-white">pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid5} alt="" />
                  <h1 className="uppercase text-center -mt-20 text-white">desserts</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagory;

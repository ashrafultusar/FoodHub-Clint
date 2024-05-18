import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <section className="my-24">
      <SectionTitle
        subHeading="TESTIMONIALS"
        heading=" ---What Our Clients Say---"
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
                  <div className="flex
              flex-col items-center mx-24 my-16">
                     
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="py-8">{review.details}</p>
                <p className="text-2xl text-orange-400">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

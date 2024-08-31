import "./testimonials.css";
import Avatar from "./../../assets/images/avatar.webp";
import Avatar2 from "./../../assets/images/avatar.webp";
import Avatar3 from "./../../assets/images/avatar.webp";
import Avatar4 from "./../../assets/images/avatar.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar} alt="client" />
          </div>
          <h5 className="client_name">John Doe</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            doloremque assumenda repellendus odit est nostrum illo cupiditate et
            cumque. Quis quod sed ut nobis. Laudantium porro eum cum placeat
            magni!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar} alt="client" />
          </div>
          <h5 className="client_name">John Doe</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            doloremque assumenda repellendus odit est nostrum illo cupiditate et
            cumque. Quis quod sed ut nobis. Laudantium porro eum cum placeat
            magni!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Avatar} alt="client" />
          </div>
          <h5 className="client_name">John Doe</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            doloremque assumenda repellendus odit est nostrum illo cupiditate et
            cumque. Quis quod sed ut nobis. Laudantium porro eum cum placeat
            magni!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

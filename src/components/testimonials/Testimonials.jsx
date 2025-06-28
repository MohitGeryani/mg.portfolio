import "./testimonials.css";
import Avatar from "./../../assets/images/avatar.webp";
import Logo1 from "./../../assets/images/logo1.png"
import Logo2 from "./../../assets/images/logo2.png"
import Logo3 from "./../../assets/images/logo3.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
     <h5>Career Journey</h5>
<h2>Professional Experience</h2>


      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Logo1} alt="Cprime" />
          </div>
          <h5 className="client_name">ServiceNow Developer – Cprime</h5>
          <small className="client_review">
            Worked at Cprime, a Goldman Sachs & Everstone company, as a ServiceNow Developer.
            Contributed to client projects like CHN, SABIC, DIR, and CHS, focusing on workflow automation,
            frontend/backend customization, and HRSD implementations.
          </small>
        </SwiperSlide> */}
        <SwiperSlide className="testimonial">
  <div className="client_avatar">
    <img src={Logo1} alt="Cprime" />
  </div>
  <h5 className="client_name">Full Stack Developer – Cprime</h5>
  <small className="client_review">
    Worked at Cprime, a Goldman Sachs & Everstone company, as a Full Stack Developer.
    Contributed to client-facing projects by utilzing my frontend and backend skills, focusing on building scalable features,
    enhancing user interfaces, and implementing backend APIs to deliver robust business solutions.
  </small>
</SwiperSlide>


        <SwiperSlide className="testimonial">
  <div className="client_avatar">
    <img src={Logo2} alt="Celebal Technologies" />
  </div>
  <h5 className="client_name">React Developer Intern – Celebal Technologies</h5>
  <small className="client_review">
    Worked as a Full Stack React Developer, building dashboards and feature-rich apps.
    Gained hands-on experience with React.js, Redux Toolkit, Firebase, and RESTful APIs.
  </small>
</SwiperSlide>

<SwiperSlide className="testimonial">
  <div className="client_avatar">
    <img src={Logo3} alt="Infosys" />
  </div>
  <h5 className="client_name">Software Development Intern – Infosys Springboard</h5>
  <small className="client_review">
    Focused on full-stack development concepts through project-based training modules.
    Gained practical exposure to web technologies, OOP, databases, and agile workflows.
  </small>
</SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Testimonials;

import React from "react";
import Slider from "react-slick";
import "./Home.css";





const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
    <div className="testimonial py-4 px-3 ">
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
        explicabo molestias recusandae repudiandae, dolor, sapiente placeat
        ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
        voluptate odit?
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src="asset/supriya.jpg" alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Supriya Karki</h6>
          <p className="section__description">Frontend Developer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
        explicabo molestias recusandae repudiandae, dolor, sapiente placeat
        ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
        voluptate odit?
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src="asset/manisha.jpg" alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Manisha Basukala</h6>
          <p className="section__description">Backend Developer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
        explicabo molestias recusandae repudiandae, dolor, sapiente placeat
        ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
        voluptate odit?
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src="asset/san.jpg" alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Sanju Maharjan</h6>
          <p className="section__description">Backend Developer</p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
        explicabo molestias recusandae repudiandae, dolor, sapiente placeat
        ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
        voluptate odit?
      </p>

      <div className="mt-3 d-flex align-items-center gap-4">
        <img src="asset/ruby.jpg" alt="" className="w-25 h-25 rounded-2" />

        <div>
          <h6 className="mb-0 mt-3">Ruby kakshapati</h6>
          <p className="section__description">Scrum Master</p>
        </div>
      </div>
    </div>
    
    {/* <br></br>
    <br></br>
    <br></br> */}
  </Slider>
  );
};

export default Testimonial;

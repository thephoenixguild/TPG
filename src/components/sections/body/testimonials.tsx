import { icons } from "@/components/icons/icons";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      imageSrc: "author1.svg",
      feedbackImg: "feedback1.svg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imageSrc: "author2.svg",
      feedbackImg: "feedback1.svg",
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imageSrc: "author3.svg",
      feedbackImg: "feedback1.svg",
      name: "Lorem De Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imageSrc: "author4.svg",
      feedbackImg: "feedback1.svg",
      name: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imageSrc: "author5.svg",
      feedbackImg: "feedback1.svg",
      name: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imageSrc: "author6.svg",
      feedbackImg: "feedback1.svg",
      name: "Ms. Lorem R. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 4500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id='testim' className='testim'>
      <div className='wrap'>
        <span
          id='right-arrow'
          className='arrow right fa fa-chevron-right'
          onClick={handleNextSlide}
        ></span>
        <span
          id='left-arrow'
          className='arrow left fa fa-chevron-left'
          onClick={handlePrevSlide}
        ></span>
        <ul id='testim-dots' className='dots'>
          {testimonials.map((_, index) => (
            <li
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
            ></li>
          ))}
        </ul>
        <div className='flex justify-center sm:w-[75%] m-auto items-center'>
          {/* <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
                        {icons.left}
                    </div>
                    <div className='flex items-center px-[2rem] w-[25rem] md:w-[25rem] lg:w-[30rem] xl:w-[40rem]'>
                        {icons.feedbackBox}
                    </div>
                    <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
                        {icons.right}
                    </div> */}
          <div id='testim-content' className='cont'>
            <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
              {icons.left}
            </div>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={index === currentSlide ? "active" : ""}
              >
                <p className='flex h-[10rem] w-[20rem] sm:w-[40vw] md:h-[10rem] sm:h-[50vh]'>
                  {/* {icons.feedbackBox} */}
                  <Image
                    src={testimonial?.feedbackImg}
                    layout='fill'
                    alt={testimonial.name}
                  />
                </p>
                <div className='img my-[1rem]'>
                  <Image
                    src={testimonial?.imageSrc}
                    width={50}
                    height={50}
                    alt={testimonial.name}
                  />
                </div>
                {/* <h2>{testimonial.name}</h2> */}
              </div>
            ))}
            <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
              {icons.right}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

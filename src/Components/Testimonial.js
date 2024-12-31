import React, { useState } from "react";
import T from "../Assets/SD.png";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Belly Bliss has transformed my dinner routine. The meals are always fresh and tasty!",
      image: T,
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      text: "The delivery is always on time, and the quality of food is unmatched.",
      image: T,
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      text: "As a foodie, Belly Bliss never disappoints. Highly recommend!",
      image: T,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();

        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { once: true });
  };

  return (
    <div className="rr">
      <div className="testimonial-container">
        <button
          className="nav-button prev-button"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        />
        <div className="testimonial-wrapper">
          <div
            className="testimonial-slider"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="nav-button next-button"
          onClick={nextSlide}
          aria-label="Next testimonial"
        />
        <div className="dot-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

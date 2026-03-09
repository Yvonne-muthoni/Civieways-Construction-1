import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero1 from "/src/images/hero/hero1.jpg";
import hero2 from "/src/images/hero/hero2.jpg";
import hero3 from "/src/images/hero/hero3.jpg";
import hero4 from "/src/images/hero/hero4.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual controls
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 mb-6">
          Building Kenya's Future, One Project at a Time
        </h1>

        <p className="text-white text-lg sm:text-xl mb-8">
          Civieways Construction Company delivers high-quality construction
          services for residential, commercial, and industrial projects across Kenya.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-500" : "bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
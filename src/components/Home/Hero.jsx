import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function Hero() {
  const heroImage = "/images/hero/construction-hero.jpg";
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative py-15 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 pt-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-2 text-amber-300">
          Professional Construction & Engineering Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Delivering residential, commercial and industrial construction projects across Kenya.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link
            to="/projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg"
          >
            View Our Projects
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Request Quote
          </Link>
        </div>

        {/* Statistics */}
        <div
          ref={ref}
          className="bg-blue-100 py-0.5 px-6 rounded-lg max-w-2xl  grid grid-cols-2 md:grid-cols-4 gap-4 text-center "
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-900">
              {inView ? 120 : 0}+
            </h3>
            <p className="mt-2 text-gray-700">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">
              {inView ? 10 : 0}+
            </h3>
            <p className="mt-2 text-gray-700">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">
              {inView ? 95 : 0}+
            </h3>
            <p className="mt-2 text-gray-700">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-900">
              {inView ? 8 : 0}
            </h3>
            <p className="mt-2 text-gray-700">Ongoing Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

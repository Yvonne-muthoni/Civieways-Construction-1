import { Link } from "react-router-dom";
import heroImage from "/images/hero/construction-hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

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
          className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
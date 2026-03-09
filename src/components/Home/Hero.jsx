import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {

  const images = [
    "/images/hero/Construction.jpeg",
    "/images/projects/Residential Construction.jpeg",
    "/images/projects/Poultry.jpeg",
    "/images/projects/Road.jpeg",
    "/images/projects/General Renovations.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
      images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });

  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 3500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            

          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building the Future with Quality Construction
        </h1>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Civieways Construction delivers reliable, high-quality building
          solutions for residential, commercial, and industrial projects.
        </p>

        <Link
          to="/projects"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg"
        >
          View Our Projects
        </Link>
      </div>

    </section>
  );
}
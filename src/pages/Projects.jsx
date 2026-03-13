import { motion } from "framer-motion";
import { useRef } from "react";

export default function Projects() {

  const projects = [
    {
      heading: "Residential Construction",
      images: [
        "/images/hero/Commercial Construction.jpeg",
        "/images/hero/Residential Construction.jpeg",
        "/images/projects/Construction.jpeg"
      ],
    },

    {
      heading: "Josmil School Homabay",
      images: [
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM (1).jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM (2).jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.29 AM.jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM.jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.21 AM (1).jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.21 AM.jpeg",
        "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.22 AM (1).jpeg",
      ],
    },

    {
      heading: "Shauri Yako Primary School",
      images: [
        "/images/Education/moe.c.jpeg",
        "/images/Education/moe.d.jpeg",
        "/images/Education/moe.e.jpeg",
        "/images/Education/moe.f.jpeg",
        "/images/Education/moe.g.jpeg",
        "/images/Education/moe.h.jpeg",
        "/images/Education/moe.i.jpeg",
        "/images/Education/moe.j.jpeg",
        "/images/Education/moe.k.jpeg",
        "/images/Education/moe.l.jpeg",
        "/images/Education/moe.m.jpeg",
        "/images/Education/moe.n.jpeg",
      ],
    },

    {
      heading: "Muthaiga Masonry Fence",
      images: [
        "/images/Muthaiga Masonry/m.f.jpeg",
        "/images/Muthaiga Masonry/m.a.jpeg",
        "/images/Muthaiga Masonry/m.b.jpeg",
        "/images/Muthaiga Masonry/m.c.jpeg",
        "/images/Muthaiga Masonry/m.d.jpeg",
        "/images/Muthaiga Masonry/m.e.jpeg",
        "/images/Muthaiga Masonry/m.h.jpeg",
        "/images/Muthaiga Masonry/m.i.jpeg",
        "/images/Muthaiga Masonry/m.j.jpeg",
        "/images/Muthaiga Masonry/m.g.jpeg"
      ],
    },

    {
      heading: "AHN Garden City Project",
      images: [
        "/images/Gardencity/ahn.a.jpeg",
        "/images/Gardencity/ahn.b.jpeg",
        "/images/Gardencity/ahn.c.jpeg",
        "/images/Gardencity/ahn.d.jpeg",
        "/images/Gardencity/ahn.e.jpeg",
        "/images/Gardencity/ahn.f.jpeg"
      ],
    },

    {
      heading: "Industrial Projects",
      images: [
        "/images/hero/Industrial.jpeg",
        "/images/projects/Warehouse.jpeg",
      ],
    },

    {
      heading: "Chiromo Human Anatomy Department Project",
      images: [
        "/images/Chiromo/ch.a.jpeg",
        "/images/Chiromo/ch.b.jpeg",
        "/images/Chiromo/ch.c.jpeg",
        "/images/Chiromo/ch.d.jpeg",
        "/images/Chiromo/ch.e.jpeg",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Our Projects
        </motion.h1>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          >
            Building Excellence Across Every Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We take pride in delivering high-quality construction projects
            across residential, commercial, and institutional sectors.
            Our commitment to craftsmanship, safety, and innovation ensures
            that every project we complete meets the highest standards
            of durability and design.
          </motion.p>

        </div>
      </section>

      {/* Project Cards Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {projects.map((project, idx) => {

            const scrollRef = useRef(null);

            const scroll = (direction) => {
              const { current } = scrollRef;
              if (direction === "left")
                current.scrollBy({ left: -500, behavior: "smooth" });
              else
                current.scrollBy({ left: 500, behavior: "smooth" });
            };

            return (
              <div key={idx} className="bg-white shadow-xl rounded-2xl p-8 relative">

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  {project.heading}
                </h2>

                {/* Left Arrow */}
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-900 text-white w-12 h-12 rounded-full shadow-lg"
                >
                  ‹
                </button>

                {/* Images */}
                <div
                  ref={scrollRef}
                  className="flex gap-8 overflow-x-auto scroll-smooth"
                >
                  {project.images.map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      className="w-105 h-80 object-cover rounded-xl shrink-0"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-900 text-white w-12 h-12 rounded-full shadow-lg"
                >
                  ›
                </button>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Renovations",
    "Industrial",
    "Institutional",
  ];

  // Grouped projects: optional heading + images
  const allProjects = {
    Residential: [
      { images: ["/images/hero/Commercial Construction.jpeg", "/images/hero/Residential Construction.jpeg"] },
    ],
    Commercial: [
      {
        heading: "Josmil School",
        images: [
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM (1).jpeg",
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM (2).jpeg",
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.20 AM (3).jpeg",
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
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.21 AM (1).jpeg",
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.21 AM.jpeg",
          "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.22 AM (1).jpeg",
        ],
      },
    ],
    Infrastructure: [
      { images: ["/images/Infrastructure/Bridge.jpeg"] },
    ],
    Renovations: [
      { images: ["/images/Renovations/General Renovations.jpeg", "/images/Renovations/Kitchen.jpeg"] },
    ],
    Industrial: [
      { images: ["/images/hero/Industrial.jpeg", "/images/projects/Warehouse.jpeg"] },
    ],
    Institutional: [
      { images: ["/images/Institutional/Institutional.jpeg"] },
    ],
  };

  // Prepare filtered projects based on category
  const filteredProjects =
    filter === "All"
      ? Object.values(allProjects).flat()
      : allProjects[filter] || [];

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
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Explore some of the projects Civieways Construction has delivered across different sectors.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 pt-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition
                ${
                  filter === category
                    ? "bg-yellow-500 text-blue-900"
                    : "bg-white text-gray-700 shadow hover:bg-yellow-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Masonry Grid with Group Headings */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {filteredProjects.map((group, idx) => (
          <div key={idx}>
            {group.heading && (
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
                {group.heading}
              </h2>
            )}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {group.images.map((src, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid relative rounded-xl overflow-hidden shadow-lg group mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full object-cover rounded-xl group-hover:scale-105 transition duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
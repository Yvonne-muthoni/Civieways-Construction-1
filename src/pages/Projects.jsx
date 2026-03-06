import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {

  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Modern Residential Apartments",
      location: "Nairobi",
      category: "Residential",
      image: "/projects/project1.jpg",
      description:
        "Construction of modern residential apartments designed for comfort and modern living."
    },
    {
      title: "Corporate Office Complex",
      location: "Westlands",
      category: "Commercial",
      image: "/projects/project2.jpg",
      description:
        "Development of a commercial office complex with modern architectural design."
    },
    {
      title: "Highway Development Project",
      location: "Kiambu",
      category: "Infrastructure",
      image: "/projects/project3.jpg",
      description:
        "Road construction project improving connectivity and transport efficiency."
    },
    {
      title: "Luxury Beach Hotel",
      location: "Mombasa",
      category: "Hospitality",
      image: "/projects/project4.jpg",
      description:
        "Development of a luxury hotel with modern amenities and world-class design."
    },
    {
      title: "Industrial Warehouse",
      location: "Athi River",
      category: "Industrial",
      image: "/projects/project5.jpg",
      description:
        "Construction of a large warehouse facility supporting industrial logistics."
    },
    {
      title: "University Lecture Complex",
      location: "Nakuru",
      category: "Institutional",
      image: "/projects/project6.jpg",
      description:
        "Modern lecture halls and academic facilities built for a university campus."
    }
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Hospitality",
    "Industrial",
    "Institutional"
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

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
          Explore some of the projects Civieways Construction has delivered
          across different sectors.
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

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-sm text-yellow-600 font-semibold">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-blue-900 mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {project.location}
                </p>

                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
    </div>
  );
}
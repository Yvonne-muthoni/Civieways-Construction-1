import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {

  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Building Construction",
      category: "Residential",
      image: "/images/projects/Construction.jpeg",
      description:
        "From single family homes to multi-unit apartment complexes and estates,we specialize in constructing safe,comfortable and aesthetically  pleasing residential spaces tailored to modern living."
    },
    {
      title: "Havens Poultry",
      category: "Commercial",
      image: "/images/projects/Poultry.jpeg",
      description:
        "We undertake the construction of retail centers and other commercial structures designed to optimize functionality and appeal for businesses."
    },
    {
      title: "Highway Development Project",
      category: "Infrastructure",
      image: "/images/projects/Road.jpeg",
      description:
        "Road construction project improving connectivity and transport efficiency."
    },
    {
      title: "General Renovations",
      category: "Renovations",
      image: "/images/projects/General Renovations.jpeg",
      description:
        "Comprehensive renovation services for homes,including kitchen and bathroom remodels.Upgrading and modernizing commercial spaces,offices and retail outlets to improve functionality."
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      image: "/images/projects/Warehouse.jpeg",
      description:
        "Construction of a large warehouse facility supporting industrial logistics."
    },
    {
      title: "Chiromo Human Anatomy Department",
      category: "Institutional",
      image: "/images/projects/Institutional.jpeg",
      description:
        "Our expertise extends to the constructionof healthcare facilities adhering to specific functional and regulatory requirements."
    }
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Renovations",
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
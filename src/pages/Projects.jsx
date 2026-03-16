import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useInView } from "react-intersection-observer";

export default function Projects() {

  const heroImage =
    "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.21 AM.jpeg";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative py-25 flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${encodeURI(heroImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-amber-300"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg"
          >
            Explore some of the residential, institutional and infrastructure
            projects delivered by Civieways Construction.
          </motion.p>

          {/* Statistics */}
          <section className="mt-8 flex justify-center">
            <div
              ref={ref}
              className="bg-blue-100 py-4 px-4 rounded-lg max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? 120 : 0}+
                </h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? 10 : 0}+
                </h3>
                <p className="text-gray-700">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? 95 : 0}+
                </h3>
                <p className="text-gray-700">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? 8 : 0}
                </h3>
                <p className="text-gray-700">Ongoing Projects</p>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-12">
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
            across residential, commercial and institutional sectors.
            Our commitment to craftsmanship, safety and innovation ensures
            that every project we complete meets the highest standards
            of durability and design.
          </motion.p>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white shadow-xl rounded-2xl p-8"
            >

              <div className="md:flex md:gap-10 items-center">

                {/* IMAGE */}
                <div className="md:w-1/2">
                  <img
                    src={project.cover}
                    alt={project.heading}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:w-1/2 mt-8 md:mt-0">

                  <h2 className="text-2xl font-bold text-blue-900 mb-3">
                    {project.heading}
                  </h2>

                  <p className="text-black-700 font-extrabold mb-2">
                    Location: {project.location}
                  </p>

                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <p className="text-large font-semibold text-black-700 font-extrabold-800 mb-6">
                    Category: {project.category}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="text-blue-900 font-semibold underline hover:text-blue-700"
                  >
                    View project
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 bg-yellow-500 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Start Your Construction Project with Us
        </h2>

        <p className="text-blue-900 mb-8">
          Contact Civieways Construction today and let's build something great.
        </p>

        <a
          href="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Contact Us
        </a>

      </section>

    </div>
  );
}
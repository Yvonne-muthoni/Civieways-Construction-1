import { motion } from "framer-motion";
import Stats from "../components/Stats";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaHardHat,
  FaLeaf,
  FaComments,
  FaDraftingCompass
} from "react-icons/fa";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
    <section
  className="relative text-white py-25 text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero/Project Management.jpeg')" }}
>

   {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 px-4">

    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-3xl font-bold mb-4"
    >
      About Civieways Construction Company
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-white max-w-2xl mx-auto"
    >
      Building quality structures and lasting relationships across Kenya.
    </motion.p>

  </div>

</section>
      {/* Company Introduction */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="/images/about/Construction site.jpeg"
            alt="Construction site"
            className="rounded-lg shadow-lg h-100 w-full object-cover"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Civieways Construction Ltd is a trusted Kenyan construction company specializing in residential, commercial and infrastructure development.
              Our team of engineers, architects and construction professionals deliver projects built with durability, safety and efficiency. From planning and design to project execution, we ensure every project meets the highest construction standards.

            </p>

            <p className="text-gray-700 leading-relaxed">
              From planning and design to execution and project management,
              Civieways ensures every project is completed efficiently,
              safely, and to the highest level of craftsmanship.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-6 mt-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-8 ">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver superior construction services that exceed client
              expectations, foster strong partnerships, and contribute positively
              to the built environment.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading and most trusted construction partner in East
              Africa, recognized for our innovative solutions and exceptional
              craftsmanship.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Core Values */}
      <section className="py-4 mt-4  bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Integrity",
                desc: "We operate with honesty and transparency..",
              },
              {
                icon: <FaCheckCircle />,
                title: "Client Satisfaction",
                desc: "We prioritize client satisfaction.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "We adopt modern construction technologies.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainability",
                desc: "We support environmentally responsible construction..",
              },
              {
                icon: <FaHardHat />,
                title: "Safety",
                desc: "Safety is our highest priority.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-50 p-6 rounded-lg shadow-md"
              >
                <div className="text-yellow-500 text-3xl mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Construction Process */}
<section className="py-6 bg-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Our Construction Process
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: <FaComments />,
          title: "Consultation",
          desc: "Understanding client goals, requirements and project scope.",
        },
        {
          icon: <FaDraftingCompass />,
          title: "Planning",
          desc: "Engineering design, budgeting and detailed project planning.",
        },
        {
          icon: <FaHardHat />,
          title: "Construction",
          desc: "Professional, safe and efficient project execution.",
        },
        {
          icon: <FaCheckCircle />,
          title: "Delivery",
          desc: "Inspection, final completion and project handover.",
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.03 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
            {step.icon}
          </div>

          <h4 className="text-xl font-semibold text-blue-900 mb-3">
            {step.title}
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            {step.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>
  
       {/* Accreditation & Memberships */}
<section className="py-4 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Our Accreditations & Memberships
    </h2>

    <div className="flex flex-wrap justify-center gap-12 items-center">

      {/* NCA Logo - slides in from left */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center w-48 h-48"
      >
        <img
          src="/images/about/NCA.png"
          alt="National Construction Authority"
          className="max-h-24 object-contain"
        />
      </motion.div>

      {/* Nairobi County Logo - slides in from right */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center w-48 h-48"
      >
        <img
          src="/images/about/Nairobi County.png"
          alt="Nairobi County"
          className=""
        />
      </motion.div>

    </div>
  </div>
</section>
          

      {/* Call To Action */}
      <section className="py-4 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
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

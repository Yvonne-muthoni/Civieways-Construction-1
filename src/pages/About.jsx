import { motion } from "framer-motion";
import Stats from "../components/Stats";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaHardHat,
  FaLeaf,
  FaHome,
  FaBuilding,
  FaUniversity,
  FaRoad,
  FaHotel,
  FaIndustry,
} from "react-icons/fa";

export default function About() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Civieways Construction Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-200 max-w-2xl mx-auto"
        >
          Building quality structures and lasting relationships across Kenya.
        </motion.p>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="src/images/about/Construction site.jpeg"
            alt="Construction site"
            className="rounded-lg shadow-lg h-96 w-full object-cover"
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
              Civieways Construction Limited is a reputable and dynamic construction
              firm dedicated to delivering high-quality building, renovation and
              infrastructure solutions. Based in Kenya, we bring a wealth of expertise
              to every project, ensuring timely completion, cost efficiency and
              adherence to the highest standards of safety and quality.
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
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Integrity",
                desc: "We operate with honesty, transparency and ethical conduct in all our dealings, building trust with our clients, partners and employees.",
              },
              {
                icon: <FaCheckCircle />,
                title: "Client Satisfaction",
                desc: "We prioritize understanding our clients' needs and work collaboratively to ensure their vision is realized, fostering long-term relationships.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "We embrace innovative construction techniques and technologies to enhance efficiency, reduce cost and deliver cutting-edge solutions.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainability",
                desc: "We are committed to environmentally responsible construction practices, minimizing our ecological footprint and promoting sustainable development.",
              },
              {
                icon: <FaHardHat />,
                title: "Safety",
                desc: "The health and safety of our workforce, clients and the public are paramount. We implement stringent safety protocols and maintain a zero-incident culture.",
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

      {/* Sectors We Serve */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sectors We Serve</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome />,
                title: "Residential Sector",
                desc: "Delivering high-quality homes, apartments, and residential estates, focusing on comfort, safety and modern living standards.",
              },
              {
                icon: <FaBuilding />,
                title: "Commercial Sector",
                desc: "Constructing and renovating office buildings, retail centers, warehouses and industrial facilities that enhance business operations and appeal.",
              },
              {
                icon: <FaUniversity />,
                title: "Institutional Sector",
                desc: "Building and upgrading educational institutions, healthcare facilities, community centers and other public buildings, designed for specific functional and regulatory requirements.",
              },
              {
                icon: <FaRoad />,
                title: "Infrastructure Sector",
                desc: "Contributing to essential public works through the construction of roads, highways, earthworks and comprehensive drainage systems.",
              },
              {
                icon: <FaHotel />,
                title: "Hospitality Sector",
                desc: "Developing and renovating hotels, resorts, restaurants and leisure facilities, creating inviting and functional spaces for guests and operations.",
              },
              {
                icon: <FaIndustry />,
                title: "Industrial & Manufacturing Sector",
                desc: "Constructing specialized facilities such as factories and production plants.",
              },
            ].map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12, scale: 1.03 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300"
              >
                <div className="text-yellow-500 text-4xl mb-4 flex justify-center group-hover:scale-110 transition">
                  {sector.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{sector.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Civieways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Why Choose Civieways</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Construction",
                desc: "Our team delivers durable and reliable structures, meeting the highest construction standards.",
              },
              {
                title: "Professional Team",
                desc: "Experienced engineers, architects, and skilled workers ensuring excellence in every project.",
              },
              {
                title: "Timely Delivery",
                desc: "We complete projects on schedule without compromising quality, respecting client deadlines.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 shadow-md rounded-lg"
              >
                <h4 className="text-xl font-semibold text-yellow-500 mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Accreditation & Memberships */}
       {/* Accreditation & Memberships */}
<section className="py-20 bg-blue-50">
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
          src="src/images/about/NCA.png"
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
          src="src/images/about/Nairobi County.png"
          alt="Nairobi County"
          className=""
        />
      </motion.div>

    </div>
  </div>
</section>
          

      {/* Call To Action */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Ready to Start Your Construction Project?
        </h2>

        <p className="text-blue-900 mb-8">
          Contact Civieways Construction today and let's build something great together.
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
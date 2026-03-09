import { motion } from "framer-motion";
import {
  FaBuilding,
  FaTools,
  FaRoad,
  FaHardHat,
  FaIndustry,
  FaPaintRoller,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Building Construction",
      description:
        "We construct high-quality residential and commercial buildings using modern construction techniques and professional project management.",
      icon: <FaBuilding />,
    },
    {
      title: "General Renovations",
      description:
        "Upgrade and transform existing structures with modern designs, improved functionality, and enhanced durability.",
      icon: <FaTools />,
    },
    {
      title: "Road and Earthworks Construction",
      description:
        "We undertake infrastructure projects such as roads, drainage systems, and other essential civil works.",
      icon: <FaRoad />,
    },
    {
      title: "Project Management",
      description:
        "Our team ensures projects are delivered on time, within budget, and according to the highest construction standards.",
      icon: <FaHardHat />,
    },
    {
      title: "Industrial Construction",
      description:
        "Construction of factories, warehouses, and manufacturing facilities designed for efficiency and long-term durability.",
      icon: <FaIndustry />,
    },
    {
      title: "Interior & Exterior Finishing",
      description:
        "Professional finishing services including painting, fittings, and modern design enhancements.",
      icon: <FaPaintRoller />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Our Services
        </motion.h1>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Civieways Construction offers reliable and professional construction
          services tailored to meet the needs of our clients.
        </p>
      </section>

      {/* Animated Background Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero/construction-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Services Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }}
              className="bg-white/90 rounded-xl shadow-lg p-8 text-center backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="text-yellow-500 text-4xl mb-4 flex justify-center"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
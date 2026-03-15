import { motion } from "framer-motion";
import {
  FaRegComments,
  FaRegCalendarAlt,
  FaProjectDiagram,
  FaClipboardCheck,
} from "react-icons/fa";

export default function Services() {
  const heroImage = "/images/hero/construction-hero.jpg";

  const services = [
    {
      title: "Building Construction",
      description: "Residential homes, apartments and commercial building projects.",
      features: ["✔ Residential Homes", "✔ Apartment Complexes", "✔ Office Buildings"],
      image: "/images/hero/Commercial Construction.jpeg",
    },
    {
      title: "Renovations",
      description: "Modern renovation services for residential and commercial properties.",
      features: ["✔ Kitchen Remodeling", "✔ Structural Repairs", "✔ Waterproofing"],
      image: "/images/Gardencity/ahn.a.jpeg",
    },
    {
      title: "Road & Earthworks",
      description: "Road construction and site preparation works.",
      features: ["✔ Road Construction", "✔ Excavation", "✔ Drainage Systems"],
      image: "/images/hero/Road.jpeg",
    },
    {
      title: "Project Management",
      description: "Professional management from planning to delivery.",
      features: ["✔ Project Planning", "✔ Engineering Coordination", "✔ Budget Management"],
      image: "/images/hero/Project Management.jpeg",
    },
    {
      title: "Industrial Construction",
      description: "Factories and warehouse construction projects.",
      features: ["✔ Warehouses", "✔ Manufacturing Facilities", "✔ Structural Installations"],
      image: "/images/Haco Industries/h.a.jpeg",
    },
    {
      title: "Interior & Exterior Finishing",
      description: "Professional interior finishing and fit-out services.",
      features: ["✔ Painting", "✔ Flooring", "✔ Custom Joinery"],
      image: "/images/projects/Institutional.jpeg",
    },
  ];

  const constructionProcess = [
    {
      title: "Consultation",
      desc: "Understanding project requirements.",
      icon: <FaRegComments />,
    },
    {
      title: "Planning",
      desc: "Engineering design and preparation.",
      icon: <FaRegCalendarAlt />,
    },
    {
      title: "Construction",
      desc: "Professional project execution.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Delivery",
      desc: "Inspection and project handover.",
      icon: <FaClipboardCheck />,
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section
        className="relative h-100 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Our Construction Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg"
          >
            Professional residential, commercial and infrastructure construction solutions across Kenya.
          </motion.p>
        </div>
      </section>

      {/* What We Do Heading */}
      <section className="py-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What We Do</h2>
      </section>

      {/* Services List */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse md:grid-cols-2" : ""
              }`}
            >
              {/* Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              {/* Info */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="text-gray-700 list-none ml-0">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-1 text-yellow-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Construction Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {constructionProcess.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-blue-50 rounded-lg shadow-md flex flex-col items-center justify-center"
              >
                <div className="text-yellow-500 text-5xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h4>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-6 bg-yellow-500 text-center">
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

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
        "From single family homes to multi-unit apartment complexes and estates,we specialize in constructing safe,comfortable and aesthetically pleasing residential places.We undertake the construction of office blocks,retail centers,warehouses,industrial facilities and other commercial structures,designed to optimize functionalit,efficiency and appeal for businesses.",
      icon: <FaBuilding />,
      image: "/images/hero/Commercial Construction.jpeg",
    },
    {
      title: "General Renovations",
      description:
        "Comprehensive renovation services for homes,including kitchen and bathroom remodels,room additions.We also deal with upgrading and modernizing commercial spaces,offices and retail outlets to improve functionality.We also deal with structural refurbishment by strengthening the existing structural element,masonry repair,concrete restoration and waterproofing to extend the lifespan and ensure safety of older buildings.",
      icon: <FaTools />,
      image: "/images/Gardencity/ahn.a.jpeg",
    },
    {
      title: "Road & Earthworks",
      description:
        "Expertise in the construction of new roads,highways,access roads and urban streets,including site preparation,sub-base and base course laying.Extensive earthmoving services including excavation,backfilling,compaction,leveling for various construction project.This forms the critical foundation for all subsequent construction activities.Design and installation of effective drainage solutions,including culverts,storm drains and erosion control measures .",
      icon: <FaRoad />,
      image: "/images/hero/Road.jpeg",
    },
    {
      title: "Project Management",
      description:
        "We manage the entire building lifecycle from concept to completion,including architectural coordintaion,structural engineering,MEP(Mechanical,Electrical,Plumbing)installations,finishes and landscaping.",
      icon: <FaHardHat />,
      image: "/images/hero/Project Management.jpeg",
    },
    {
      title: "Industrial Construction",
      description:
        "Construction of factories, warehouses, and manufacturing facilities designed for efficiency and long-term durability and optimize functionality efficiency and appeal for businesses.",
      icon: <FaIndustry />,
      image: "/images/Haco Industries/h.a.jpeg",
    },
    {
      title: "Interior & Exterior Finishing",
      description:
        "Complete interior fit-out services including partioning,ceiling works,flooring,painting,custom joinery and installation of fixtures and fittings to create bespoke interior environments.",
      icon: <FaPaintRoller />,
      image: "/images/projects/Institutional.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">

      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Civieways Construction offers reliable and professional construction
          services tailored to meet the needs of our clients.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse md:grid-cols-2" : ""
            }`}
          >
            {/* Image with slide animation */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Info with fade-in */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-4xl mr-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
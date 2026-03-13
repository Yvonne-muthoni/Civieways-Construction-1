import React from "react";

// Sample services data
const services = [
  {
    title: "Residential Construction",
    description:
      "Modern homes and residential developments built with quality and durability.",
    image: "/images/hero/Residential Construction.jpeg",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, retail centers and business infrastructure.",
    image: "/images/hero/Commercial Construction.jpeg",
  },
  {
    title: "Industrial Projects",
    description:
      "Large-scale industrial facilities and warehouses.",
    image: "/images/hero/Industrial.jpeg",
  },
  {
    title: "Project Management",
    description:
      "Complete project supervision from planning to completion.",
    image: "/images/hero/Project Management.jpeg",
  },
];

export default function ServicesPreview() {
  return (
    <>
      {/* Services Section */}
      <section className="py-10 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl sm:text-2xl font-bold text-blue-600 text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-700">{service.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
import React from "react";

// Sample services data
const services = [
  {
    title: "Residential Construction",
    description: "From single family homes to multi-unit apartment complexes and estates,we specialize in constructing safe,comfortable,and aesthetically pleasing residential spaces tailored to modern living.",
    image: "src/images/hero/Residential Construction.jpeg",
  },
  {
    title: "Commercial Construction",
    description: "We undertake the construction of office blocks,retail centers,warehouses,industrial facilities,and other commercial structures,designed to optimize functionality,efficiency and appeal for businesses.",
    image: "src/images/hero/Commercial Construction.jpeg",
  },
  {
    title: "Industrial Projects",
    description: "Our expertise extends to the construction of educational institutions,healthcare facilities,community centers and public buildings,adhering to specific functional and regulatory requirements.",
    image: "src/images/hero/Industrial.jpeg",
  },
  {
    title: "Project Management",
    description: "We manage the entire building lifecycle from concept to completion,including architectural coordination,structural engineering,MEP(Mechanical,Electrical,Plumbing)installations,finishes and landscaping.",
    image: "src/images/hero/Project Management.jpeg",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-12">
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
  );
}
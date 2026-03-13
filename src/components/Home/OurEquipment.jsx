import { GiBulldozer, GiCrane, GiConcreteBag } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

const equipmentList = [
  {
    icon: <GiBulldozer size={60} color="#F87171" />,
    name: "Excavator",
    description: "Efficient earthmoving and digging machinery",
  },
  {
    icon: <GiCrane size={60} color="#60A5FA" />,
    name: "Crane",
    description: "For lifting and transporting heavy materials",
  },
  {
    icon: <GiConcreteBag size={60} color="#FBBF24" />,
    name: "Concrete Mixer",
    description: "Ensures precise and consistent concrete mixing",
  },
  {
    icon: <MdSecurity size={60} color="#34D399" />,
    name: "Safety Systems",
    description: "State-of-the-art safety equipment for all projects",
  },
];

export default function OurEquipment() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Our Equipment
        </h2>
        <p className="text-gray-700 mb-12">
          We invest in modern, high-quality machinery and tools to ensure efficiency and safety on every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {equipmentList.map((eq, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-lg p-6 shadow-lg hover:scale-105 transition transform"
            >
              <div className="mb-4">{eq.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">{eq.name}</h3>
              <p className="text-gray-700 mt-2">{eq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

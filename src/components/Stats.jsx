import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { label: "Projects Completed", end: 120 },
  { label: "Years Experience", end: 15 },
  { label: "Happy Clients", end: 80 },
  { label: "Skilled Workers", end: 25 },
];

function StatCard({ stat, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const end = stat.end;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stat.end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow"
    >
      <h3 className="text-4xl font-bold text-yellow-500">{count}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
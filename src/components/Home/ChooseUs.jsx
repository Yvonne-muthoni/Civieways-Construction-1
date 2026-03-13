import { motion } from "framer-motion";

export default function ChooseUs() {
  const reasons = [
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
  ];

  return (
    <section className="pt-20 pb-20 mt-6 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Why Choose Civieways
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 shadow-md rounded-lg"
            >
              <h4 className="text-xl font-semibold text-yellow-500 mb-4">
                {item.title}
              </h4>
              <p className="text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Floating Form */}
      <section className="relative w-full h-[90vh] md:h-[80vh] flex flex-col md:flex-row">
        
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full h-96 md:h-full relative"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/contact/construction-contact.jpg"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        {/* Right Floating Form */}
        <motion.div
          className="md:w-1/2 w-full flex items-center justify-center p-8 md:p-16 -mt-32 md:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <form className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md md:max-w-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

      </section>

      {/* Contact Info Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaPhoneAlt />,
            title: "Phone",
            desc: "+254 700 000 000",
          },
          {
            icon: <FaEnvelope />,
            title: "Email",
            desc: "info@civieways.co.ke",
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            desc: "Nairobi, Kenya",
          },
        ].map((info, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="text-yellow-500 text-4xl mb-4">{info.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{info.title}</h3>
            <p className="text-gray-600">{info.desc}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
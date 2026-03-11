import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaComments,
} from "react-icons/fa";

export default function Contact() {

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Why Choose Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Why Choose Civieways
          </h2>

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
                <h4 className="text-xl font-semibold text-yellow-500 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* Map Section */}
      <section className="relative w-full h-[80vh] flex flex-col md:flex-row">

        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="Civieways Location"
            src="https://maps.google.com/maps?q=Ngara%20Kirima%20Market%20Building%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
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
            desc: "Muslim Rd off Park Road, Ngara - Kirima Market Building",
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

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {info.title}
            </h3>

            <p className="text-gray-600">{info.desc}</p>
          </motion.div>
        ))}

      </section>


      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">

        {open && (
          <>
            <a
              href="https://wa.me/254700000000"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="#"
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="#"
              className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:info@civieways.co.ke"
              className="bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800"
            >
              <FaEnvelope size={20} />
            </a>
          </>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600"
        >
          <FaComments size={22} />
        </button>

      </div>

    </div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaComments,
} from "react-icons/fa";

export default function Contact() {

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const heroImage = "/images/Education/moe.j.jpeg";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Construction Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
`;

    window.location.href = `mailto:info@civieways.co.ke?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section
        className="relative h-125 flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Contact Civieways Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg"
          >
            Have a construction project in mind? Let's discuss how we can help you build.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14"
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-10 rounded-xl shadow-lg space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />

              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>


            {/* CONTACT DETAILS */}
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900">Phone</h3>
                  <p className="text-gray-600">+254 702 092 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900">Email</h3>
                  <p className="text-gray-600">info@civieways.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div>
                  <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                 📍 Office Location
                </h3>
                  <p className="text-gray-600">
                    Muslim Rd off Park Road,
                    Ngara - Kirima Market Building,
                    Nairobi
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM – 5:00 PM <br/>
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* MAP SECTION (SMALLER) */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="Civieways Location"
            src="https://maps.google.com/maps?q=Ngara%20Kirima%20Market%20Building%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-100 border-0"
            loading="lazy"
          ></iframe>

        </div>
      </section>


      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">

        {open && (
          <>
            <a
              href="https://wa.me/254702092456"
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
import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaComments,
} from "react-icons/fa";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Your Construction Project?
        </h2>

        <p className="text-gray-200 mb-8 text-lg">
          Partner with Civieways Construction Company for reliable,
          professional, and high-quality building solutions across Kenya.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition"
        >
          Contact Us Today
        </Link>

      </div>
    </section>
  );
}
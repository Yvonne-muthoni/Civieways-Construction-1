import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="/images/about/Construction site.jpeg"
            alt="Civieways Construction Team"
            className="rounded-lg shadow-lg w-full object-cover h-96"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
            About Civieways Construction Company
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Civieways Construction Company is a trusted construction firm in Kenya,
            delivering high-quality residential, commercial, and industrial projects.
            With a strong commitment to excellence, safety, and innovation, we turn
            visions into lasting structures.
          </p>

          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}
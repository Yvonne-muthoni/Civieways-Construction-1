export default function OurLocation() {
  return (
    <section className="py-8 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Our Location
        </h2>

        <p className="text-gray-600 mb-4">
          Muslim Rd off Park Road, Ngara - Kirima Market Building, Nairobi
        </p>

        {/* Small Map */}
        <div className="w-full h-56 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://maps.google.com/maps?q=Muslim%20Rd%20off%20Park%20Road%20Ngara%20Kirima%20Market%20Building%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            title="Civieways Location"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Muslim+Rd+Ngara+Kirima+Market+Building"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-900 font-semibold hover:underline"
        >
          View on Google Maps
        </a>

      </div>
    </section>
  );
}
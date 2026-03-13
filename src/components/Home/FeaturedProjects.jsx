import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Residential Construction",
      image: "/images/hero/Residential Construction.jpeg",
      link: "/projects#residential",
    },
    {
      title: "Josmil School",
      image: "/images/Josmil School/WhatsApp Image 2026-03-10 at 11.46.25 AM (2).jpeg",
      link: "/projects#commercial",
    },
    {
      title: "Industrial Projects",
      image: "/images/hero/Industrial.jpeg",
      link: "/projects#industrial",
    },
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-15 mb-6">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-12 text-center mt-8">
          Featured Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={`${project.title}-${index}`} // ✅ Unique key using index
              to={project.link}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 font-semibold">
                  {project.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
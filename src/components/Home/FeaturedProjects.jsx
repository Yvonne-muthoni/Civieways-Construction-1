export default function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Residential Estate",
      location: "Nairobi, Kenya",
      image: "/images/projects/project1.jpg",
    },
    {
      title: "Commercial Office Complex",
      location: "Mombasa, Kenya",
      image: "/images/projects/project2.jpg",
    },
    {
      title: "Industrial Warehouse",
      location: "Kisumu, Kenya",
      image: "/images/projects/project3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-white">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-xl text-center p-8 bg-white rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Project not found</h1>
          <p className="text-gray-600 mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-900 underline mb-8"
          >
            ← Back to projects
          </button>

          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-1/2">
              <img
                src={project.mainImage}
                alt={project.heading}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                {project.heading}
              </h1>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center gap-2 text-gray-600 mb-8">
                <span className="text-xl">📍</span>
                <span>{project.location}</span>
              </div>

              {project.gallery.length > 0 ? (
                <>
                  <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                    Project Gallery
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.map((src, idx) => (
                      <motion.img
                        key={idx}
                        src={src}
                        alt={`${project.heading} ${idx + 1}`}
                        className="w-full h-52 object-cover rounded-xl shadow-md"
                        whileHover={{ scale: 1.03 }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-600">No additional photos available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

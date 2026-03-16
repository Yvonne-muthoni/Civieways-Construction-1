import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return <div className="p-20 text-center">Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/projects"
            className="text-yellow-500 font-semibold mb-6 inline-block"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
            {project.title}
          </h1>

          <div className="relative">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-125 object-cover rounded-lg"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentImage(index)}
                className="cursor-pointer h-24 w-full object-cover rounded hover:opacity-70"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
            {project.title}
          </h1>

          <div className="relative">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-auto max-h-150 object-contain rounded-lg bg-gray-100"
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
    <div
      key={index}
      onClick={() => setCurrentImage(index)}
      className="cursor-pointer aspect-3/4 bg-gray-100 rounded overflow-hidden flex items-center justify-center"
    >
      <img
        src={img}
        alt=""
        className="max-h-full max-w-full object-contain hover:opacity-70 transition"
      />
    </div>
  ))}
</div>

          <div className="mt-10 text-center">
           <button
  onClick={() => navigate(-1)}
  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition duration-300"
>
  ← Back to Projects
</button>
          </div>
        </div>
      </section>
    </div>
  );
}


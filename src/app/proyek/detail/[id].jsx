"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get/${id}`
        );
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{project.project_name}</h1>
      <p className="text-gray-600">{project.description}</p>
      <div className="mt-4">
        <p>
          <strong>Budget:</strong> ${project.budget}
        </p>
        <p>
          <strong>Target Time:</strong> {project.target_time}
        </p>
        <p>
          <strong>Start Time:</strong> {project.start_time}
        </p>
        <p>
          <strong>City:</strong> {project.city}
        </p>
        <p>
          <strong>Province:</strong> {project.province}
        </p>
      </div>
      <img
        src={project.image_url}
        alt={project.project_name}
        className="mt-4 w-full"
      />
    </div>
  );
};

export default ProjectDetail;

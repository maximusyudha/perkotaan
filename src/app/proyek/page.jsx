"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";

const ProjectDetail = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");

    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get/${id}`
        );
        // console.log(response.data.data);
        setProject(response.data.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (searchParams) {
      fetchProject();
    }
  }, [searchParams]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{project[0].project_name}</h1>
      <p className="text-gray-600">{project[0].description}</p>
      <div className="mt-4">
        <p>
          <strong>Budget:</strong> ${project[0].budget}
        </p>
        <p>
          <strong>Target Time:</strong> {project[0].target_time}
        </p>
        <p>
          <strong>Start Time:</strong> {project[0].start_time}
        </p>
        <p>
          <strong>City:</strong> {project[0].city}
        </p>
        <p>
          <strong>Province:</strong> {project[0].province}
        </p>
      </div>
      <img
        src={project[0].image_url}
        alt={project[0].project_name}
        className="mt-4 w-full"
      />
    </div>
  );
};

export default ProjectDetail;

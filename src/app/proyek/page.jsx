"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";

const ProjectDetail = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [project, setProject] = useState(null);


  const formatBudgetToRupiah = (budget) => {
    const exchangeRate = 1;
    const budgetInRupiah = budget * exchangeRate;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(budgetInRupiah);
  };

  useEffect(() => {
    const id = searchParams.get("id");

    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get/${id}`
        );
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
    <div className="container mx-auto mt-56 flex mb-80">
      <div className="w-1/2">
        <img
          src={project[0].image_url}
          alt={project[0].project_name}
          className="w-full"
        />
      </div>
      <div className="w-1/2 ml-4">
        <h1 className="text-3xl font-bold mb-4">{project[0].project_name}</h1>
        <p className="text-gray-600">{project[0].description}</p>
        <div className="mt-4">
          <p>
            <strong>Budget:</strong> {formatBudgetToRupiah(project[0].budget)}
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
      </div>
    </div>
  );
};

export default ProjectDetail;

"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faClock,
  faCalendar,
  faMapMarker,
  faFlag,
  faMapLocation,
  faHeart,
  faShare,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyLink = () => {
    const projectUrl = `${window.location.origin}${pathname}?id=${project[0].id}`;
    navigator.clipboard
      .writeText(projectUrl)
      .then(() => {
        console.log('Link copied to clipboard:', projectUrl);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error copying link to clipboard:', error);
      });
  };

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

  const goBack = () => {
    router.back();
  };

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className="container mx-auto flex mb-80 mt-24">
      <div className="w-1/2 ml-40 rounded-lg object-cover">
        <img
          src={project[0].image_url}
          alt={project[0].project_name}
          className="w-full h-auto rounded obeject-cover"
          style={{ height: "461px", width: "463px" }}
        />
      </div>
      <div className="-ml-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold mb-4">{project[0].project_name}</h1>
          </div>
          <div className="flex space-x-4">
            <button className="rounded-full h-8 w-8 bg-blue-500 text-white flex justify-center items-center">
              <FontAwesomeIcon icon={faHeart} className="" />
            </button>
            <button
              className="rounded-full h-8 w-8 bg-green-500 text-white flex justify-center items-center"
              onClick={handleCopyLink}
            >
              <FontAwesomeIcon icon={faShare} className="" />
            </button>
          </div>
        </div>
        <p className="text-lg flex items-center">
          <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
          {project[0].province}
        </p>
        <p className="font-bold text-sm mt-10">Deskripsi</p>
        <p className="text-gray-600 text-sm">{project[0].description}</p>

        <p className="font-bold text-sm mt-10">Rincian Pembangunan</p>
        <div className="flex space-x-4 mt-2">
          <div className="border-2 border-gray-200 w-40 p-2">
            <p className="text-sm">Luas Area: 1,2 Hektar</p>
          </div>
          <div className="border-2 border-gray-200 w-46 p-2">
            <p className="text-sm">Total Unit: 24 Gedung, 56 Rumah</p>
          </div>
        </div>
        <p className="font-bold text-sm mt-10">Penanggung Jawab Proyek</p>
        <div className="mt-6 flex items-center">
          <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-300"></div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Maximus Yudha Prasetyo</h2>
            <h6 className="text-sm text-gray-400">Developer</h6>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-300"></div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Mahesa Bagus Raditya</h2>
            <h6 className="text-sm text-gray-400">Arsitek</h6>
          </div>
        </div>

        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-md">
            <p className="text-sm font-semibold">URL Berhasil Disalin</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ProjectDetail;

"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapContainers from "@/components/Map";
import 'leaflet/dist/leaflet.css';
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
import CommentSection from "@/components/Comment";

const ProjectDetail = ({ projectId }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  function formatDate(dateTimeString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = new Date(dateTimeString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }


  const formatBudgetToRupiah = (budget) => {
    const exchangeRate = 1;
    const budgetInRupiah = budget * exchangeRate;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(budgetInRupiah);
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
    <div className="container mx-auto flex flex-col lg:flex-row mb-10 lg:mb-80 mt-10 lg:mt-24">
    <div className="w-full lg:w-1/2 lg:ml-40 mb-6 lg:mb-0">
      <img
        src={project[0].image_url}
        alt={project[0].project_name}
        className="w-full h-auto rounded object-cover"
        style={{ height: "461px", width: "100%" }}
      />
    </div>
    <div className="ml-4 lg:ml-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold mb-4">
                {project[0].project_name}
              </h1>
        </div>
        <div className="flex space-x-4 mr-4 lg:mr-40">
          <button className="rounded-full h-8 w-8 bg-gray-500 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="" />
          </button>
          <button
            className="rounded-full h-8 w-8 bg-gray-500 text-white flex justify-center items-center"
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
      <p className="text-gray-600 text-sm mb-8 lg:mr-32">
            {project[0].description}
          </p>

    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <p className="font-bold text-sm">Pengerjaan Dimulai</p>
        <p className="text-lg mt-2 text-gray-500 mb-4">{formatDate(project[0].start_time)} </p>
      </div>
      <div className="mt-4 lg:mt-0">
        <p className="font-bold text-sm">Perkiraan Selesai</p>
        <p className="text-lg mt-2 text-gray-500 mb-4">{formatDate(project[0].target_time)} </p>
      </div>
    </div>

    <div className="mt-4">
      <p className="font-bold text-sm">Nilai Proyek :</p>
      <p className="text-xl mt-2 text-gray-500">Rp. {project[0].budget.toLocaleString("id-ID")}</p>
    </div>

    <p className="font-bold text-sm mt-5">Rincian Pembangunan</p>
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-2">
      <div className="border-2 border-gray-200 p-2">
        <p className="text-sm">Luas Area: 1,2 Hektar</p>
      </div>
      <div className="border-2 border-gray-200 p-2">
        <p className="text-sm">Total Unit: 24 Gedung, 56 Rumah</p>
      </div>
    </div>
    <p className="font-bold text-sm mt-10">Penanggung Jawab Proyek</p>
    <div className="mt-6 flex flex-col lg:flex-row items-center">
      <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-300"></div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">Maximus Yudha Prasetyo</h2>
        <h6 className="text-sm text-gray-400">Developer</h6>
      </div>
    </div>
    <div className="mt-6 flex flex-col lg:flex-row items-center">
      <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-300"></div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">Mahesa Bagus Raditya</h2>
        <h6 className="text-sm text-gray-400">Arsitek</h6>
      </div>
    </div>

    <div className="mt-10">
      <MapContainers project={project} />
    </div>

    <div>
      <CommentSection projectId={projectId} />
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

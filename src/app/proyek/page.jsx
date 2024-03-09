"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import MapContainers from "@/components/Map";
import dynamic from "next/dynamic";
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
import { FaFilePdf } from "react-icons/fa6";
import CommentSection from "@/components/Comment";
import { object } from "prop-types";
import PriceCard from "@/components/Price";

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const ProjectDetail = ({ projectId }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  const handleDownload = () => {
    const downloadUrl = project[0].project_url; // Replace with your actual download link
    window.location.href = downloadUrl;
  };

  const goBack = () => {
    router.back();
  };

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row mb-16 mt-10 lg:mt-24">
        <div className="w-full  ml-6 lg:mb-0">
          <img
            src={project[0].image_url}
            alt={project[0].project_name}
            className="w-full h-auto rounded object-fill"
            style={{ height: "463px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="ml-4 lg:ml-16 w-full lg:w-1/2">
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
            <button className="rounded-full h-8 w-8 bg-gray-500 text-white flex justify-center items-center">
              <FontAwesomeIcon icon={faShare} className="" />
            </button>
            <button
              className="px-4 py-2 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white focus:outline-none"
              onClick={openModal}
            >
              Show Price
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
            <p className="text-lg mt-2 text-gray-500 mb-4">
              {formatDate(project[0].start_time)}{" "}
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-bold text-sm">Perkiraan Selesai</p>
            <p className="text-lg mt-2 text-gray-500 mb-4">
              {formatDate(project[0].target_time)}{" "}
            </p>
          </div>
        </div>

        <p className="font-bold text-medium mt-5">Rincian Pembangunan</p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-2">
          <div className="border-2 border-gray-200 p-2">
            <p className="text-sm">Luas Area: 1,2 Hektar</p>
          </div>
          <div className="border-2 border-gray-200 p-2">
            <p className="text-sm">Total Unit: 24 Gedung, 56 Rumah</p>
          </div>
        </div>
        <p className="font-bold text-medium mt-10">Pemilik Properti</p>
        <div className="mt-6 flex flex-col lg:flex-row items-center">
          <div className="rounded-full h-14 w-14 flex items-center justify-center bg-gray-300"></div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Maximus Yudha Prasetyo</h2>
          </div>
        </div>

        <p className="font-bold text-medium mt-10">Rincian Penggunaan Dana</p>
        <div className="download-container flex items-center p-4 rounded border border-gray-300 mt-2">
          <FaFilePdf className="w-7 h-7" />
          <div className="flex-grow ml-2">
            <div className="flex items-center">
              <span className="text-l font-light ">
                Rincian Penggunaan Dana {project[0].project_name}.pdf
              </span>
            </div>
            <span className="text-sm text-gray-600 ">12MB</span>
          </div>
          <button
            className="px-4 py-2 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white focus:outline-none"
            onClick={handleDownload}
          >
            Download
          </button>
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
      <div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
              {/* PriceCard component */}
              <PriceCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetail;

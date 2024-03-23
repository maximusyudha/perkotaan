"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function PriceCard() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/get/${id}`
        );

        if (response.data.status === "success") {
          setProject(response.data.data[0]);
        } else {
          console.error("Error fetching project:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, []);

  if (!project) {
    return null; // Menampilkan null jika data proyek belum dimuat
  }
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-30 w-30 object-cover ml-16 mt-10 md:w-48"
            src={project.image_url}
            alt={project.project_name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {project.city}, {project.province}
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            {project.project_name}
          </h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="mt-4">
            <span className="text-gray-600">Price:</span>{" "}
            <span className="font-semibold">
              Rp. {project.budget.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto color-blue"
          open={open}
          onClose={closeModal} // Memperbaiki properti onClose dengan menggunakan fungsi closeModal
        ></Dialog>
      </Transition.Root>
    </div>
  );
}

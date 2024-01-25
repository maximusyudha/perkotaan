"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ReportPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    village: '',
    address: '',
    reason: '',
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e, fileType) => {
    const file = e.target.files[0];

    if (fileType === 'photo') {
      setPhotoFile(file);
    } else if (fileType === 'proposal') {
      setProposalFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('name', formData.name);
      formDataToSend.append('village', formData.village);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('reason', formData.reason);

      if (photoFile) {
        formDataToSend.append('image', photoFile);
      }
      if (proposalFile) {
        formDataToSend.append('proposal', proposalFile);
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_SECRET}/project/submission/`,
        formDataToSend
      );

      console.log('Report submitted successfully:', response.data);
      toggleModal(); // Show success modal
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = () => {
      onClose();
      router.push('/');
    };

    return (
          <div className="fixed inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div className="modal-overlay fixed inset-0" onClick={onClose}></div>
    
    <div className="modal-content bg-white p-8 rounded shadow-lg">
      <p className="text-lg font-semibold mb-4">Data anda telah berhasil terkirim</p>
      
      <div className="flex items-center justify-center mb-4">
        <iframe
          src="https://giphy.com/embed/tf9jjMcO77YzV4YPwE"
          width="200" // Sesuaikan dengan lebar yang diinginkan
          height="200" // Sesuaikan dengan tinggi yang diinginkan
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <button 
        onClick={handleClose} 
        className="w-full bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Close
      </button>
    </div>
  </div>
</div>


    
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-10">
      <h1 className="text-3xl items-center ml-36 font-bold mb-4">Buat Pengajuan Pembangunan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Nama (Sesuai KTP)
          <input type="text" name="name" onChange={handleChange} placeholder='Masukan Nama' required className="mt-1 p-2 border rounded-md w-full required" />
        </label>

        <label className="block">
          Skala Pengajuan (RT/RW, Desa/Kecamatan, Kabupaten/Kota)
          <input name="village" onChange={handleChange} placeholder='Desa/Kecamatan' required className="mt-1 p-2 border rounded-md w-full required" />
        </label>

        <label className="block">
          Alamat Lengkap  (Tempat yang ingin diajukan pembangunan)
          <input type="text" name="address" onChange={handleChange} placeholder='Masukan Alamat' required className="mt-1 p-2 border rounded-md w-full required" />
        </label>

        <label className="block">
          Alasan Pengajuan (Contoh: Jalan rusak)
          <input type="text" name="reason" onChange={handleChange} placeholder='Deskripsikan..' required className="mt-1 p-2 border rounded-md w-full required" />
        </label>

        <label className="block">
          Foto Pendukung (Wajib)
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleFileInputChange(e, 'photo')}
            className="mt-1 p-2 border rounded-md w-full required"
          />
        </label>
        <div className='text-gray-400 text-[12px] ml-4'>Foto harus diambil dalam keadaan sebenarnya/aktual, karena foto akan di verifikasi oleh pemerintah pusat</div>

        <label className="block">
          Proposal Pembangunan (Wajib)
          <input
            type="file"
            name="proposal"
            accept=".pdf, .doc, .docx"
            onChange={(e) => handleFileInputChange(e, 'proposal')}
            className="mt-1 p-2 border rounded-md w-full required"
          />
        </label>
        <div className='text-gray-400 text-[12px] ml-4'>Proposal  wajib ditanda tangani oleh pemerintah setempat yang berwenang(RT/RW, Desa/Kecamatan, Kabupaten/Kota) Agar keaslian proposal terverifikasi</div>

        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded">
          Ajukan Pembangunan
        </button>

        <SuccessModal isVisible={isModalVisible} onClose={toggleModal} />
      </form>
    </div>
  );
};

export default ReportPage;

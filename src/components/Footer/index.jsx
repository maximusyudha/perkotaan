import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white pt-32">
      <div className="container mx-auto flex flex-wrap justify-between mb-20">
        <div className="mb-8">
          <img className="w-12 h-12 mb-2" src="/images/building-skyscraper.svg" alt="logo" />
          <div className="text-lg font-medium tracking-wide">Perkotaan.io</div>
          <div className="text-sm">Membangun Kota, Membangun Masa Depan</div>
        </div>

        <div className="mb-8">
          <div className="text-lg font-medium mb-4">Bergabung Newsletter</div>
          <div className="flex">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Masukkan alamat email"
                className="w-full h-12 px-4 bg-white bg-opacity-5 rounded-xl text-gray-300 text-base font-normal tracking-tight focus:outline-none"
              />
            </div>
            <div className="ml-2">
              <button className="p-3 bg-white rounded-xl flex items-start">
                <img className="w-6 h-6" src="/images/arrow-right.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-lg font-medium mb-4">Navigasi</div>
          <div className="flex flex-col">
            <div className="mb-2"><a href="#" className="text-sm">Beranda</a></div>
            <div className="mb-2"><a href="#" className="text-sm">Pembangunan</a></div>
            <div className="mb-2"><a href="#" className="text-sm">Proyek Sukses</a></div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-lg font-medium mb-4">Kontak</div>
          <div className="flex flex-col">
            <div className="mb-2 flex items-center"><img className="w-6 h-6 mr-2" src="/images/building-community.svg" alt="building community" />Purwokerto, Indonesia</div>
            <div className="mb-2 flex items-center"><img className="w-6 h-6 mr-2" src="/images/phone-call.svg" alt="phone call" />+62 8128 8289 299</div>
            <div className="flex items-center"><img className="w-6 h-6 mr-2" src="/images/mail.svg" alt="mail" />Perkantoran@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-gray-600 text-sm leading-snug">&copy; Perkotaan.io 2024, All right reserved</div>
          <div className="flex gap-2">
            <div className="p-2 rounded-lg shadow border flex justify-center items-center">
              <img className="w-5 h-5" src="/images/instagram-line.svg" alt="instagram" />
            </div>
            <div className="p-2 rounded-lg shadow border flex justify-center items-center">
              <img className="w-5 h-5" src="/images/threads-fill.svg" alt="threads" />
            </div>
            <div className="p-2 rounded-lg shadow border flex justify-center items-center">
              <img className="w-5 h-5" src="/images/twitter-x-fill.svg" alt="twitter" />
            </div>
            <div className="p-2 rounded-lg shadow border flex justify-center items-center">
              <img className="w-5 h-5" src="/images/linkedin-fill.svg" alt="linkedin" />
            </div>
            <div className="p-2 rounded-lg shadow border flex justify-center items-center">
              <img className="w-5 h-5" src="/images/product-hunt-line.svg" alt="product hunt" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;

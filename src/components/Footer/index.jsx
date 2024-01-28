import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container px-4 md:px-20 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10"
                  src="/images/building-skyscraper.svg"
                  alt="logo"
                />
                <div className="text-xl font-medium font-['Neue Montreal'] tracking-wide">
                  Perkotaan.io
                </div>
              </div>
              <div className="text-lg font-medium tracking-tight">
                Membangun Kota, Membangun Masa Depan
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-lg font-medium">Beranda</a>
              <a href="/pembangunan" className="text-lg font-medium">Pembangunan</a>
              <div href="" className="text-lg font-medium">Proyek Sukses</div>
              <div href="" className="text-lg font-medium">FAQ</div>
              <div href="" className="text-lg font-medium">Hubungi Kami</div>
              <div href="" className="text-lg font-medium">Kebijakan Hukum</div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <a href="/pembangunan" className="text-lg font-medium">Projek</a>
              <div href="#" className="text-lg font-medium">Kebijakan Hukum</div>
              <div href="#" className="text-lg font-medium">Aturan Penggunaan</div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4 md:mt-[-180px]">
              <div className="flex items-center space-x-4">
                <div className="text-lg font-medium tracking-tight">
                  Purwokerto, Indonesia
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-6 h-6"
                  src="/images/phone-call.svg"
                  alt="phone"
                />
                <div className="text-lg font-medium tracking-tight">
                  +62 8128 8289 299
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-6 h-6"
                  src="/images/mail.svg"
                  alt="email"
                />
                <div className="text-lg font-medium tracking-tight">
                  Perkantoran@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="text-base font-normal mb-4 md:mb-0">
            © Perkotaan.io 2024, All rights reserved
          </div>
          <div className="flex space-x-3">
            {/* ... Add any additional elements or links here ... */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

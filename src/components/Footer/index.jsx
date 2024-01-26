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
              <div className="text-lg font-medium">Navigasi</div>
              <div className="text-lg font-medium">Beranda</div>
              <div className="text-lg font-medium">Pembangunan</div>
              <div className="text-lg font-medium">Proyek Sukses</div>
              <div className="text-lg font-medium">FAQ</div>
              <div className="text-lg font-medium">Hubungi Kami</div>
              <div className="text-lg font-medium">Kebijakan Hukum</div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-medium">Projek</div>
              <div className="text-lg font-medium">Kebijakan Hukum</div>
              <div className="text-lg font-medium">Aturan Penggunaan</div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-6 h-6"
                  src="/images/building-community-white.svg"
                  alt="location"
                />
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
        <div className="flex justify-between items-center pt-6">
          <div className="text-base font-normal">
            © Perkotaan.io 2024, All right reserved
          </div>
          <div className="flex space-x-3">
            <div className="p-2 rounded-full bg-white">
              <img
                className="w-6 h-6"
                src="/images/instagram-line.svg"
                alt="instagram"
              />
            </div>
            <div className="p-2 rounded-full bg-white">
              <img
                className="w-6 h-6"
                src="/images/threads-fill.svg"
                alt="threads"
              />
            </div>
            <div className="p-2 rounded-full bg-white">
              <img
                className="w-6 h-6"
                src="/images/twitter-x-fill.svg"
                alt="twitter"
              />
            </div>
            <div className="p-2 rounded-full bg-white">
              <img
                className="w-6 h-6"
                src="/images/linkedin-fill.svg"
                alt="linkedin"
              />
            </div>
            <div className="p-2 rounded-full bg-white">
              <img
                className="w-6 h-6"
                src="/images/product-hunt-line.svg"
                alt="project hunt"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

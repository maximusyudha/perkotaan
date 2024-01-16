import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[527px] flex-col justify-start items-start inline-flex">
      <div className="bg-neutral-900 w-full flex-col justify-start items-start flex">
        <div className="w-screen px-20 pt-20 pb-8 justify-between items-start inline-flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="justify-start items-start gap-[12px] inline-flex">
              <img
                className="w-[42px] h-[42px] relative"
                src="/images/building-skyscraper.svg"
              />
              <div className="text-white text-[32.31px] font-medium font-['Neue Montreal'] tracking-wide">
                Perkotaan.io
              </div>
            </div>
            <div className="w-[401px] text-gray-50 text-xl font-medium font-['Neue Montreal'] tracking-tight">
              Membangun Kota, Membangun Masa Depan
            </div>
          </div>
          <div className="mb-4">
            <div className="text-lg font-medium mb-4 text-white">
              Bergabung Newsletter
            </div>
            <div className="flex">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Masukkan alamat email"
                  className="w-[319px] h-[51px] px-4 bg-white bg-opacity-5 rounded-xl text-gray-300 text-base font-normal tracking-tight focus:outline-none"
                />
              </div>
              <div className="ml-2">
                <button className="p-3 bg-white rounded-xl flex items-start">
                  <img
                    className="w-6 h-6"
                    src="/images/arrow-right.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 pt-8 pb-20 justify-between items-center inline-flex">
          <div className="h-[136px] justify-start items-start flex">
            <div className="grow flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Beranda
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Pembangunan
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Proyek Sukses
              </div>
            </div>
            <div className="grow flex-col justify-start items-start gap-8 inline-flex mx-36">
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                FAQ
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Hubungi Kami
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight flex-grow">
                Kebijakan Hukum
              </div>
            </div>
            <div className="grow flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Projek
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight flex-grow">
                Kebijakan Hukum
              </div>
              <div className="self-stretch text-gray-200 text-xl font-medium font-['Neue Montreal'] tracking-tight flex-grow">
                Aturan Penggunaan
              </div>
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <img
                className="w-6 h-6 relative"
                src="/images/building-community.svg"
              />
              <div className="w-[261.67px] text-white text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Purwokerto, Indonesia
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <img className="w-6 h-6 relative" src="/images/phone-call.svg" />
              <div className="w-[261.67px] text-white text-xl font-medium font-['Neue Montreal'] tracking-tight">
                +62 8128 8289 299
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <img className="w-6 h-6 relative" src="/images/mail.svg" />
              <div className="w-[261.67px] text-white text-xl font-medium font-['Neue Montreal'] tracking-tight">
                Perkantoran@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-20 py-4 bg-neutral-100 flex justify-between items-center">
        <div className="text-slate-600 text-lg font-normal font-['SF Pro'] leading-snug">
          © Perkotaan.io 2024, All right reserved
        </div>
        <div className="flex gap-3">
          <div className="p-2 rounded-lg shadow border justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative">
              <img src="images/instagram-line.svg" alt="instagram" />
            </div>
          </div>
          <div className="p-2 rounded-lg shadow border justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative">
              <img src="images/threads-fill.svg" alt="threads" />
            </div>
          </div>
          <div className="p-2 rounded-lg shadow border justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative">
              <img src="images/twitter-x-fill.svg" alt="twitter" />
            </div>
          </div>
          <div className="p-2 rounded-lg shadow border justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative">
              <img src="images/linkedin-fill.svg" alt="linkedin" />
            </div>
          </div>
          <div className="p-2 rounded-lg shadow border justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative">
              <img src="images/product-hunt-line.svg" alt="project hunt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

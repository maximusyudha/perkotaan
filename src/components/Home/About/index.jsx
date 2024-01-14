import React from 'react';

const About = () => {
  return (
    <div className="w-full p-6 bg-white justify-start items-start gap-6 md:flex md:w-[1440px] md:h-[689px] md:p-20">
      <div className="flex-col justify-start items-start gap-6 md:gap-11 md:inline-flex">
        <div className="w-full text-neutral-900 text-xl md:text-2xl lg:text-3xl font-medium font-['Neue Montreal'] tracking-wide">
          Pantau, Berpartisipasi, dan Dukung Pembangunan Bersama Kami
        </div>
        <div className="flex-col justify-start items-start gap-6 md:flex">
          {/* First Card */}
          <div className="p-3 bg-neutral-100 rounded-xl mb-10 justify-start items-start gap-6 md:gap-14 md:inline-flex">
            <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img src="/images/chart-arrows-vertical.svg" alt="chart" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Pantau kemajuan pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">
                Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="p-3 bg-neutral-100 rounded-xl mb-10 justify-start items-start gap-6 md:gap-14 md:inline-flex">
            <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative rounded">
                <img src="/images/building-community.svg" alt="building" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Bantu pemerintah dalam pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">
                Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="p-3 bg-neutral-100 rounded-xl justify-start items-start gap-6 md:gap-14 md:inline-flex">
            <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img src="/images/mood-smile.svg" alt="smile" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Lihat valuasi dari setiap pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">
                Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar
              </div>
            </div>
          </div>
          {/* End of Cards */}
        </div>
      </div>
      {/* Image Section */}
      <div className="hidden md:block w-full h-[529px] relative md:w-[600px] md:h-[529px] ml-10 ">
        <img className="w-full h-full rounded-xl object-cover" src="/images/cns.png" alt="Cityscape" />
      </div>
    </div>
  );
};

export default About;
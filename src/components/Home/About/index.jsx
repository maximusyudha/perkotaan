import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-white justify-start items-start mt-10 md:flex md:w-[1440px] md:h-[689px] md:p-20">
      <div className="flex-col justify-start items-start md:gap-11 md:inline-flex">
        <div className="w-full text-neutral-900 text-2xl mb-10 md:text-3xl mb-0 lg:text-3xl -mb-2 font-medium font-[500] font-['Neue Montreal'] tracking-wide">
          Pantau, Berpartisipasi, dan Dukung Pembangunan Bersama Kami
        </div>
        <div className="flex-col justify-start items-start md:flex">
          {/* First Card */}
          <div className="p-5 bg-neutral-100 rounded-xl justify-start items-start md:gap-14 md:inline-flex">
            <div className="w-16 p-5 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img src="/images/chart-arrows-vertical.svg" alt="chart" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Pantau kemajuan pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
                Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan
                kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi
                memiliki arti besar
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="p-5 bg-neutral-100 rounded-xl justify-start items-start md:gap-14 md:inline-flex my-3">
            <div className="w-16 p-5 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative rounded">
                <img
                  src="/images/building-community.svg"
                  alt="building"
                  style={{ fill: "black" }}
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Bantu pemerintah dalam pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
                
Bantu pemerintah dalam pembangunan adalah suatu konsep di mana masyarakat, termasuk individu, kelompok, dan organisasi, berperan aktif dalam mendukung dan berkontribusi pada upaya pembangunan yang dilakukan oleh pemerintah.
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="p-5 bg-neutral-100 rounded-xl justify-start items-start md:gap-14 md:inline-flex">
            <div className="w-16 p-5 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img src="/images/mood-smile.svg" alt="smile" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="w-full text-neutral-900 text-xl md:text-2xl font-medium font-['Neue Montreal'] tracking-wide">
                Lihat valuasi dari setiap pembangunan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
              Valuasi pembangunan merujuk pada proses penilaian nilai atau dampak ekonomi, sosial, dan lingkungan dari suatu proyek pembangunan. Ini melibatkan evaluasi dampak positif dan negatif yang mungkin timbul dari suatu pembangunan terhadap berbagai aspek kehidupan masyarakat dan lingkungan.
              </div>
            </div>
          </div>
          {/* End of Cards */}
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3 h-[200px] relative md:w-[650px] md:h-[545px] hidden md:block">
        <img
          className="md:w-full h-full ml-16 mt-22 rounded-xl object-cover md:mt-2 w-[200px] h-[200px] "
          src="/images/cns.png"
          alt="Cityscape"
        />
      </div>
    </div>
  );
};

export default About;

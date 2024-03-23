import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-white justify-start items-start mt-10 md:flex md:w-[1340px] md:h-[689px] md:p-20">
      <div className="flex-col justify-start items-start md:gap-11 md:inline-flex">
        <div className="w-full text-neutral-900 text-2xl mb-10 md:text-3xl mb-0 lg:text-3xl -mb-2 font-medium font-[500] font-['Neue Montreal'] tracking-wide">
          Properti kami dibangun oleh para kontraktor terpercaya
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
                Harga properti yang bersaing
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
                Kami menawarkan harga properti yang bersaing, memastikan bahwa
                anda mendapatkan nilai terbai yang didedikasikan untuk memenuhi
                setiap kebutuhan dan keinginan anda
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
                Pelayanan terbaik bagi pelanggan
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
                Kami memprioritaskan kepuasan Anda dengan menyajikan pelayanan
                terbaik yang didedikasikan untuk memenuhi setiap kebutuhan dan
                keinginan Anda
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
                Kualitas properti memenuhi standar
              </div>
              <div className="w-full text-neutral-900 text-base font-normal [font-family:'Neue_Montreal-Regular',Helvetica] leading-normal tracking-tight">
                Setiap properti yang kami tawarkan telah melalui proses seleksi
                ketat untuk memastikan bahwa setiap detail dan fiturnya memenuhi
                standar tinggi.
              </div>
            </div>
          </div>
          {/* End of Cards */}
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3 h-[200px] relative md:w-[650px] md:h-[545px] hidden md:block">
        <img
          className="md:w-[350px] h-3/4 ml-16 rounded-xl object-cover md:mt-32"
          src="/images/cns.png"
          alt="Cityscape"
        />
      </div>
    </div>
  );
};

export default About;

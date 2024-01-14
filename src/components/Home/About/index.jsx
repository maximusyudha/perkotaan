"use client"
import React from 'react';

const About = () => {
  return (
    <div className="w-[1440px] h-[689px] p-20 bg-white justify-start items-start gap-11 inline-flex">
    <div className="flex-col justify-start items-start gap-[42px] inline-flex">
        <div className="w-[747px] text-neutral-900 text-[42px] font-medium font-['Neue Montreal'] tracking-wide">Pantau, Berpartisipasi, dan Dukung Pembangunan Bersama Kami</div>
        <div className="flex-col justify-start items-start gap-6 flex">
            <div className="p-3 bg-neutral-100 rounded-xl justify-start items-start gap-14 inline-flex">
                <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                        <img src="/images/chart-arrows-vertical.svg" alt="chart" />
                        </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-[460px] text-neutral-900 text-2xl font-medium font-['Neue Montreal'] tracking-wide">Pantau kemajuan pembangunan</div>
                    <div className="w-[566px] text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar </div>
                </div>
            </div>
            <div className="p-3 bg-neutral-100 rounded-xl justify-start items-start gap-14 inline-flex">
                <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                    <img src="/images/building-community.svg" alt="chart" />
                        </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-[460px] text-neutral-900 text-2xl font-medium font-['Neue Montreal'] tracking-wide">Bantu pemerintah dalam pembangunan</div>
                    <div className="w-[566px] text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar </div>
                </div>
            </div>
            <div className="p-3 bg-neutral-100 rounded-xl justify-start items-start gap-14 inline-flex">
                <div className="p-3 bg-white rounded-md shadow justify-start items-start gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                    <img src="/images/mood-smile.svg" alt="chart" />
                        </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-[460px] text-neutral-900 text-2xl font-medium font-['Neue Montreal'] tracking-wide">Lihat valuasi dari setiap pebangunan</div>
                    <div className="w-[566px] text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">Kami mengajak setiap warga untuk bersatu dalam upaya pembangunan kota ini. Setiap langkah, setiap proyek, dan setiap partisipasi memiliki arti besar </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[489px] h-[529px] relative">
        <img className="w-[795px] h-[530px] rounded-xl" src="/images/cns.png" />
    </div>
</div>
  );
};

export default About;

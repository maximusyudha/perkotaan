"use client";
import React, { useState } from 'react';

const FAQ = () => {
    return (
        <div className="w-[1440px] h-[1078px] p-20 bg-white flex-col justify-start items-center gap-[42px] inline-flex">
    <div className="flex-col justify-start items-center gap-4 flex">
        <div className="w-[747px] text-center text-neutral-900 text-[42px] font-medium font-['Neue Montreal'] tracking-wide">Pertanyaan yang sering ditanyakan</div>
        <div className="w-[566px] text-center text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">Berikut beberapa pertanyaan yang telah kami jawab yang sering ditanyakan oleh pengguna baru dan untuk memudahkan Anda</div>
    </div>
    <div className="h-[762px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-[88px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide">Apa tujuan dari Pusat Informasi Proyek Pembangunan Kota?</div>
                <div className="w-6 h-6 relative">
                <img src="/images/chevron-down.svg" alt="dropdown" />    
                </div> 
            </div>
        </div>
        <div className="self-stretch h-[202px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide">Bagaimana cara saya mengikuti perkembangan proyek-proyek tertentu?</div>
                <div className="w-6 h-6 relative" />
            </div>
            <div className="w-[926px] text-slate-600 text-xl font-normal font-['Neue Montreal'] leading-[30px] tracking-tight">Anda dapat dengan mudah mengikuti perkembangan proyek dengan menjelajahi bagian 'Proyek-Proyek' di situs kami. Di sana, Anda akan menemukan informasi rinci, pembaruan terbaru, dan visualisasi kemajuan setiap proyek.</div>
        </div>
        <div className="self-stretch h-[88px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide"> Bagaimana saya dapat berpartisipasi dalam proses pembangunan kota?</div>
                <div className="w-6 h-6 relative" />
            </div>
        </div>
        <div className="self-stretch h-[88px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide">Apakah informasi pribadi saya aman di situs ini?</div>
                <div className="w-6 h-6 relative" />
            </div>
        </div>
        <div className="self-stretch h-[88px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide">Apakah situs ini memberikan pemberitahuan atau pembaruan reguler?</div>
                <div className="w-6 h-6 relative" />
            </div>
        </div>
        <div className="self-stretch h-[88px] p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-900 text-2xl font-normal font-['Neue Montreal'] leading-normal tracking-wide"> Bagaimana saya mengajukan pertanyaan lebih lanjut atau memberikan umpan balik?</div>
                <div className="w-6 h-6 relative" />
            </div>
        </div>
    </div>
</div>
    );
};

export default FAQ
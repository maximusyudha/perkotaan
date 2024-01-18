"use client";
import { useState } from 'react';
import React from 'react';

const FAQ = () => {
    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isInformationsOpen, setInformationsOpen] = useState(false);
    const [isSectionCOpen, setSectionCOpen] = useState(false);
    const [isSectionDOpen, setSectionDOpen] = useState(false);
    const [isSectionEOpen, setSectionEOpen] = useState(false);

    const handleDivClick = (section) => {
        if (section === 'a') {
            setProductsOpen(!isProductsOpen);
            setInformationsOpen(false);
            setSectionCOpen(false);
            setSectionDOpen(false);
            setSectionEOpen(false);
        } else if (section === 'b') {
            setInformationsOpen(!isInformationsOpen);
            setProductsOpen(false);
            setSectionCOpen(false);
            setSectionDOpen(false);
            setSectionEOpen(false);
        } else if (section === 'c') {
            setSectionCOpen(!isSectionCOpen);
            setProductsOpen(false);
            setInformationsOpen(false);
            setSectionDOpen(false);
            setSectionEOpen(false);
        } else if (section === 'd') {
            setSectionDOpen(!isSectionDOpen);
            setProductsOpen(false);
            setInformationsOpen(false);
            setSectionCOpen(false);
            setSectionEOpen(false);
        } else if (section === 'e') {
            setSectionEOpen(!isSectionEOpen);
            setProductsOpen(false);
            setInformationsOpen(false);
            setSectionCOpen(false);
            setSectionDOpen(false);
        }
    };

    return (
        <div className="w-[1440px] h-[720px] p-20 bg-white flex-col justify-start items-center gap-[42px] inline-flex">
            <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[747px] text-center text-neutral-900 text-[42px] font-medium font-['Neue Montreal'] tracking-wide">Pertanyaan yang sering ditanyakan</div>
                <div className="w-[566px] text-center text-neutral-900 text-base font-normal font-['Neue Montreal'] leading-normal tracking-tight">Berikut beberapa pertanyaan yang telah kami jawab yang sering ditanyakan oleh pengguna baru dan untuk memudahkan Anda</div>
            </div>
            <div>
                {/* Products */}
                <div className="relative w-[800px] shadow-md rounded-xl m-[15px]" onClick={() => handleDivClick('a')}>
                    {/* Heading */}
                    <label htmlFor="input" className="tracking-[1px] mx-[20px] h-[60px] flex items-center">
                        <div style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: '600' }}>
                        Apa tujuan dari Pusat Informasi Proyek Pembangunan Kota?
                        </div>
                        </label>
                    {/* Arrow */}
                    <div className={`absolute w-6 h-6 top-[15px] right-[30px] transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>
                        <img src="/images/chevron-down.svg" alt="arrow"/>
                    </div>
                    {/* Content */}
                    <div className={`max-h-0 overflow-hidden ${isProductsOpen ? 'max-h-full' : ''}`}>
                        <div className='p-[20px] text-sm'>
                        Tujuan utama kami adalah meningkatkan transparansi pembangunan kota dan mendorong partisipasi aktif masyarakat. Kami ingin memberikan akses yang mudah kepada warga untuk memahami, mengawasi, dan mendukung proyek-proyek pembangunan yang sedang berlangsung.
                        </div>
                    </div>
                </div>
                {/* Informations */}
                <div className="relative w-[800px] shadow-md rounded-xl m-[15px]" onClick={() => handleDivClick('b')}>
                    {/* Heading */}
                    <label htmlFor="input" className="font-bold tracking-[1px] mx-[20px] h-[60px] flex items-center">
                        <div style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: '600' }}>
                        Bagaimana cara saya mengikuti perkembangan proyek-proyek tertentu?
                        </div>
                        </label>
                    {/* Arrow */}
                    <div className={`absolute w-6 h-6 top-[15px] right-[30px] transform transition-transform duration-300 ${isInformationsOpen ? 'rotate-180' : ''}`}>
                        <img src="/images/chevron-down.svg" alt="arrow"/>
                    </div>
                    {/* Content */}
                    <div className={`max-h-0 overflow-hidden ${isInformationsOpen ? 'max-h-full' : ''}`}>
                        <div className='p-[20px] text-sm'>
                        Anda dapat dengan mudah mengikuti perkembangan proyek dengan menjelajahi bagian 'Proyek-Proyek' di situs kami. Di sana, Anda akan menemukan informasi rinci, pembaruan terbaru, dan visualisasi kemajuan setiap proyek.
                        </div>
                    </div>
                </div>
                {/* Section C */}
                <div className="relative w-[800px] shadow-md rounded-xl m-[15px]" onClick={() => handleDivClick('c')}>
                    {/* Heading */}
                    <label htmlFor="input" className="font-bold tracking-[1px] mx-[20px] h-[60px] flex items-center">
                        <div style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: '600' }}>
                        Bagaimana saya dapat berpartisipasi dalam proses pembangunan kota?
                        </div>
                        </label>
                    {/* Arrow */}
                    <div className={`absolute w-6 h-6 top-[15px] right-[30px] transform transition-transform duration-300 ${isSectionCOpen ? 'rotate-180' : ''}`}>
                        <img src="/images/chevron-down.svg" alt="arrow"/>
                    </div>
                    {/* Content */}
                    <div className={`max-h-0 overflow-hidden ${isSectionCOpen ? 'max-h-full' : ''}`}>
                        <div className='p-[20px] text-sm'>
                        Anda dapat berpartisipasi dengan memberikan umpan balik, bertanya, atau bahkan mengajukan ide melalui fitur 'Berpartisipasi' kami. Kami percaya bahwa melibatkan masyarakat adalah kunci untuk menciptakan kota yang reflektif dan inklusif.
                        </div>
                    </div>
                </div>
                {/* Section D */}
                <div className="relative w-[800px] shadow-md rounded-xl m-[15px]" onClick={() => handleDivClick('d')}>
                    {/* Heading */}
                    <label htmlFor="input" className="font-bold tracking-[1px] mx-[20px] h-[60px] flex items-center">
                        <div style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: '600' }}>
                        Apakah informasi pribadi saya aman di situs ini?
                        </div>
                        </label>
                    {/* Arrow */}
                    <div className={`absolute w-6 h-6 top-[15px] right-[30px] transform transition-transform duration-300 ${isSectionDOpen ? 'rotate-180' : ''}`}>
                        <img src="/images/chevron-down.svg" alt="arrow"/>
                    </div>
                    {/* Content */}
                    <div className={`max-h-0 overflow-hidden ${isSectionDOpen ? 'max-h-full' : ''}`}>
                        <div className='p-[20px] text-sm'>
                        Kami mengutamakan keamanan informasi pribadi Anda. Semua data yang Anda berikan, termasuk nama dan alamat email, dijamin keamanannya sesuai dengan kebijakan privasi kami. Kami tidak akan pernah membagikan informasi pribadi Anda tanpa izin Anda.
                        </div>
                    </div>
                </div>
                {/* Section E */}
                <div className="relative w-[800px] shadow-md rounded-xl m-[15px]" onClick={() => handleDivClick('e')}>
                    {/* Heading */}
                    <label htmlFor="input" className="font-bold tracking-[1px] mx-[20px] h-[60px] flex items-center">
                        <div style={{ fontFamily: "'Neue Montreal', sans-serif", fontWeight: '600' }}>
                        Apakah situs ini memberikan pemberitahuan atau pembaruan reguler?
                        </div>
                        </label>
                    {/* Arrow */}
                    <div className={`absolute w-6 h-6 top-[15px] right-[30px] transform transition-transform duration-300 ${isSectionEOpen ? 'rotate-180' : ''}`}>
                        <img src="/images/chevron-down.svg" alt="arrow"/>
                    </div>
                    {/* Content */}
                    <div className={`max-h-0 overflow-hidden ${isSectionEOpen ? 'max-h-full' : ''}`}>
                        <div className='p-[20px] text-sm'>
                        Ya, kami menyediakan pemberitahuan reguler melalui langganan email. Dengan berlangganan, Anda akan mendapatkan pembaruan terkini tentang proyek-proyek, acara masyarakat, dan berita terkait pembangunan kota.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

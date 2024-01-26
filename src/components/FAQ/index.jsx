import React, { useState } from 'react';

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
        <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-10">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="text-center">
                    <div className="text-4xl font-medium font-['Neue Montreal'] tracking-wide text-neutral-900">Pertanyaan yang sering ditanyakan</div>
                    <div className="mt-4 text-base font-normal font-['Neue Montreal'] leading-normal text-neutral-900">Berikut beberapa pertanyaan yang telah kami jawab yang sering ditanyakan oleh pengguna baru dan untuk memudahkan Anda</div>
                </div>
                <div className="w-full max-w-[800px] space-y-8">
                    <FAQItem
                        question="Apa tujuan dari Pusat Informasi Proyek Pembangunan Kota?"
                        isOpen={isProductsOpen}
                        handleDivClick={() => handleDivClick('a')}
                        content="Tujuan utama kami adalah meningkatkan transparansi pembangunan kota dan mendorong partisipasi aktif masyarakat. Kami ingin memberikan akses yang mudah kepada warga untuk memahami, mengawasi, dan mendukung proyek-proyek pembangunan yang sedang berlangsung."
                    />
                    <FAQItem
                        question="Bagaimana cara saya mengikuti perkembangan proyek-proyek tertentu?"
                        isOpen={isInformationsOpen}
                        handleDivClick={() => handleDivClick('b')}
                        content="Anda dapat dengan mudah mengikuti perkembangan proyek dengan menjelajahi bagian 'Proyek-Proyek' di situs kami. Di sana, Anda akan menemukan informasi rinci, pembaruan terbaru, dan visualisasi kemajuan setiap proyek."
                    />
                    <FAQItem
                        question="Bagaimana saya dapat berpartisipasi dalam proses pembangunan kota?"
                        isOpen={isSectionCOpen}
                        handleDivClick={() => handleDivClick('c')}
                        content="Anda dapat berpartisipasi dengan memberikan umpan balik, bertanya, atau bahkan mengajukan ide melalui fitur 'Berpartisipasi' kami. Kami percaya bahwa melibatkan masyarakat adalah kunci untuk menciptakan kota yang reflektif dan inklusif."
                    />
                    <FAQItem
                        question="Apakah informasi pribadi saya aman di situs ini?"
                        isOpen={isSectionDOpen}
                        handleDivClick={() => handleDivClick('d')}
                        content="Kami mengutamakan keamanan informasi pribadi Anda. Semua data yang Anda berikan, termasuk nama dan alamat email, dijamin keamanannya sesuai dengan kebijakan privasi kami. Kami tidak akan pernah membagikan informasi pribadi Anda tanpa izin Anda."
                    />
                    <FAQItem
                        question="Apakah situs ini memberikan pemberitahuan atau pembaruan reguler?"
                        isOpen={isSectionEOpen}
                        handleDivClick={() => handleDivClick('e')}
                        content="Ya, kami menyediakan pemberitahuan reguler melalui langganan email. Dengan berlangganan, Anda akan mendapatkan pembaruan terkini tentang proyek-proyek, acara masyarakat, dan berita terkait pembangunan kota."
                    />
                </div>
            </div>
        </div>
    );
};

const FAQItem = ({ question, isOpen, handleDivClick, content }) => {
    return (
        <div className="relative shadow-md rounded-xl p-4 cursor-pointer" onClick={handleDivClick}>
            <div className="font-bold tracking-[1px] flex items-center justify-between">
                <div>{question}</div>
                <img src="/images/chevron-down.svg" className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} alt="arrow" />
            </div>
            <div className={`mt-4 overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
                <div className='text-sm'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

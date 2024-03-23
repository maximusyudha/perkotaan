const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <div className="lg:mr-8 mt-10 lg:mt-40 max-w-[50%]">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Tentang Kami</h1>
        <p className="text-base lg:text-lg mb-8 lg:mb-12">
          Dalam era digital yang berkembang pesat, industri real estate semakin
          bergeser menuju platform online. Melihat tren ini, "Perkotaan.io"
          hadir sebagai solusi modern untuk memenuhi kebutuhan pasar properti di
          kota-kota besar. Melalui pengamatan mendalam terhadap perubahan
          perilaku konsumen, kami menyadari pentingnya aksesibilitas informasi
          yang cepat, pencarian yang tepat, dan pengalaman pengguna yang
          memuaskan dalam mencari hunian atau investasi. Dengan fokus pada
          kemudahan akses dan kualitas layanan, Perkotaan.io bertujuan untuk
          menjadi platform terdepan dalam industri real estate.
        </p>
      </div>
      <div className="max-w-[35%] mt-10 lg:mt-32 ml-0 lg:ml-20 mb-40">
        <img
          src="/images/perkotaan.png"
          alt="Gambar Tentang Kami"
          className="mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import HeroImage from "../../assets/images/Img-hero.png";

function HeroSection() {
  return (
    <section className="container pt-10 flex md:flex-row flex-col gap-2 items-center text-white mb-28">
      <div className="w-full md:w-1/2 p-3">
        <div className="leading-relaxed">
          <h1 className="font-semibold lg:text-6xl text-4xl mb-6">
            Nikmati Tontonan Dimana Saja, dan Kapan Saja
          </h1>
          <p className="mb-4 lg:text-lg">
            Tonton apa saja secara online di komputer pribadi atau di perangkat
            yang terhubung ke internet dan mendukung aplikasi Netflix, dan
            gunakan download untuk menonton saat kamu di perjalanan dan tidak
            punya koneksi internet
          </p>
          <button
            type="button"
            className="bg-secondary bg-gradient-to-r from-secondary to-red-400 px-4 py-2 text-white rounded-2xl"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] mx-auto mt-6 ">
          <img src={HeroImage} alt="SpiderMan" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

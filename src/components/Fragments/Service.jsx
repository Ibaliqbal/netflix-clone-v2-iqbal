import React from "react";
import {
  PiDevices,
  PiTelevisionSimple,
  PiBaby,
  PiShareNetwork,
} from "react-icons/pi";

const services = [
  {
    id: 1,
    icon: (
      <PiTelevisionSimple className="text-white md:w-14 md:h-14 w-10 h-10 mb-6 mt-4" />
    ),
    title: "Tonton Langsung di Tv",
    description:
      "Tonton di Smart Tv, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray dan banyak lagi",
  },
  {
    id: 2,
    icon: <PiDevices className="text-white md:w-14 md:h-14 w-10 h-10 mb-6 mt-4" />,
    title: "Dowload untuk offline",
    description:
      "Simpan dengan mudah agar selalu ada acara TV dan film yang bisa di tonton",
  },
  {
    id: 3,
    icon: <PiBaby className="text-white md:w-14 md:h-14 w-10 h-10 mb-6 mt-4" />,
    title: "Buat profil untuk anak",
    description:
      "Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak",
  },
  {
    id: 4,
    icon: (
      <PiShareNetwork className="text-white md:w-14 md:h-14 w-10 h-10 mb-6 mt-4" />
    ),
    title: "Akses berbagai perangkat",
    description:
      "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu",
  },
];

function Service() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full text-white flex flex-col items-center  pb-8 pt-3">
          <h1 className="text-center lg:text-4xl text-2xl font-semibold max-w-xl mb-14">
            Layanan Terbaik yang Tidak Mengecewakan
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-4 place-items-center">
            {services?.map((service) => {
              return (
                <div key={service.id} className="p-2 bg-gradient-to-br md:h-[270px] lg:h-[300px] from-slate-700 to-slate-800 rounded-md">
                  <div className="leading-relaxed">
                    {service.icon}
                    <h1 className="font-semibold lg:text-2xl text-xl mb-6">
                      {service.title}
                    </h1>
                    <p className="mb-4 lg:text-lg">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

import React from "react";
import CheckIcon from "../../assets/images/Check.svg";

const promotion = [
  {
    title: "Basic",
    price: 120000,
    promo: [
      {
        name: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        name: "No Ads",
        status: true,
      },
      {
        name: "Batalkan Kapan Saja",
        status: true,
      },
      {
        name: "Kualitas Video Baik",
        status: true,
      },
      {
        name: "Resolusi 480p",
        status: true,
      },
      {
        name: "Resolusi 720p",
        status: false,
      },
      {
        name: "Resolusi 1080p",
        status: false,
      },
      {
        name: "Resolusi 4K+HDR",
        status: false,
      },
    ],
  },
  {
    title: "Premium",
    price: 186000,
    promo: [
      {
        name: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        name: "No Ads",
        status: true,
      },
      {
        name: "Batalkan Kapan Saja",
        status: true,
      },
      {
        name: "Kualitas Video Baik",
        status: true,
      },
      {
        name: "Resolusi 480p",
        status: true,
      },
      {
        name: "Resolusi 720p",
        status: true,
      },
      {
        name: "Resolusi 1080p",
        status: true,
      },
      {
        name: "Resolusi 4K+HDR",
        status: true,
      },
    ],
  },
  {
    title: "Standart",
    price: 153000,
    promo: [
      {
        name: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        name: "No Ads",
        status: true,
      },
      {
        name: "Batalkan Kapan Saja",
        status: true,
      },
      {
        name: "Kualitas Video Baik",
        status: true,
      },
      {
        name: "Resolusi 480p",
        status: true,
      },
      {
        name: "Resolusi 720p",
        status: true,
      },
      {
        name: "Resolusi 1080p",
        status: true,
      },
      {
        name: "Resolusi 4K+HDR",
        status: false,
      },
    ],
  },
];

function Promo() {
  return (
    <section className="w-full">
      <div className="container text-white">
        <div className="w-full flex flex-col items-center p-6 gap-10">
          <h1 className="text-4xl lg:text-7xl max-w-4xl font-semibold text-center">
            Pilih Paket Yang Cocok Untukmu
          </h1>
          <div className="flex items-center w-full p-4 gap-4 flex-col md:flex-row justify-center">
            {promotion.map((pro, i) => (
              <div
                key={i}
                className="bg-primary px-8 py-10 flex flex-col rounded-xl lg:w-1/3 w-full group hover:scale-105 transition-transform ease-in-out duration-300 shadow-lg shadow-slate-600"
              >
                <h3 className="text-xl text-center mb-6">{pro.title}</h3>
                <div className="flex self-center">
                  <h4 className="text-secondary lg:text-4xl text-2xl">
                    {pro.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </h4>
                  <span className="self-end">/bulan</span>
                </div>
                <ul className="mt-4 grid gap-2">
                  {pro.promo.map((promote, i) => (
                    <li
                      key={i}
                      className={`${
                        promote.status
                          ? "flex items-center gap-2"
                          : "text-slate-400 pl-8"
                      }`}
                    >
                      {promote.status ? <img src={CheckIcon} alt="" /> : null}
                      {promote.name}
                    </li>
                  ))}
                </ul>
                <button className="shadow-lg mt-10 px-4 py-2 border-2 border-white rounded-xl mx-auto group-hover:bg-secondary group-hover:border-none transition-all duration-300 ease-in-out">
                  Choose Promo
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;

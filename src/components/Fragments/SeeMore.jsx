import TvImage from "../../assets/images/Img-tv.png";
import EllipseImg from "../../assets/images/Ellipse.svg"
function SeeMore() {
  return (
    <section className="w-full mt-16 mb-28">
      <div className="container text-white">
        <div className="w-full flex items-center md:flex-row flex-col gap-10">
          <div className="w-full md:w-1/2">
            <div className="lg:w-[500px] lg:h-[450px] w-[250px] h-[250px] mx-auto relative">
              <img src={EllipseImg} alt="Ellipse" className="absolute md:-top-5 md:left-24 left-16" />
              <img src={TvImage} alt="Tv" className="w-full h-full absolute" />
            </div>
          </div>
          <h1 className="w-full md:w-1/2 font-bold lg:text-5xl max-w-lg text-2xl">
            Tonton Film, Acara TV, Tak Terbatas, dan Lebih Banyak Lagi
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SeeMore;

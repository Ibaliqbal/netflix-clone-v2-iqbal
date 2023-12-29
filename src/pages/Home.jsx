import HeroSection from "../components/Fragments/HeroSection";
import SeeMore from "../components/Fragments/SeeMore";
import Service from "../components/Fragments/Service";
import TrendingMovies from "../components/Fragments/TrendingMovies";
import Promo from "../components/Fragments/Promo";
import transition from "../transition";
import CustomLayout from "../components/layout/CustomLayout";

function Home() {
  return (
    <CustomLayout>
      <main className="w-full">
        <HeroSection />
        <Service />
        <SeeMore />
        <TrendingMovies />
        <Promo />
      </main>
    </CustomLayout>
  );
}

export default transition(Home);

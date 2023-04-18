import React from "react";
import Logo from "../../assets/ads-logo.png";
import { useGetMarketingStats } from "../../services/marketing-stats.service";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

const Home: React.FC = () => {
  const { marketingStats } = useGetMarketingStats();

  return (
    <div className="bg-back">
      <header className="h-[90px] flex items-center pl-[30px] tablet:pl-[165px]">
        <img className="w-32 h-7" src={Logo} alt="logo" />
      </header>
      <TopSection marketingStats={marketingStats} />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Home;

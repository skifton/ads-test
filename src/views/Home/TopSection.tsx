import React from "react";
import { FormattedMessage } from "react-intl";

import Document from "../../assets/crypto-document.png";
import Button from "../../components/Button";
import StatisticInfo from "../../components/StatisticInfo";
import { IMarketingStats } from "../../models/marketingStats.model";

interface IProps {
  marketingStats: IMarketingStats;
}
const TopSection: React.FC<IProps> = ({ marketingStats }) => {
  return (
    <section className="relative flex justify-center items-center px-[30px] tablet:px-[165px] pb-[188px] mobile:pb-[104px] pt-[68px]">
      <div>
        <p className="font-bold text-lg font-semibold text-primary leading-8 font-poppins">
          <FormattedMessage id="EARN_CRYPTO" />
        </p>

        <h2 className="max-w-[676px] mt-[8px] font-bold text-5xl text-title leading-[60px] font-poppins mobile:text-5xl mobile:leading-[60px]">
          <FormattedMessage id="TITLE.TOP_SECTION" />
        </h2>

        <p className="max-w-[537px] mt-[10px] text-lg text-secondary leading-7 font-inter">
          <FormattedMessage id="DESCRIPTION.TOP_SECTION" />
        </p>

        <StatisticInfo
          className="hidden mobile:flex"
          info={marketingStats}
        />

        <Button className="mt-[32px]">
          <FormattedMessage id="START_NOW" />
        </Button>

        <StatisticInfo
          className="absolute bottom-[-150px] left-s right-s visible mobile:hidden shadow"
          info={marketingStats}
        />
      </div>

      <img
        className="hidden w-[40rem] h-[25rem] desktop:flex"
        src={Document}
        alt="Crypto with display"
      />
    </section>
  );
};

export default TopSection;

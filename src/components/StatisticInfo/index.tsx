import clsx from "clsx";
import { useIntl } from "react-intl";

import StatsCard from "../StatsCard";
import { IMarketingStats } from "../../models/marketingStats.model";

const StatisticInfo = ({
  info,
  className,
}: {
  info: IMarketingStats;
  className?: string;
}) => {
  const intl = useIntl();

  return (
    <div
      className={clsx(
        "flex flex-col mobile:flex-row gap-[16px] mobile:gap-[31px] py-[32px] mobule:py-0 mt-[24px] rounded-md divide-y mobile:divide-y-0 mobile:divide-x divide-[#1f253030] bg-white mobile:bg-transparent",
        className
      )}
    >
      <StatsCard
        description={intl.formatMessage({
          id: "STATISTIC.ACTIVE_PUBLISHER",
        })}
        amount={info?.USD?.last}
      />

      <StatsCard
        description={intl.formatMessage({
          id: "STATISTIC.PUBLISHERS_EARN_PER_DAY",
        })}
        amount={info?.EUR?.last}
      />

      <StatsCard
        description={intl.formatMessage({
          id: "STATISTIC.ACTIVE_CAMPAIGNS",
        })}
        amount={info?.GBP?.last}
      />
    </div>
  );
};

export default StatisticInfo;

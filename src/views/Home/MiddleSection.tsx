import React from "react";
import { FormattedMessage } from "react-intl";

import BlueText from "../../components/BlueText";

const MiddleSection: React.FC = () => {
  return (
    <section
      className="mobile:h-[386px] tablet:h-[424px] flex items-center justify-center pb-[60px] mobile:pb-0 px-s mobile:px-[30px] pt-[176px] mobile:pt-0"
      style={{
        background:
          "white",
      }}
    >
      <div className="w-full max-w-[920px] flex flex-col mobile:flex-row mobile justify-between gap-8">
        <p className="font-bold text-title font-poppins max-w-full mobile:max-w-[445px] text-3xl leading-normal mobile:text-[32px]">
          <FormattedMessage
            id="TITLE.MIDDLE_SECTION"
            values={{
              b: (chunks) => <BlueText>{chunks}</BlueText>,
            }}
          />
        </p>
        <div className="space-y-8 max-w-full mobile:max-w-[392px]">
          <p className="text-base text-secondary font-inter font-medium leading-6">
            <FormattedMessage id="DESCRIPTION.MIDDLE_SECTION.FIRST" />
          </p>
          <p className="text-base text-secondary font-inter font-medium leading-6">
            <FormattedMessage id="DESCRIPTION.MIDDLE_SECTION.SECOND" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;

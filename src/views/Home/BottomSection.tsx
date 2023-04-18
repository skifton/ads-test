import React from "react";
import { FormattedMessage } from "react-intl";

import BlueText from "../../components/BlueText";
import useGetListOfAdvantages from "../../hooks/useGetListOfAdvantages";

const BottomSection: React.FC = () => {
  const listOfAdvantages = useGetListOfAdvantages();

  return (
    <section className="flex flex-col items-center tablet:justify-center px-s tablet:px-[165px] pt-[60px] mobile:pt-[80px] tablet:pt-[110px] pb-[110px] leading-normal tablet:flex tablet:flex-row">
      <div>
        <h2 className="text-[40px] font-bold text-title font-poppins leading-[56px] max-w-[545px] mobile:text-[40px] mobile:leading-[56px]">
          <FormattedMessage
            id="TITLE.BOTTOM_SECTION"
            values={{
              b: (chunks) => <BlueText>{chunks}</BlueText>,
            }}
          />
        </h2>
        <ul className="list-disc list-inside marker:text-primary marker:text-xl text-xl mt-[24px] mobile:mt-[29px]">
          {listOfAdvantages.map((item) => (
            <li
              key={item.key}
              className="text-base text-secondary leading-6 font-inter first:mt-0 mt-[21px]"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-0 pt-[53px] tablet:pt-0 desktop:ml-[45px]">
        <div
          className="p-5 rounded-md shadow-md max-w-[500px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.3) 100%)",
          }}
        >
          <p className="font-inter text-[13px] text-secondary leading-5">
            <FormattedMessage
              id="DESCRIPTION.CHART_DESCRIPTION"
              values={{
                b: (chunks) => <BlueText>{chunks}</BlueText>,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;

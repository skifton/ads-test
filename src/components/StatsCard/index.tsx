import React from 'react';

interface IProps {
  amount: string;
  description: string;
  className?: string;
}
const StatsCard: React.FC<IProps> = ({ amount, description, className }) => {
  return (
    <div className="text-center pl-0 first:pt-0 pt-[16px] mobile:pt-0 mobile:first:pl-0 mobile:pl-[31px]">
      <p className="text-primary font-bold text-[24px] mobile:text-[32px] leading-[32px] mobile:leading-[42px]">{amount}</p>
      <p className="text-base leading-6 font-normal">{description}</p>
    </div>
  );
};

export default StatsCard;

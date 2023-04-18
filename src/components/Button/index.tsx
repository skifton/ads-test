import clsx from 'clsx';
import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(
        'w-full bg-primary text-base font-medium text-white py-[14px] leading-[28px] rounded-md hover:opacity-80 mobile:w-[285px]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import clsx from 'clsx';
import React from 'react';

const BlueText: React.FC<React.ButtonHTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={clsx('text-primary', className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default BlueText;

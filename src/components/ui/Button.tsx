import { FC, ReactNode } from 'react';

const Button: FC<{
  stl?: string;
  disabled?: boolean;
  onClick?: any;
  isActive?: boolean;
  children?: ReactNode;
}> = ({ stl, disabled, onClick, isActive, children }) => {
  return (
    <button
      className={`${stl ? stl : ''} ${
        isActive ? 'bg-light-grayish-cyan text-dark-cyan' : ''
      } rounded-md px-10 py-2 text-lg`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

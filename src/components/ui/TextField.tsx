import React, { FC } from 'react';

interface ITextField {
  label?: string;
  img?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  value?: number | string | null;
  onChange?: any;
}
{
}
const TextField: FC<ITextField> = ({
  label,
  img,
  type = 'text',
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mx-auto w-[100%]">
      <div>
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-dark-grayish-cyan">
          {label}
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
            {img ? <img src={`../../public/${img}`} /> : ''}
          </div>
          <input
            type={type}
            id={id}
            value={value ? value : ''}
            onChange={onChange}
            className="block w-full rounded-md border-none text-dark-cyan bg-very-light-grayish pl-10 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-grayish-cyan disabled:text-grayish-cyan placeholder:text-grayish-cyan placeholder:text-right"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default TextField;

import React, { useState } from "react";

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className={`mb-4 ${focus ? "input-focused" : ""}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium mb-1 ${
          focus ? "text-white" : "text-[#9695B9]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className="w-full p-2 bg-transparent border border-[#AAAAAA] outline-none focus:border-white rounded-md focus:placeholder-white focus:text-white"
      />
    </div>
  );
};

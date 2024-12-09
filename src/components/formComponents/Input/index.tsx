import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

type InputProps = {
  label: string;
  register?: (name: string) => {};
} & InputHTMLAttributes<HTMLInputElement>;

const CustonInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, name, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
    };
    return (
      <label
        htmlFor={label}
        className="flex flex-col items-center justify-items-center p-2 gap-2 mt-5 bg-background"
      >
        {label}
        <div className="relative w-full bg-transparent">
          <input
            {...rest}
            type={type === "password" && !showPassword ? "password" : "text"}
            id={label}
            name={name}
            ref={ref}
            className="items-center justify-items-center p-2 w-full duration-75 bg-background border-b-2 border-secondaryBgcolor outline-none focus:border-l-2 focus:outline-none "
            placeholder={rest.placeholder}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 duration-75 bg-background"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <GrFormViewHide className="text-2xl text-secondaryBgcolor duration-75 bg-background" />
              ) : (
                <BiShowAlt className="text-2xl text-secondaryBgcolor duration-75 bg-background" />
              )}
            </button>
          )}
        </div>
      </label>
    );
  }
);
CustonInput.displayName = "CustonInput";

export default CustonInput;

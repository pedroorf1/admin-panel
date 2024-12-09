import React, { ButtonHTMLAttributes, forwardRef } from "react";
type InputProps = {
  text: string | null;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustonInput = forwardRef<HTMLButtonElement, InputProps>(
  ({ type, text, ...rest }, ref) => {
    return (
      <div className="items-center justify-items-center p-2 rounded w-full mt-10">
        <button
          {...rest}
          type={type}
          ref={ref}
          className="items-center justify-items-center p-2 rounded w-full bg-secondaryBgcolor hover:bg-violet-600 hover:text-basefontcolor duration-150"
        >
          {text}
        </button>
      </div>
    );
  }
);
CustonInput.displayName = "CustonInput";

export default CustonInput;

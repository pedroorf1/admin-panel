import React, { FormEvent, forwardRef } from "react";

type CustonFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
} & React.HTMLProps<HTMLFormElement>;

const CustonForm = forwardRef<HTMLFormElement, CustonFormProps>(
  ({ onSubmit, children, ...rest }, ref) => {
    return (
      <form
        {...rest}
        ref={ref}
        onSubmit={onSubmit}
        className="flex flex-col justify-items-center w-full h-full"
      >
        {children}
      </form>
    );
  }
);
CustonForm.displayName = "CustonForm";

export default CustonForm;

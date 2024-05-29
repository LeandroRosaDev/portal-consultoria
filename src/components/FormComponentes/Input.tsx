"use client";
import React from "react";
import InputMask from "react-input-mask";

type InputProps = React.ComponentProps<"input"> & {
  placeholder?: string;
  mask?: string;
};

export default function Input({
  placeholder,
  className,
  mask,
  ...props
}: InputProps) {
  if (mask) {
    return (
      <div>
        <InputMask mask={mask} {...props}>
          {(inputProps: any) => (
            <input
              {...inputProps}
              className={`input ${className}`}
              placeholder={placeholder}
            />
          )}
        </InputMask>
      </div>
    );
  }

  return (
    <div>
      <input
        {...props}
        className={`input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

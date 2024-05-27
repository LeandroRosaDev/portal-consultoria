"use client";

import React from "react";

type RadioInputProps = React.ComponentProps<"input"> & {
  label?: string;
};

export default function RadioInput({
  label,
  className,
  ...props
}: RadioInputProps) {
  return (
    <div className={`radio-input-container ${className}`}>
      <input
        {...props}
        type="radio"
        id={props.id}
        name={props.name}
        className="radio-input"
      />
      {label && <label htmlFor={props.id}>{label}</label>}
    </div>
  );
}

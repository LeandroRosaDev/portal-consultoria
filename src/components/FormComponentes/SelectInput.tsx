"use client";

import React from "react";

type SelectInputProps = React.ComponentProps<"select"> & {
  options: { value: string; label: string }[];
};

export default function SelectInput({
  options,
  className,
  ...props
}: SelectInputProps) {
  return (
    <div className={`select-input-container ${className}`}>
      <select {...props} className="select-input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

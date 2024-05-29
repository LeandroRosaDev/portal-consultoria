import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({ mask, value, onChange, placeholder, ...rest }) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {(inputProps) => (
        <input {...inputProps} placeholder={placeholder} {...rest} />
      )}
    </InputMask>
  );
};

export default MaskedInput;

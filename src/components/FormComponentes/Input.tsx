"use client";

type InputProps = React.ComponentProps<"input"> & {
  placeholder: string;
};

export default function Input({
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div>
      <input
        {...props}
        name={props.name}
        id={props.id}
        className={`input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

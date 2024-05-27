"use client";

type InputProps = React.ComponentProps<"input"> & {
  placeholder?: string;
};

export default function InputFile({ className, ...props }: InputProps) {
  return (
    <div>
      <input
        {...props}
        name={props.name}
        id={props.id}
        className={` ${className}`}
      />
    </div>
  );
}

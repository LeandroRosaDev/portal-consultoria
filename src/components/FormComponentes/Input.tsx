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
        className={`pb-5 pl-2 bg-[#CFCFCF] rounded-md border-none placeholder-gray-600 outline-gray-400 text-lg ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

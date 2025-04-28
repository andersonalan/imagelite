import React from "react";

interface InputTextProps {
  style?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void


}


export const InputText: React.FC<InputTextProps> = ({
  onChange, style
}: InputTextProps) => {
  return (
    <input type="text"
      onChange={onChange}
      className={`${style}border px-5 py-2 rounded-lg text-gray-900`} />
  )

}
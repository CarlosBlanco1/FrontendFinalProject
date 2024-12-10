import { useState } from "react";

export default function ReusableTextInput({
  label,
  name,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string | undefined;
}) {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setIsValid(value !== "");
  };

  return (
    <div>
      <div className="flex gap-2 w-100 mb-2 bg-white">
        <label htmlFor={name} className="font-medium text-gray-700 w-1/6">
          {label}
        </label>
        <input
          type="text"
          className={`p-3 border rounded-lg focus:ring focus:outline-none w-5/6 ${
            isValid === undefined
              ? "border-gray-300"
              : isValid
              ? "border-green-500"
              : "border-red-500"
          }`}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          onChange={handleValidation}
        />
      </div>
      {isValid === undefined ? (
        ""
      ) : !isValid ? (
        <p className="text-red-500 text-sm mt-1">This field is required.</p>
      ) : (
        <p className="text-green-500 text-sm mt-1">Valid input.</p>
      )}
    </div>
  );
}

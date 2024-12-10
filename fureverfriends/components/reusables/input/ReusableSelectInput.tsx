import { useState } from "react";

export default function ReusableSelectInput({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string | undefined;
}) {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const handleValidation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIsValid(value !== "");
  };

  return (
    <div>
      <div className="flex gap-2 w-100 mb-2">
        <label htmlFor={name} className="font-medium text-gray-700 w-1/6">
          {label}
        </label>
        <select
          className={`p-3 border rounded-lg w-5/6 focus:ring focus:outline-none ${
            isValid == undefined
              ? "border-gray-300"
              : isValid
              ? "border-green-500"
              : "border-red-500"
          }`}
          name={name}
          defaultValue={defaultValue || ""}
          onChange={handleValidation}
        >
          <option value="">-- Select an option --</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {isValid == undefined ? (
        ""
      ) : !isValid ? (
        <p className="text-red-500 text-sm mt-1">Please select an option.</p>
      ) : (
        <p className="text-green-500 text-sm mt-1">Valid option selected.</p>
      )}
    </div>
  );
}

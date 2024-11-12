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
    return (
      <>
        <div className="flex flex-col gap-2">
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
          <select
            className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 focus:outline-none"
            name={name}
            defaultValue={defaultValue}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </>
    );}
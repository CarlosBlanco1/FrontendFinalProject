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
    return (
      <>
        <div className="flex flex-col gap-2">
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-400 focus:outline-none"
            placeholder={placeholder}
            defaultValue={defaultValue}
            name={name}
          />
        </div>
      </>
    );
  }
  
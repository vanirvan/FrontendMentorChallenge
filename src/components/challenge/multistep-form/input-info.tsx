import "~/pages/challenge/multistep-form/style.css";

interface ComponentProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

export default function InputInfo({
  label,
  type,
  name,
  placeholder,
  onChange,
  error,
}: ComponentProps) {
  return (
    <div className="font-ubuntu flex flex-col gap-1">
      <div className="flex justify-between">
        <label htmlFor="name" className="text-sm">
          {label}
        </label>
        {error && (
          <span className="text-sm font-medium text-red-500">{error}</span>
        )}
      </div>
      <input
        id="name"
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded border ${error ? "border-red-500" : "border-gray-300"} px-3 py-2 font-semibold outline-[#534e8e] placeholder:font-normal`}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

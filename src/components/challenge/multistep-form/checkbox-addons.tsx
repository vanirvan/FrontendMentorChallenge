import IconCheckmark from "~/assets/challenge/multistep-form/icon-checkmark.svg";

interface ComponentProps {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  currentDuration: "monthly" | "yearly";
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxAddons({
  name,
  description,
  monthly,
  yearly,
  currentDuration,
  isChecked,
  onChange,
}: ComponentProps) {
  return (
    <div>
      <input
        id={`addons-${name.split(" ").join("-")}`}
        type="checkbox"
        name="addons"
        hidden
        checked={isChecked}
        onChange={(e) => onChange(e)}
        className="peer"
      />
      <label
        htmlFor={`addons-${name.split(" ").join("-")}`}
        className={`group flex cursor-pointer items-center justify-between gap-4 rounded-md border p-4 transition-all duration-300 hover:border-[#534e8e] hover:bg-[#f8f9fe] ${isChecked ? "border-[#534e8e] bg-[#f8f9fe]" : "border-gray-300"}`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`relative flex aspect-square w-6 flex-col items-center justify-center rounded-md border transition-all duration-300 group-hover:border-[#534e8e] ${isChecked ? "border-[#534e8e] bg-[#534e8e]" : "border-gray-300 bg-transparent"}`}
          >
            {isChecked ? (
              <img
                src={IconCheckmark.src}
                alt="icon checkmark"
                className="z-10 aspect-square w-4"
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold text-[#534e8e]">{name}</h1>
            <h2 className="text-xs text-gray-400">{description}</h2>
          </div>
        </div>
        <span className="text-sm font-medium text-[#534e8e]">
          +${currentDuration === "monthly" ? `${monthly}/mo` : `${yearly}/yr`}
        </span>
      </label>
    </div>
  );
}

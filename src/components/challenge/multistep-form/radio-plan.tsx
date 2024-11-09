interface ComponentProps {
  name: string;
  monthly: number;
  yearly: number;
  image: string;
  currentDuration: "monthly" | "yearly";
  isSelected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioPlan({
  image,
  name,
  monthly,
  yearly,
  currentDuration,
  isSelected,
  onChange,
}: ComponentProps) {
  return (
    <div>
      <input
        id={`plan-${name.toLocaleLowerCase()}`}
        type="radio"
        name="plan"
        hidden
        className="peer"
        checked={isSelected}
        onChange={(e) => onChange(e)}
      />
      <label
        htmlFor={`plan-${name.toLocaleLowerCase()}`}
        className="flex cursor-pointer gap-3 rounded-md border border-gray-300 p-3 transition-all duration-300 hover:border-[#534e8e] hover:bg-[#f8f9fe] peer-checked:border-[#534e8e] peer-checked:bg-[#f8f9fe] md:flex-col md:gap-9"
      >
        <img src={image} alt={name} className="mb-auto aspect-square w-12" />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-gray-400">
            {currentDuration === "monthly" ? `$${monthly}/mo` : `$${yearly}/yr`}
          </h2>
          <span
            className={`text-sm text-[#534e8e] transition-all duration-300 ${currentDuration === "monthly" ? "max-h-0" : "max-h-auto"}`}
          >
            {currentDuration === "yearly" && "2 months free"}
          </span>
        </div>
      </label>
    </div>
  );
}

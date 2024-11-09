interface ComponentProps {
  step: number;
  title: string;
  isActive: boolean;
}

export default function NavItem({ step, title, isActive }: ComponentProps) {
  return (
    <li className="group flex cursor-pointer gap-6">
      <div
        className={`relative flex aspect-square h-8 w-8 items-center justify-center rounded-full border border-[#bee0fa] transition-colors duration-300 group-hover:bg-[#bee0fa] ${isActive && "bg-[#bee0fa]"}`}
      >
        <span
          className={`text-sm transition-all duration-300 group-hover:font-bold group-hover:text-gray-700 ${isActive ? "font-bold text-gray-700" : "text-white"}`}
        >
          {step}
        </span>
      </div>
      <div className="hidden flex-col md:flex">
        <span className="text-sm font-light uppercase text-[#bee0fa]">
          Step {step}
        </span>
        <h1 className="text-sm font-semibold uppercase text-white">{title}</h1>
      </div>
    </li>
  );
}

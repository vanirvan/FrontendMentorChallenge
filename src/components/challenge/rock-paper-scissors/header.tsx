// import "~/pages/challenge/rock-paper-scissors/style.css"

import LogoNormal from "~/assets/challenge/rock-paper-scissors/logo.svg";
import LogoBonus from "~/assets/challenge/rock-paper-scissors/logo-bonus.svg";

export default function Header({
  mode,
  score = 0,
}: {
  mode: "normal" | "bonus";
  score?: number;
}) {
  return (
    <section
      id="header"
      className="mx-auto flex w-full max-w-xl items-center justify-between gap-6 rounded-md border border-[#606e85] p-3"
    >
      <img
        src={mode === "normal" ? LogoNormal.src : LogoBonus.src}
        alt="Logo"
        className="h-16 w-auto"
      />
      <div className="flex flex-col gap-1 rounded-md bg-stone-100 px-6 py-3">
        <span className="text-sm font-semibold uppercase tracking-widest text-[hsl(229,64%,46%)]">
          Score
        </span>
        <h1 className="text-center text-5xl font-bold text-[#3b4363]">
          {score}
        </h1>
      </div>
    </section>
  );
}

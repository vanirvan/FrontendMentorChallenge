import { cn } from "~/lib/utils/cn";

import type { Options } from "~/pages/challenge/rock-paper-scissors/helper";

import IconRock from "~/assets/challenge/rock-paper-scissors/icon-rock.svg";
import IconPaper from "~/assets/challenge/rock-paper-scissors/icon-paper.svg";
import IconScissors from "~/assets/challenge/rock-paper-scissors/icon-scissors.svg";
import IconLizard from "~/assets/challenge/rock-paper-scissors/icon-lizard.svg";
import IconSpock from "~/assets/challenge/rock-paper-scissors/icon-spock.svg";

export function ButtonIcon({
  icon,
  className,
  onClick,
}: {
  icon: Options;
  className?: string;
  onClick?: (param: any) => void;
}) {
  return (
    <div onClick={onClick} className={cn("", className)}>
      <div
        className={`group flex aspect-square w-max cursor-pointer rounded-full bg-gradient-to-b p-3 transition-all duration-200 hover:scale-105 ${icon === "Rock" ? "from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]" : icon === "Paper" ? "from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]" : icon === "Scissors" ? "from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]" : icon === "Lizard" ? "from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)]" : "from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)]"}`}
      >
        <div className="size-full rounded-full bg-white p-6">
          <img
            src={
              icon === "Rock"
                ? IconRock.src
                : icon === "Paper"
                  ? IconPaper.src
                  : icon === "Scissors"
                    ? IconScissors.src
                    : icon === "Lizard"
                      ? IconLizard.src
                      : IconSpock.src
            }
            alt={icon}
            className="size-8 object-contain md:size-12"
          />
        </div>
      </div>
    </div>
  );
}

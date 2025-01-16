import { useEffect, useState } from "react";
import { ButtonIcon } from "./button-icon";
import type { Options } from "~/pages/challenge/rock-paper-scissors/helper";

export function GameProcess({
  playerChoice,
  computerChoice,
  compareResult,
  newGameTrigger,
  setScore,
}: {
  playerChoice: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock" | "";
  computerChoice: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock" | "";
  compareResult: "Win" | "Lose" | "Draw" | "";
  newGameTrigger: () => void;
  setScore: (result: "Win" | "Lose" | "Draw") => void;
}) {
  const WAIT_TIME = 1000; // time in milliseconds
  const [elementShow, setElementShow] = useState({
    computer: false,
    result: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setElementShow({ computer: true, result: true });
      setScore(compareResult as "Win" | "Lose" | "Draw");
    }, WAIT_TIME);
  }, [computerChoice]);

  console.log(playerChoice);

  return (
    <section
      id="game-process"
      className={`relative mx-auto grid w-full max-w-5xl grid-cols-2 grid-rows-2 gap-3 ${elementShow.result ? "md:grid-cols-5" : "md:grid-cols-4"} md:grid-rows-1`}
    >
      <div className="order-1 flex flex-col items-center justify-center gap-3 md:col-span-2">
        <ButtonIcon icon={playerChoice as Options} />
        <span className="text-md font-medium uppercase tracking-wider text-white">
          You Picked
        </span>
      </div>
      <div className="order-2 flex flex-col items-center justify-center gap-3 md:order-3 md:col-span-2">
        {elementShow.computer ? (
          <ButtonIcon icon={computerChoice as Options} />
        ) : (
          <div className="size-28 rounded-full bg-black/25 md:size-32"></div>
        )}
        <span className="text-md font-medium uppercase tracking-wider text-white">
          The House Picked
        </span>
      </div>
      {elementShow.result && (
        <div className="order-3 col-span-2 flex flex-col items-center gap-4 md:order-2 md:col-span-1">
          <h1 className="w-max text-5xl font-bold uppercase tracking-wider text-white">
            you {compareResult}
          </h1>
          <button
            onClick={newGameTrigger}
            className="w-max rounded-md bg-white px-16 py-3 font-medium uppercase transition-all duration-200 hover:scale-105 hover:bg-stone-200"
          >
            play again
          </button>
        </div>
      )}
    </section>
  );
}

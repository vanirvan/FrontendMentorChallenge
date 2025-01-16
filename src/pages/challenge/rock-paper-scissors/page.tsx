import "./style.css";

import { useState } from "react";

import Header from "~/components/challenge/rock-paper-scissors/header";
import Footer from "~/components/challenge/rock-paper-scissors/footer";

import { UserChoose } from "~/components/challenge/rock-paper-scissors/user-choose";
import { compareOptions, computerChoose } from "./helper";
import { GameProcess } from "~/components/challenge/rock-paper-scissors/game-process";

export default function IndexPage() {
  const [levelMode, setLevelMode] = useState<"normal" | "bonus">("normal");
  const [score, setScore] = useState<number>(0);

  const [game, setGame] = useState<{
    playerChoice: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock" | "";
    computerChoice: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock" | "";
    compareResult: "Win" | "Lose" | "Draw" | "";
  }>({
    playerChoice: "",
    computerChoice: "",
    compareResult: "",
  });

  function handleUserChoice(
    choose: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock",
  ) {
    const computerChoice = computerChoose(levelMode);
    const compareResult = compareOptions({
      playerOption: choose,
      computerOption: computerChoice,
    });

    setGame({ playerChoice: choose, computerChoice, compareResult });
  }

  function newGame() {
    setGame({ playerChoice: "", computerChoice: "", compareResult: "" });
  }

  return (
    <main className="font-barlow-semi-condensed bg-radial-gradient relative flex h-full min-h-svh w-full flex-col justify-between gap-4 overflow-hidden p-8">
      <Header mode={levelMode} score={score} />
      {game.playerChoice === "" ? (
        <UserChoose mode={levelMode} userChoice={handleUserChoice} />
      ) : (
        <GameProcess
          playerChoice={game.playerChoice}
          computerChoice={game.computerChoice}
          compareResult={game.compareResult}
          newGameTrigger={newGame}
          setScore={(result) =>
            setScore(
              result === "Win"
                ? score + 1
                : result === "Lose" && score > 0
                  ? score - 1
                  : score,
            )
          }
        />
      )}
      <Footer mode={levelMode} setMode={setLevelMode} />
    </main>
  );
}

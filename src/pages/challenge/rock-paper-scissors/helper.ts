export type Options = "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock";
export type WinCondition = {
  [key in Options]: {
    win: Options[];
    lose: Options[];
  };
};

export function computerChoose(mode: "normal" | "bonus") {
  const normalOptions: Options[] = ["Rock", "Paper", "Scissors"];
  const bonusOptions: Options[] = [
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock",
  ];

  return mode === "normal"
    ? normalOptions[Math.floor(Math.random() * normalOptions.length)]
    : bonusOptions[Math.floor(Math.random() * bonusOptions.length)];
}

export function compareOptions({
  playerOption,
  computerOption,
}: {
  playerOption: Options;
  computerOption: Options;
}) {
  const winCondition: WinCondition = {
    Rock: { win: ["Scissors", "Lizard"], lose: ["Paper", "Spock"] },
    Paper: { win: ["Rock", "Spock"], lose: ["Scissors", "Lizard"] },
    Scissors: { win: ["Paper", "Lizard"], lose: ["Rock", "Spock"] },
    Lizard: { win: ["Spock", "Paper"], lose: ["Rock", "Scissors"] },
    Spock: { win: ["Scissors", "Rock"], lose: ["Lizard", "Paper"] },
  };

  if (playerOption === computerOption) {
    return "Draw";
  }

  if (
    winCondition[playerOption].win.filter((win) => win === computerOption)
      .length > 0
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}

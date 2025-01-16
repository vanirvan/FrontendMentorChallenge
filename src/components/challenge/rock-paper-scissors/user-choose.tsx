import BgTriangle from "~/assets/challenge/rock-paper-scissors/bg-triangle.svg";
import BgPentagon from "~/assets/challenge/rock-paper-scissors/bg-pentagon.svg";
import { ButtonIcon } from "./button-icon";

export function UserChoose({
  mode,
  userChoice,
}: {
  mode: "normal" | "bonus";
  userChoice: (
    choice: "Rock" | "Paper" | "Scissors" | "Lizard" | "Spock",
  ) => void;
}) {
  return (
    <section id="options" className="relative mx-auto">
      <div className="relative">
        <img
          src={mode === "normal" ? BgTriangle.src : BgPentagon.src}
          alt="Background"
          className={`mx-auto ${mode === "normal" ? "w-48" : "w-72"} max-w-full md:w-72`}
        />
        {mode === "normal" ? (
          <>
            <ButtonIcon
              icon="Paper"
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
              onClick={() => userChoice("Paper")}
            />
            <ButtonIcon
              icon="Scissors"
              className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2"
              onClick={() => userChoice("Scissors")}
            />
            <ButtonIcon
              icon="Rock"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              onClick={() => userChoice("Rock")}
            />
          </>
        ) : (
          <>
            <ButtonIcon
              icon="Scissors"
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              onClick={() => userChoice("Scissors")}
            />
            <ButtonIcon
              icon="Spock"
              className="absolute left-[10%] top-[40%] -translate-x-1/2 -translate-y-1/2"
              onClick={() => userChoice("Spock")}
            />
            <ButtonIcon
              icon="Paper"
              className="absolute right-[10%] top-[40%] -translate-y-1/2 translate-x-1/2"
              onClick={() => userChoice("Paper")}
            />
            <ButtonIcon
              icon="Rock"
              className="absolute bottom-0 right-[22%] translate-x-1/2 translate-y-1/2"
              onClick={() => userChoice("Rock")}
            />
            <ButtonIcon
              icon="Lizard"
              className="absolute bottom-0 left-[22%] -translate-x-1/2 translate-y-1/2"
              onClick={() => userChoice("Lizard")}
            />
          </>
        )}
      </div>
    </section>
  );
}

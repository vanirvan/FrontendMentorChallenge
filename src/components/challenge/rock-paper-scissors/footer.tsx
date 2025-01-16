import { useState } from "react";

import IconClose from "~/assets/challenge/rock-paper-scissors/icon-close.svg";

import ImgRulesNormal from "~/assets/challenge/rock-paper-scissors/image-rules.svg";
import ImgRulesBonus from "~/assets/challenge/rock-paper-scissors/image-rules-bonus.svg";

export default function Footer({
  mode,
  setMode,
}: {
  mode: "normal" | "bonus";
  setMode: (mode: "normal" | "bonus") => void;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const modeSwitch = () => {
    setMode(mode === "normal" ? "bonus" : "normal");
  };

  return (
    <>
      <section
        id="footer"
        // className="fixed bottom-6 right-1/2 z-10 flex translate-x-1/2 items-end justify-end gap-3 md:right-6 md:translate-x-0 md:flex-col md:items-center"
        className="relative flex w-full items-end justify-center gap-3 md:justify-end"
      >
        <button
          onClick={modeSwitch}
          className="w-max rounded-md border-[1px] border-white px-8 py-2 text-white transition-all duration-200 hover:bg-white/15"
        >
          {mode === "normal" ? "PLAY BONUS" : "PLAY NORMAL"}
        </button>
        <button
          onClick={() => setModalOpen(true)}
          className="w-max rounded-md border-[1px] border-white px-8 py-2 text-white transition-all duration-200 hover:bg-white/15"
        >
          RULES
        </button>
      </section>

      {/* MODAL */}
      <div
        className={`fixed inset-0 flex h-svh w-svw items-center justify-center transition-all duration-200 ${modalOpen ? "z-50 bg-black/50 opacity-100" : "-z-50 bg-black/0 opacity-0"}`}
      >
        <div
          className={`flex aspect-square h-svh w-full flex-col items-center justify-between gap-6 rounded-md bg-white px-12 py-24 shadow-xl transition-all duration-200 md:h-auto md:w-auto md:py-12 ${modalOpen ? "opacity-100 md:translate-y-0" : "opacity-0 md:translate-y-64 md:opacity-100"}`}
        >
          <div className="flex w-full items-center justify-center md:justify-between">
            <h1 className="text-4xl font-bold">RULES</h1>
            <img
              src={IconClose.src}
              alt="Close"
              className="hidden aspect-square w-6 cursor-pointer md:block"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <img
            src={mode === "normal" ? ImgRulesNormal.src : ImgRulesBonus.src}
            alt="Rules"
            className="aspect-square w-full object-contain"
          />
          <img
            src={IconClose.src}
            alt="Close"
            className="aspect-square w-6 cursor-pointer md:hidden"
            onClick={() => setModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

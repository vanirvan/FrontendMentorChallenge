import { useRef, useState } from "react";
import IconCalculator from "~/assets/challenge/mortgage-repayment-calculator/icon-calculator.svg";
import IllustrationEmpty from "~/assets/challenge/mortgage-repayment-calculator/illustration-empty.svg";

import { calculateRepayment } from "./calculate-repayment";

export default function App() {
  const amountRef = useRef<HTMLInputElement>(null);
  const yearsRef = useRef<HTMLInputElement>(null);
  const interestRef = useRef<HTMLInputElement>(null);
  const typeRepaymentRef = useRef<HTMLInputElement>(null);
  const typeInterestRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<{
    monthlyRepayment: string;
    totalPayment: string;
  }>();

  const clearInput = () => {
    if (
      amountRef.current &&
      yearsRef.current &&
      interestRef.current &&
      typeRepaymentRef.current &&
      typeInterestRef.current
    ) {
      amountRef.current.value = "";
      yearsRef.current.value = "";
      interestRef.current.value = "";
      typeRepaymentRef.current!.checked = false;
      typeInterestRef.current!.checked = false;
    }
  };

  const submitCalculation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const mortgageType = formData.get("mortgage-type");

    if (!mortgageType) {
      alert("Please choose the Mortgage type");
    }

    const amount = Number(formData.get("mortgage-amount"));
    const years = Number(formData.get("mortgage-term"));
    const interest = Number(formData.get("interest-rate"));
    const type = formData.get("mortgage-type");

    const calculate = calculateRepayment(
      amount,
      years,
      interest,
      type as "repayment" | "interest",
    );

    setResult(calculate);
  };

  return (
    <main className="font-plus-jakarta relative flex min-h-svh w-full flex-col items-center justify-center bg-[#e3f4fc] min-[376px]:p-3 sm:p-6">
      {/* Card */}
      <div className="relative flex h-full w-full max-w-4xl flex-col overflow-clip bg-white min-[376px]:rounded-xl md:flex-row">
        <div className="flex flex-1 flex-col gap-4 px-3 py-6 md:px-6">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-slate-900">
              Mortgage Calculator
            </h1>
            <button
              onClick={clearInput}
              id="clear-all-button"
              className="text-slate-500 underline"
            >
              Clear All
            </button>
          </div>
          <form onSubmit={submitCalculation} className="flex flex-col gap-4">
            <div className="space-y-2">
              <label htmlFor="mortgage-amount" className="text-slate-500">
                Mortgage Amount
              </label>
              <div className="relative flex items-center overflow-clip rounded-md border border-slate-500">
                <div className="bg-[#e2f5fd] px-4 py-2">
                  <span className="text-lg font-semibold text-slate-700">
                    €
                  </span>
                </div>
                <input
                  id="mortgage-amount"
                  name="mortgage-amount"
                  type="number"
                  required
                  ref={amountRef}
                  className="w-full px-4 py-2 text-lg font-bold focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="space-y-2">
                <label htmlFor="mortgage-term" className="text-slate-500">
                  Mortgage Term
                </label>
                <div className="relative flex items-center overflow-clip rounded-md border border-slate-500">
                  <input
                    id="mortgage-term"
                    name="mortgage-term"
                    type="number"
                    required
                    ref={yearsRef}
                    className="w-full px-4 py-2 text-lg font-bold focus:outline-none"
                  />
                  <div className="bg-[#e2f5fd] px-4 py-2">
                    <span className="text-lg font-semibold text-slate-700">
                      years
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="interest-rate" className="text-slate-500">
                  Interest Rate
                </label>
                <div className="relative flex items-center overflow-clip rounded-md border border-slate-500">
                  <input
                    id="interest-rate"
                    name="interest-rate"
                    type="number"
                    required
                    ref={interestRef}
                    className="w-full px-4 py-2 text-lg font-bold focus:outline-none"
                  />
                  <div className="bg-[#e2f5fd] px-4 py-2">
                    <span className="text-lg font-semibold text-slate-700">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="interest-rate" className="text-slate-500">
                Mortgage Type
              </label>
              <div className="space-y-4">
                <label
                  htmlFor="mortgage-type-repayment"
                  className="flex cursor-pointer items-center rounded-md border border-slate-700 bg-white p-3 hover:bg-slate-100 has-[:checked]:border-yellow-400 has-[:checked]:bg-yellow-500/15"
                >
                  <input
                    id="mortgage-type-repayment"
                    name="mortgage-type"
                    type="radio"
                    value="repayment"
                    ref={typeRepaymentRef}
                    className="peer hidden"
                  />
                  <span className="mr-2 h-4 w-4 rounded-full border-2 border-slate-700 peer-checked:border-yellow-400 peer-checked:bg-yellow-400"></span>
                  <span className="font-semibold text-slate-700 peer-checked:text-slate-700">
                    Repayment
                  </span>
                </label>
                <label
                  htmlFor="mortgage-type-interest"
                  className="flex cursor-pointer items-center rounded-md border border-slate-700 bg-white p-3 hover:bg-slate-100 has-[:checked]:border-yellow-400 has-[:checked]:bg-yellow-500/15"
                >
                  <input
                    id="mortgage-type-interest"
                    name="mortgage-type"
                    type="radio"
                    value="interest"
                    ref={typeInterestRef}
                    className="peer hidden"
                  />
                  <span className="mr-2 h-4 w-4 rounded-full border-2 border-slate-700 peer-checked:border-yellow-400 peer-checked:bg-yellow-400"></span>
                  <span className="font-semibold text-slate-700 peer-checked:text-slate-700">
                    Interest Only
                  </span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              id="mortgage-submit"
              className="flex w-full items-center justify-center gap-4 rounded-full bg-[#d9db30] px-12 py-4 font-semibold text-[#133041] md:w-max"
            >
              <img src={IconCalculator.src} alt="calculator icon" />
              Calculate Repayment
            </button>
          </form>
        </div>
        {/* result page */}
        <div className="flex flex-1 flex-col gap-4 bg-[#133040] px-3 py-6 md:rounded-bl-[4.5rem] md:px-6">
          {result === undefined ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <img src={IllustrationEmpty.src} alt="empty illustration" />
              <h1 className="text-center text-2xl font-semibold text-white">
                Result shown here
              </h1>
              <h2 className="text-center text-slate-300">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
              </h2>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold text-white">
                Your results
              </h1>
              <h2 className="text-slate-300">
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again.
              </h2>
              <div className="relative rounded-md bg-[#d5dc47] pt-1">
                <div className="relative flex flex-col rounded-md bg-[#0e2431] p-4">
                  <p className="text-slate-300">Your monthly repayments</p>
                  <p className="text-[3.5rem] font-bold text-[#d5dc47]">
                    {result.monthlyRepayment}
                  </p>
                  <div className="h-px w-full rounded-full bg-[#324855]"></div>
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-slate-300">
                      Total you'll repay over the term
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {result.totalPayment}
                    </span>
                  </div>
                </div>
              </div>
              `
            </>
          )}
        </div>
      </div>
    </main>
  );
}

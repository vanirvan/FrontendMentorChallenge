import { useState } from "react";

export default function IndexPage() {
  const [input, setInput] = useState<{
    day: number | null;
    month: number | null;
    year: number | null;
  }>({
    day: null,
    month: null,
    year: null,
  });
  const [error, setError] = useState({
    isError: false,
    day: "",
    month: "",
    year: "",
  });

  const [data, setData] = useState<{
    day: number | null;
    month: number | null;
    year: number | null;
  }>({ day: null, month: null, year: null });

  const handleSubmit = () => {
    // reset error
    setError({
      isError: false,
      day: "",
      month: "",
      year: "",
    });

    // validate
    const isValidInput = validateInput(input.day, input.month, input.year);
    if (isValidInput?.isError) {
      setError({
        isError: isValidInput.isError,
        day: isValidInput.day,
        month: isValidInput.month,
        year: isValidInput.year,
      });
    }

    // calculate age
    if (!isValidInput.isError) {
      const calculate = calculateAge(input.day!, input.month!, input.year!);
      setData({
        day: calculate.day,
        month: calculate.month,
        year: calculate.year,
      });
    }
  };
  return (
    <main className="flex min-h-svh w-full flex-col gap-4">
      <div className="relative flex min-h-svh w-full flex-col items-center justify-center bg-[#f0f0f0] p-4 font-poppins">
        <section
          id="card"
          className="relative flex w-full max-w-xl flex-col gap-6 rounded-3xl rounded-br-[9rem] bg-white p-6 py-10 md:gap-0 md:p-10"
        >
          <div id="input-section" className="flex items-center gap-6">
            <div className="flex w-full max-w-28 items-center gap-3">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="day"
                  className="text-sm font-bold uppercase tracking-widest text-[#716f6f]"
                >
                  Day
                </label>
                <input
                  id="day"
                  type="number"
                  name="day"
                  placeholder="DD"
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      day: e.target.value ? +e.target.value : null,
                    }))
                  }
                  className={`w-full rounded-lg border border-[#dbdbdb] px-4 py-2 text-lg font-bold transition-colors duration-300 md:text-xl ${error.isError ? "border-[#ff5757] hover:border-[#ff5757] focus:outline-[#ff5757]" : "hover:border-[#854dff] focus:outline-[#854dff]"}`}
                />
                <p className="h-4 text-[10px] italic text-[#ff5757]">
                  {error.isError ? error.day : ""}
                </p>
              </div>
            </div>
            <div className="flex w-full max-w-28 items-center gap-3">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="month"
                  className="text-sm font-bold uppercase tracking-widest text-[#716f6f]"
                >
                  Month
                </label>
                <input
                  id="month"
                  type="number"
                  name="month"
                  placeholder="MM"
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      month: e.target.value ? +e.target.value : null,
                    }))
                  }
                  className={`w-full rounded-lg border border-[#dbdbdb] px-4 py-2 text-lg font-bold transition-colors duration-300 md:text-xl ${error.isError ? "border-[#ff5757] hover:border-[#ff5757] focus:outline-[#ff5757]" : "hover:border-[#854dff] focus:outline-[#854dff]"}`}
                />
                <p className="h-4 text-[10px] italic text-[#ff5757]">
                  {error.isError ? error.month : ""}
                </p>
              </div>
            </div>
            <div className="flex w-full max-w-28 items-center gap-3">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="year"
                  className="text-sm font-bold uppercase tracking-widest text-[#716f6f]"
                >
                  Year
                </label>
                <input
                  id="year"
                  type="number"
                  name="year"
                  placeholder="YYYY"
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      year: e.target.value ? +e.target.value : null,
                    }))
                  }
                  className={`w-full rounded-lg border border-[#dbdbdb] px-4 py-2 text-lg font-bold transition-colors duration-300 md:text-xl ${error.isError ? "border-[#ff5757] hover:border-[#ff5757] focus:outline-[#ff5757]" : "hover:border-[#854dff] focus:outline-[#854dff]"}`}
                />
                <p className="h-4 text-[10px] italic text-[#ff5757]">
                  {error.isError ? error.year : ""}
                </p>
              </div>
            </div>
          </div>
          <div
            id="separator"
            className="relative mb-2 flex w-full justify-center md:justify-end"
          >
            <button
              id="submit-age"
              aria-label="submit birth date"
              type="button"
              name="submit-button"
              onClick={handleSubmit}
              className="relative z-10 flex aspect-square flex-col items-center justify-center rounded-full bg-[#854dff] p-6 transition duration-300 hover:bg-[#141414] focus:bg-[#141414]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="32"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
            <div className="absolute top-1/2 h-px w-full -translate-y-1/2 transform bg-[#dbdbdb]"></div>
          </div>
          <div
            id="result-section"
            className="flex w-max gap-2 text-5xl font-extrabold italic md:text-6xl"
          >
            <div className="grid grid-cols-1">
              <span className="w-full text-end text-[#854dff]">
                {data.year !== null ? data.year : "--"}
              </span>
              <span className="w-full text-end text-[#854dff]">
                {data.month !== null ? data.month : "--"}
              </span>
              <span className="w-full text-end text-[#854dff]">
                {data.day !== null ? data.day : "--"}
              </span>
            </div>
            <div className="grid grid-cols-1">
              <span>years</span>
              <span>months</span>
              <span>days</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function validateInput(
  day: number | null,
  month: number | null,
  year: number | null,
): {
  isError: boolean;
  day: string;
  month: string;
  year: string;
} {
  let returnValue = {
    isError: false,
    day: "",
    month: "",
    year: "",
  };

  // validate each input
  if (!day) {
    returnValue.isError = true;
    returnValue.day = "This field is required";
  }
  if (!month) {
    returnValue.isError = true;
    returnValue.month = "This field is required";
  }
  if (!year) {
    returnValue.isError = true;
    returnValue.year = "This field is required";
  }

  if (!day || !month || !year) {
    return returnValue;
  }

  // validate non-exist day and month
  if (day < 1 || day > 31) {
    returnValue.isError = true;
    returnValue.day = "Must be a valid date";
  }
  if (month < 1 || month > 12) {
    returnValue.isError = true;
    returnValue.month = "Must be a valid month";
  }

  const today = new Date();
  const inputDate = new Date(year, month - 1, day);

  // validate date is in the past
  if (inputDate > today) {
    returnValue.isError = true;
    returnValue.year = "Must be in the past";
  }

  // validate non-exist is date exist, for example 32 April is not allowed
  if (inputDate.getMonth() !== month - 1 && inputDate.getDate() !== day) {
    returnValue.isError = true;
    returnValue.day = "Must be a valid date";
  }

  return {
    isError: returnValue.isError,
    day: returnValue.day,
    month: returnValue.month,
    year: returnValue.year,
  };
}

function calculateAge(day: number, month: number, year: number) {
  const today = new Date();

  let y = today.getFullYear() - new Date(year, month - 1, day).getFullYear();
  let m = today.getMonth() - new Date(year, month - 1, day).getMonth();
  let d = today.getDate() - new Date(year, month - 1, day).getDate();

  if (m < 0) {
    y--;
    m += 12;
  }

  if (d < 0) {
    const prevMonth = new Date(
      new Date(year, month - 1, day).getFullYear(),
      new Date(year, month - 1, day).getMonth(),
      0,
    );
    d += prevMonth.getDate();
  }

  return {
    day: d,
    month: m,
    year: y,
  };
}

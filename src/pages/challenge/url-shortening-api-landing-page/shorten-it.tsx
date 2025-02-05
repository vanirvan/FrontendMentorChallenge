import { useRef, useState } from "react";

import BgShortenDesktop from "~/assets/challenge/url-shortening-api-landing-page/bg-shorten-desktop.svg";
import BgShortenMobile from "~/assets/challenge/url-shortening-api-landing-page/bg-shorten-mobile.svg";

import { useCopyToClipboard, useLocalStorage } from "./hooks";

export default function ShortenIt() {
  const [value, setValue] = useLocalStorage<
    { url: string; result_url: string }[]
  >("urls", []);

  const [, setCopy] = useCopyToClipboard();

  const [form, setForm] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // reset error
    setFormError("");

    // validate form
    if (form === "") {
      setFormError("Please add a link");
      return;
    }
    if (!Boolean(new URL(form))) {
      setFormError("link is not valid");
      return;
    }

    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${form}`,
    );

    if (!response.ok) {
      console.error(await response.json);
      setFormError("Something went wrong");
      return;
    }

    const data: string = await response.text();

    setValue((prev) => [
      ...prev,
      {
        url: form,
        result_url: data,
      },
    ]);

    setForm("");
  };

  const handleCopy = (url: string) => {
    setCopy(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="shorten-it" className="relative w-full bg-[hsl(230,25%,95%)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
        <form
          onSubmit={handleSubmit}
          className="relative grid -translate-y-1/2 grid-cols-1 gap-x-6 gap-y-3 overflow-clip rounded-md bg-[hsl(257,27%,26%)] p-6 md:grid-cols-[1fr_auto] md:px-16 md:py-12"
        >
          <img
            src={BgShortenDesktop.src}
            alt="bg"
            className="absolute left-0 top-0 hidden h-full w-full object-cover md:block"
          />
          <img
            src={BgShortenMobile.src}
            alt="bg"
            className="absolute left-0 top-0 h-full w-full object-cover md:hidden"
          />

          <input
            type="text"
            placeholder="Shorten a link here ..."
            value={form}
            onChange={(e) => setForm(e.target.value)}
            className={`z-10 order-1 w-full rounded-md bg-white px-6 py-3 ${formError !== "" && "border-2 border-[hsl(0,87%,67%)] placeholder:text-[hsla(0,87%,67%,50%)]"}`}
          />
          {/* <span id="form-error" className="order-2 md:order-3"></span> */}
          {formError !== "" && (
            <span
              id="form-error"
              className="z-10 order-2 text-sm italic text-[hsl(0,87%,67%)] md:order-3"
            >
              {" "}
              {formError}{" "}
            </span>
          )}
          <button
            type="submit"
            className="z-10 order-3 h-full w-full rounded-md bg-[hsl(180,66%,49%)] px-9 py-3 text-center font-bold text-white transition-colors duration-200 hover:bg-[hsl(180,63%,74%)] md:order-2 md:mt-0 md:w-max"
          >
            Shorten It!
          </button>
        </form>
        <div
          id="shorten-result"
          className="flex -translate-y-16 flex-col gap-6"
        >
          {value.map((item) => (
            <div
              key={item.url}
              className="flex flex-col gap-3 rounded-md bg-white py-4"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h1 className="w-full truncate px-6 font-medium">{item.url}</h1>
                <div className="h-px w-full bg-[hsl(0,0%,75%)] md:hidden"></div>
                <div className="flex w-full flex-col items-center gap-2 px-6 md:flex-row md:gap-6">
                  <a
                    href={item.result_url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full truncate text-left font-medium text-[hsl(180,66%,49%)] md:text-right"
                  >
                    {item.result_url}
                  </a>
                  <button
                    onClick={() => handleCopy(item.result_url)}
                    className={`z-10 order-3 h-full w-full rounded-md px-9 py-3 text-center font-bold text-white transition-colors duration-200 md:order-2 md:mt-0 md:w-max ${copied ? "bg-[hsl(257,27%,26%)] hover:bg-[hsl(257,27%,26%)]" : "bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,63%,74%)]"}`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

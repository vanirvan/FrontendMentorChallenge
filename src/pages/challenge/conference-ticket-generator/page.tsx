import { useEffect, useRef, useState } from "react";
import "./style.css";

// background images
import BackgroundDesktop from "~/assets/challenge/conference-ticket-generator/background-desktop.png";
import BackgroundMobile from "~/assets/challenge/conference-ticket-generator/background-mobile.png";
import BackgroundTablet from "~/assets/challenge/conference-ticket-generator/background-tablet.png";

// icons
import {
  IconGithub,
  IconInfo,
  IconUpload,
} from "~/components/challenge/conference-ticket-generator/icons";

// logos
import LogoFull from "~/assets/challenge/conference-ticket-generator/logo-full.svg";
import LogoMark from "~/assets/challenge/conference-ticket-generator/logo-mark.svg";

// patterns
import PatternCircle from "~/assets/challenge/conference-ticket-generator/pattern-circle.svg";
import PatternLines from "~/assets/challenge/conference-ticket-generator/pattern-lines.svg";
import PatternSquigglyLineBottom from "~/assets/challenge/conference-ticket-generator/pattern-squiggly-line-bottom.svg";
import PatternSquigglyLineTop from "~/assets/challenge/conference-ticket-generator/pattern-squiggly-line-top.svg";
import PatternTicket from "~/assets/challenge/conference-ticket-generator/pattern-ticket.svg";

export default function Page() {
  const [form, setForm] = useState<{
    avatar: string | File;
    fullname: string;
    email: string;
    github: string;
  }>({
    avatar: "",
    fullname: "",
    email: "",
    github: "",
  });

  const [formError, setFormError] = useState<{
    avatar: string;
    fullname: string;
    email: string;
    github: string;
  }>({
    avatar: "",
    fullname: "",
    email: "",
    github: "",
  });

  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const [formFinish, setFormFinish] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];

    if (file && file.size < 512000) {
      setForm((prev) => ({ ...prev, avatar: file }));

      if (formError.avatar !== "") {
        setFormError((prev) => ({ ...prev, avatar: "" }));
      }
    } else {
      setFormError((prev) => ({
        ...prev,
        avatar: "File too large. Please upload a photo under 500KB.",
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "fullname" | "email" | "github",
  ) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate fullname, email and github fields
    if (!form.avatar || !form.fullname || !form.email || !form.github) {
      setFormError((prev) => ({
        ...prev,
        avatar: form.avatar !== "" ? "" : "Please upload your Avatar",
        fullname: form.fullname !== "" ? "" : "Please enter a valid name",
        email: form.email !== "" ? "" : "Please enter a valid email address",
        github:
          form.github !== "" ? "" : "Please enter a valid github username",
      }));
      return;
    }

    // set form error to empty
    setFormError({
      avatar: "",
      fullname: "",
      email: "",
      github: "",
    });

    setFormFinish(true);
  };

  useEffect(() => {
    if (form.avatar === "") {
      return;
    }

    const objectUrl = URL.createObjectURL(form.avatar as File);
    setAvatarPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form.avatar]);

  return (
    <main className="font-inconsolata relative h-full min-h-svh w-full overflow-x-hidden">
      {/* backgrounds */}
      <div
        id="backgrounds"
        className="absolute left-0 top-0 -z-50 h-full min-h-svh w-full"
      >
        <img
          src={BackgroundMobile.src}
          alt="Background Mobile"
          className="h-full w-full object-cover md:hidden"
        />
        <img
          src={BackgroundTablet.src}
          alt="Background Tablet"
          className="hidden h-full w-full object-cover md:inline xl:hidden"
        />
        <img
          src={BackgroundDesktop.src}
          alt="Background Desktop"
          className="hidden h-full w-full object-cover xl:inline"
        />
      </div>

      {/* patterns */}
      <div
        id="patterns"
        className="absolute left-0 top-0 -z-40 h-full min-h-svh w-full"
      >
        <img
          src={PatternLines.src}
          alt="Pattern Lines"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <img
          src={PatternCircle.src}
          alt="Pattern Circle"
          className="absolute left-0 top-0 h-auto w-32 -translate-x-6 -translate-y-16 object-cover md:translate-x-3"
        />
        <img
          src={PatternCircle.src}
          alt="Pattern Circle"
          className="absolute left-2/3 top-1/2 h-auto w-44 -translate-x-6 translate-y-12 object-cover"
        />
        <img
          src={PatternSquigglyLineTop.src}
          alt="Pattern Squiggly Line Top"
          className="absolute right-0 top-6 aspect-[112/50] w-[112px] object-cover md:w-[232px] xl:w-[446px]"
        />
        <img
          src={PatternSquigglyLineBottom.src}
          alt="Pattern Squiggly Line Bottom"
          className="absolute bottom-0 left-0 h-auto w-4/5 object-contain md:w-3/5 xl:w-1/2"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-9 px-3 py-6 pb-28">
        <div className="flex items-center justify-center gap-3">
          <img
            src={LogoFull.src}
            alt="Logo Full"
            className="h-auto w-40 md:w-48"
          />
        </div>
        {!formFinish ? (
          <h1 className="text-center text-3xl font-extrabold text-white md:text-5xl xl:max-w-2xl">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-extrabold text-white md:text-5xl xl:max-w-2xl">
            Congrats,{" "}
            <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-white bg-clip-text text-transparent">
              {form.fullname}
            </span>
            ! Your ticket is ready.
          </h1>
        )}
        {!formFinish ? (
          <p className="px-3 text-center text-xl text-[hsl(252,6%,83%)]">
            Secure your spot at next year's biggest coding conference.
          </p>
        ) : (
          <p className="px-3 text-center text-xl text-[hsl(252,6%,83%)] md:max-w-md">
            We've emailed your ticket to{" "}
            <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-white bg-clip-text text-transparent">
              {form.email}
            </span>{" "}
            and will send updates in the run up to the event.
          </p>
        )}

        {!formFinish ? (
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-6 md:mx-auto md:max-w-96"
          >
            <div className="group relative flex flex-col gap-3">
              <label htmlFor="avatar" className="text-xl text-white">
                Upload Avatar
              </label>
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/png, image/jpg, image/jpeg"
                className="absolute left-0 top-0 -z-50 opacity-0"
                tabIndex={0}
              />
              <div onDrop={handleDragDrop} onDragOver={handleDragOver}>
                <label
                  htmlFor="avatar"
                  className="flex w-full flex-col items-center gap-4 rounded-xl border border-none bg-white/5 p-3 outline-dashed outline-1 outline-[hsl(245,15%,58%)] transition-all duration-200 hover:cursor-pointer hover:bg-white/15 group-focus-within:outline-4 group-focus-within:outline-[hsl(245,19%,35%)]"
                >
                  {avatarPreview === "" ? (
                    <>
                      <span className="relative aspect-square h-auto w-16 rounded-md bg-white/10">
                        <IconUpload className="absolute left-1/2 top-1/2 aspect-square w-8 -translate-x-1/2 -translate-y-1/2" />
                      </span>
                      <span className="text-center text-lg tracking-wide text-[hsl(252,6%,83%)]">
                        Drag and drop or click to upload
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="relative aspect-square h-auto w-16 rounded-md bg-white/10">
                        <img
                          src={avatarPreview}
                          alt="Avatar"
                          className="absolute left-1/2 top-1/2 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-[hsl(245,15%,58%)] object-cover"
                        />
                      </span>
                      <span className="z-10 flex items-center gap-3">
                        <button
                          onClick={() => setAvatarPreview("")}
                          className="group cursor-pointer rounded-md bg-white/20 px-2 py-1 text-sm font-thin text-white hover:bg-white/25"
                        >
                          <span className="group-hover:border-b-px border-0 border-transparent group-hover:border-white">
                            Remove Image
                          </span>
                        </button>
                        <label
                          htmlFor="avatar"
                          className="group cursor-pointer rounded-md bg-white/20 px-2 py-1 text-sm font-thin text-white hover:bg-white/25"
                        >
                          <span className="group-hover:border-b-px border-0 border-transparent group-hover:border-white">
                            Change Image
                          </span>
                        </label>
                      </span>
                    </>
                  )}
                </label>
              </div>
              <span
                className={`flex items-center gap-2 text-xs ${formError.avatar === "" ? "text-[hsl(252,6%,83%)]" : "text-red-500"}`}
              >
                <IconInfo className={`aspect-square w-4`} />
                {formError.avatar === ""
                  ? "Upload your photo (JPG or PNG, max size: 50KB)."
                  : formError.avatar}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="fullname" className="text-xl text-white">
                Full Name
              </label>
              <input
                id="fullname"
                className="rounded-xl border border-none bg-white/5 p-3 text-white outline-double outline-1 outline-[hsl(245,15%,58%)] transition-all duration-200 hover:bg-white/15 focus:outline-4 focus:outline-[hsl(245,19%,35%)]"
                type="text"
                name="fullname"
                onChange={(e) => handleChange(e, "fullname")}
                value={form.fullname}
              />
              {formError.fullname !== "" && (
                <span className="flex items-center gap-2 text-xs text-red-500">
                  <IconInfo className={`aspect-square w-4`} />
                  {formError.fullname}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-xl text-white">
                Email Address
              </label>
              <input
                id="email"
                className="rounded-xl border border-none bg-white/5 p-3 text-white outline-double outline-1 outline-[hsl(245,15%,58%)] transition-all duration-200 hover:bg-white/15 focus:outline-4 focus:outline-[hsl(245,19%,35%)]"
                type="email"
                name="email"
                placeholder="example@email.com"
                onChange={(e) => handleChange(e, "email")}
                value={form.email}
              />
              {formError.email !== "" && (
                <span className="flex items-center gap-2 text-xs text-red-500">
                  <IconInfo className={`aspect-square w-4`} />
                  {formError.fullname}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="github-username" className="text-xl text-white">
                Github Username
              </label>
              <input
                id="github-username"
                className="hover:cursor-poiter rounded-xl border border-none bg-white/5 p-3 text-white outline-double outline-1 outline-[hsl(245,15%,58%)] transition-all duration-200 hover:bg-white/15 focus:outline-4 focus:outline-[hsl(245,19%,35%)]"
                type="text"
                name="github-username"
                placeholder="@yourusername"
                onChange={(e) => handleChange(e, "github")}
                value={form.github}
              />
              {formError.github !== "" && (
                <span className="flex items-center gap-2 text-xs text-red-500">
                  <IconInfo className={`aspect-square w-4`} />
                  {formError.github}
                </span>
              )}
            </div>

            <button className="rounded-xl bg-[hsl(7,88%,67%)] p-3 text-xl font-extrabold text-[hsl(248,70%,10%)] transition-all duration-200 hover:bg-[hsl(7,71%,60%)] focus:outline-1 focus:outline-[hsl(7,71%,60%)]">
              Generate My Ticket
            </button>
          </form>
        ) : (
          <div className="relative mt-16 md:max-w-lg">
            <img
              src={PatternTicket.src}
              alt="Ticket"
              className="h-full w-full"
            />
            <div className="absolute left-0 top-0 h-full w-full p-6">
              <div className="relative flex h-full w-full max-w-72 flex-col justify-between">
                <div className="flex items-start gap-6">
                  <img src={LogoMark.src} alt="Logo" />
                  <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl font-extrabold text-white">
                      Coding Conf
                    </h1>
                    <p className="text-sm font-light text-[hsl(252,6%,83%)]">
                      Jan 31, 2025 / Austin, TX
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="aspect-square w-12 overflow-hidden rounded-md md:w-16">
                    <img
                      src={avatarPreview}
                      alt="avatar"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 text-white">
                    <h1 className="text-xl font-semibold leading-4">
                      {form.fullname}
                    </h1>
                    <div className="flex items-center gap-1">
                      <IconGithub className="aspect-square w-6 text-[hsl(252,6%,83%)]" />
                      <span className="font-light leading-4 text-[hsl(252,6%,83%)]">
                        @{form.github}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-[4.5rem] md:w-24">
                <div className="relative h-full w-full">
                  <span className="writing-vertical-rl absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl font-light text-[hsl(245,15%,58%)]">
                    #01609
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

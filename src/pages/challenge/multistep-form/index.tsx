import "./style.css";

import { useMemo, useState } from "react";

import NavItem from "~/components/challenge/multistep-form/nav-item";
import InputInfo from "~/components/challenge/multistep-form/input-info";
import RadioPlan from "~/components/challenge/multistep-form/radio-plan";
import CheckboxAddons from "~/components/challenge/multistep-form/checkbox-addons";

import BackgroundSidebarMobile from "~/assets/challenge/multistep-form/bg-sidebar-mobile.svg";
import BackgroundSidebarDesktop from "~/assets/challenge/multistep-form/bg-sidebar-desktop.svg";

import IconArcade from "~/assets/challenge/multistep-form/icon-arcade.svg";
import IconAdvanced from "~/assets/challenge/multistep-form/icon-advanced.svg";
import IconPro from "~/assets/challenge/multistep-form/icon-pro.svg";
import IconThankYou from "~/assets/challenge/multistep-form/icon-thank-you.svg";

import { validateInfoForm } from "./validate-info-form";

export default function IndexPage() {
  const [step, setStep] = useState<number>(1);
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");

  const [infoForm, setInfoForm] = useState<{
    name: string | null;
    email: string | null;
    phone: string | null;
  }>({
    name: null,
    email: null,
    phone: null,
  });

  const [infoFormError, setInfoFormError] = useState<{
    name: string | null;
    email: string | null;
    phone: string | null;
  }>({
    name: null,
    email: null,
    phone: null,
  });

  const [plan, setPlan] = useState<Plans>({
    image: "",
    name: "Arcade",
    monthly: 9,
    yearly: 90,
  });

  const [addon, setAddon] = useState<Addons[]>([]);

  const [disableConfirmButton, setDisableConfirmButton] =
    useState<boolean>(false);

  const handleNextStep = () => {
    if (step === 1) {
      setInfoFormError({
        name: null,
        email: null,
        phone: null,
      });
      const validateInfo = validateInfoForm(infoForm);
      if (validateInfo.error) {
        setInfoFormError(validateInfo.error);
        return;
      }
    }

    if (step !== 4) {
      setStep((prev) => prev + 1);
    } else {
      setDisableConfirmButton(true);
      setTimeout(() => {
        setStep(5);
        setDisableConfirmButton(false);
      }, 2000);
    }
  };

  const totalPayment = useMemo(
    () => addon.reduce((sum, ad) => sum + ad[duration], plan[duration]),
    [addon, duration, plan],
  );

  return (
    <main className="font-ubuntu flex min-h-svh w-full items-center justify-center bg-[#eef5ff] md:p-3">
      <div
        id="main-card"
        className="relative grid h-full min-h-svh w-full max-w-4xl grid-cols-1 justify-between overflow-x-hidden md:h-max md:min-h-0 md:grid-cols-3 md:rounded-2xl md:bg-white md:p-3"
      >
        <div
          id="card-steps"
          className="absolute z-0 w-full md:relative md:z-10"
        >
          <img
            src={BackgroundSidebarMobile.src}
            alt="background"
            className="block h-auto w-full md:hidden"
          />
          <img
            src={BackgroundSidebarDesktop.src}
            alt="background"
            className="hidden h-auto w-64 md:block"
          />
          <ul
            id="step-navigation"
            className="absolute left-1/2 top-8 flex -translate-x-1/2 transform items-center gap-4 md:left-8 md:translate-x-0 md:flex-col md:items-start"
          >
            <NavItem step={1} title="Your Info" isActive={step === 1} />
            <NavItem step={2} title="Payment Plan" isActive={step === 2} />
            <NavItem step={3} title="Add-ons" isActive={step === 3} />
            <NavItem step={4} title="Summary" isActive={step >= 4} />
          </ul>
        </div>
        <div
          className={`col-span-2 flex h-full flex-col gap-4 ${step > 4 ? "justify-start md:justify-center" : "justify-end md:justify-between"} md:px-16 md:pt-12`}
        >
          <div
            id="card-content"
            className="relative top-24 z-10 w-full px-3 md:relative md:top-0 md:z-0"
          >
            <div
              id="card-form-info"
              className={`flex-col gap-9 rounded-md bg-white p-6 md:p-0 ${step === 1 ? "flex" : "hidden"}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold md:text-3xl">
                  Personal Info
                </h1>
                <h2 className="text-lg text-gray-500 md:text-sm">
                  Please provide your name, email address and phone number.
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <InputInfo
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="e.g. Stephen King"
                  onChange={(e) =>
                    setInfoForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  error={infoFormError.name}
                />
                <InputInfo
                  label="Email Adress"
                  name="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  onChange={(e) =>
                    setInfoForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  error={infoFormError.email}
                />
                <InputInfo
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +1 234 567 890"
                  onChange={(e) =>
                    setInfoForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  error={infoFormError.phone}
                />
              </div>
            </div>
            <div
              id="card-plan"
              className={`flex-col gap-6 rounded-md bg-white p-6 md:p-0 ${step === 2 ? "flex" : "hidden"}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold md:text-3xl">
                  Select your plan
                </h1>
                <h2 className="text-lg text-gray-500 md:text-sm">
                  You have the option of monthly or yearly billing.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {plans.map((p, key) => (
                  <RadioPlan
                    key={key}
                    currentDuration={duration}
                    image={p.image as string}
                    name={p.name}
                    monthly={p.monthly}
                    yearly={p.yearly}
                    isSelected={plan.name === p.name}
                    onChange={(e) => setPlan(p)}
                  />
                ))}
              </div>
              <div className="relative flex w-full items-center justify-center bg-[#f8f9fe] py-3">
                <input
                  id="duration-switch"
                  type="checkbox"
                  hidden
                  checked={duration == "yearly"}
                  onChange={() => {
                    setDuration((value) =>
                      value == "monthly" ? "yearly" : "monthly",
                    );
                  }}
                  className="peer"
                />
                <label
                  htmlFor="duration-switch"
                  className="flex cursor-pointer items-center gap-3"
                >
                  <span className={`${duration === "monthly" && "font-bold"}`}>
                    Monthly
                  </span>

                  <div className="relative flex h-6 w-12 rounded-full bg-[#032958] p-1 transition-all duration-300">
                    <div
                      className={`aspect-square w-4 rounded-full bg-white transition-all duration-300 ${duration === "yearly" ? "ml-auto" : "mr-auto"}`}
                    ></div>
                  </div>

                  <span className={`${duration === "yearly" && "font-bold"}`}>
                    Yearly
                  </span>
                </label>
              </div>
            </div>
            <div
              id="card-addons"
              className={`flex-col gap-9 rounded-md bg-white p-6 md:p-0 ${step === 3 ? "flex" : "hidden"}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold md:text-3xl">
                  Picks add-ons
                </h1>
                <h2 className="text-lg text-gray-500 md:text-sm">
                  Add-ons help enhance your gaming experience.
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {addons.map((a, key) => {
                  return (
                    <CheckboxAddons
                      key={key}
                      name={a.name}
                      description={a.description}
                      monthly={a.monthly}
                      yearly={a.yearly}
                      currentDuration={duration}
                      isChecked={addon.findIndex((ad) => ad.id === a.id) != -1}
                      onChange={(e) => {
                        const addonIndex = addon.findIndex(
                          (ad) => ad.id === a.id,
                        );
                        if (addonIndex >= 0) {
                          setAddon(addon.filter((ad) => ad.id !== a.id));
                        } else {
                          setAddon((prev) => [...prev, a]);
                        }
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div
              id="card-summary"
              className={`flex-col gap-6 rounded-md bg-white p-6 md:p-0 ${step === 4 ? "flex" : "hidden"}`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold md:text-3xl">Finishing up</h1>
                <h2 className="text-lg text-gray-500 md:text-sm">
                  Double-check everything looks OK before confirming.
                </h2>
              </div>
              <div className="flex flex-col gap-6 rounded-md bg-[#f8f9fe] p-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h1 className="font-medium text-[#534e8e]">
                      {plan.name}({duration})
                    </h1>
                    <a
                      href="#"
                      className="text-sm text-gray-400 underline transition-colors duration-300 hover:text-[#534e8e]"
                    >
                      Change
                    </a>
                  </div>
                  <span className="font-bold text-[#534e8e]">
                    {duration === "monthly"
                      ? `$${plan.monthly}/mo`
                      : `$${plan.yearly}/yr`}
                  </span>
                </div>
                {addon.length > 0 && <hr />}
                {addon.map((a, key) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-400">{a.name}</span>
                    <span className="font-medium text-[#534e8e]">
                      {duration === "monthly"
                        ? `+$${a.monthly}/mo`
                        : `+$${a.yearly}/yr`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  Total (per {duration === "monthly" ? "month" : "year"})
                </span>
                <span className="text-lg font-bold text-[#534e8e]">
                  {duration === "monthly"
                    ? `+$${totalPayment}/mo`
                    : `+$${totalPayment}/yr`}
                </span>
              </div>
            </div>
            <div
              id="card-finish"
              className={`flex-col items-center justify-center gap-6 rounded-md bg-white p-6 md:mb-auto md:h-full md:p-0 ${step === 5 ? "flex" : "hidden"}`}
            >
              <img
                src={IconThankYou.src}
                alt="thank you"
                className="aspect-square w-16"
              />
              <h1 className="text-2xl font-bold">Thank you</h1>
              <div className="flex flex-col text-center text-gray-400">
                <p className="">
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@lorem.com.
                </p>
              </div>
            </div>
          </div>
          <div className="h-24 w-0 md:h-0" />
          <div
            id="card-footer"
            className={`z-10 items-center justify-between bg-white px-3 py-6 md:pb-3 ${step > 4 ? "hidden" : "flex"}`}
          >
            {step !== 1 ? (
              <button
                onClick={() => setStep((prev) => prev - 1)}
                className="text-sm text-gray-500 transition-colors duration-300 hover:font-medium hover:text-[#03295a]"
              >
                Go Back
              </button>
            ) : (
              <span></span>
            )}
            <button
              disabled={disableConfirmButton}
              onClick={handleNextStep}
              className="rounded bg-[#03295a] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-[#938cfe] disabled:cursor-not-allowed disabled:bg-[#938cfe]"
            >
              {step !== 4 ? "Next Step" : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

interface Plans {
  image: string;
  name: string;
  monthly: number;
  yearly: number;
}

interface Addons {
  id: number;
  name: string;
  description: string;
  monthly: number;
  yearly: number;
}

const plans: Plans[] = [
  {
    image: IconArcade.src,
    name: "Arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    image: IconAdvanced.src,
    name: "Advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    image: IconPro.src,
    name: "Pro",
    monthly: 15,
    yearly: 150,
  },
];

const addons: Addons[] = [
  {
    id: 1,
    name: "Online Service",
    description: "Access to multiple games",
    monthly: 1,
    yearly: 10,
  },
  {
    id: 2,
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    id: 3,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

import * as React from "react";

import { useIsMobile } from "./use-mobile";

import IconMenu from "~/assets/challenge/news-homepage/icon-menu.svg";
import IconMenuClose from "~/assets/challenge/news-homepage/icon-menu-close.svg";

export default function MobileSidebar() {
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* sidebar trigger */}
      <div
        className="relative z-50 block cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? IconMenuClose.src : IconMenu.src}
          alt={isOpen ? "Close Menu" : "Open Menu"}
          className="size-9 object-contain"
        />
      </div>
      {/* overlay */}
      <div
        className={`absolute left-0 top-0 h-screen w-screen bg-black transition-all ${isOpen ? "z-30 opacity-65" : "-z-50 opacity-0"}`}
      ></div>
      {/* sidebar menu */}
      <div
        className={`absolute right-0 top-0 z-40 flex h-svh w-full max-w-[60%] flex-col justify-center bg-white transition-all ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="mb-24 flex flex-col gap-6 px-9 font-medium">
          <a href="#" className="transition-colors hover:text-[hsl(5,85%,63%)]">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-[hsl(5,85%,63%)]">
            New
          </a>
          <a href="#" className="transition-colors hover:text-[hsl(5,85%,63%)]">
            Popular
          </a>
          <a href="#" className="transition-colors hover:text-[hsl(5,85%,63%)]">
            Trending
          </a>
          <a href="#" className="transition-colors hover:text-[hsl(5,85%,63%)]">
            Categories
          </a>
        </div>
      </div>
    </>
  );
}

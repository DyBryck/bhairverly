import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-light-pink fixed z-1 flex h-auto w-full max-w-7xl items-center justify-between p-4 shadow md:p-6">
      <a href="/">
        <h1 className="font-logo text-4xl md:text-5xl">Bhair&apos;verly</h1>
      </a>
      <nav>
        <ul className="font-title hidden gap-8 text-lg uppercase lg:flex">
          <li>
            <a
              href="#prestations"
              className="underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
            >
              Prestations
            </a>
          </li>
          <div className="w-[1px] bg-stone-700"></div>
          <li>
            <a
              href="#produits"
              className="underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
            >
              Produits
            </a>
          </li>
          <div className="w-[1px] bg-stone-700"></div>
          <li>
            <a
              href="#coiffeuses"
              className="underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
            >
              Coiffeuses
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="check" className="cursor-pointer lg:!hidden">
        <input
          type="checkbox"
          id="check"
          onChange={() =>
            setIsOpen((latestState) => (latestState = !latestState))
          }
          className="lg:hidden"
        />
        <span className="bg-stone-700 lg:hidden"></span>
        <span className="bg-stone-700 lg:hidden"></span>
        <span className="bg-stone-700 lg:hidden"></span>
      </label>
      <nav
        className={`${isOpen ? "animate-show-nav flex" : "animate-hide-nav"} font-title bg-light-pink fixed top-[76px] right-[-40%] p-4 text-xl shadow md:top-[96px] md:text-3xl lg:hidden`}
      >
        <ul className="flex flex-col gap-4 uppercase">
          <div className="h-[1px] bg-stone-700"></div>
          <li>
            <a href="#prestations">Prestations</a>
          </li>
          <div className="h-[1px] bg-stone-700"></div>
          <li>
            <a href="#produits">Produits</a>
          </li>
          <div className="h-[1px] bg-stone-700"></div>
          <li>
            <a href="#coiffeuses">Coiffeuses</a>
          </li>
          <div className="h-[1px] bg-stone-700"></div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

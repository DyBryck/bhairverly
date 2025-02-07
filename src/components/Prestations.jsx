import pinkWave from "../assets/images/light-pink-wave.svg";
import prestations from "../data/prestations.json";
import Prestation from "./Prestation";

const Prestations = () => {
  return (
    <section id="prestations">
      <div className="-mt-[1px] flex flex-col items-center justify-center gap-4 bg-white pt-4 md:gap-8">
        <div className="bg-secondary h-0.5 w-1/2"></div>
        <h2 className="font-title bg-white text-center text-xl font-bold uppercase md:text-2xl">
          Prestations
        </h2>
        <div className="bg-secondary h-0.5 w-1/2"></div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 bg-white pt-4 pb-4 md:pt-8">
        {prestations.map((p) => (
          <Prestation
            key={p.name}
            image={p.image}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
      <img src={pinkWave} alt="" className="w-full" />
    </section>
  );
};

export default Prestations;

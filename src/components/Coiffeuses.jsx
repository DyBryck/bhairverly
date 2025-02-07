import coiffeuses from "../data/coiffeuses.json";
import Coiffeuse from "./Coiffeuse";

const Coiffeuses = () => {
  return (
    <section id="coiffeuses" className="justify-center gap-4 bg-white">
      <div className="-mt-[1px] mb-4 flex flex-col items-center justify-center gap-4 bg-white pt-4 md:gap-8">
        <div className="bg-secondary h-0.5 w-1/2"></div>
        <h2 className="font-title bg-white text-center text-xl font-bold uppercase md:text-2xl">
          Coiffeuses
        </h2>
        <div className="bg-secondary h-0.5 w-1/2"></div>
      </div>
      <div className="flex gap-4 overflow-auto p-4 md:p-8">
        {coiffeuses.map((c) => (
          <Coiffeuse key={c.name} name={c.name} cover={c.cover} />
        ))}
      </div>
    </section>
  );
};

export default Coiffeuses;

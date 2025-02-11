import hairdressers from "../data/coiffeuses.json";
import HairDresser from "./HairDresser";
import Heading from "./Heading";

const HairdresserList = () => {
  return (
    <section id="hairdresser-list" className="justify-center gap-4 bg-white">
      <Heading title="Coiffeuses" borderColor="bg-secondary" />
      <div className="flex gap-4 overflow-auto p-4 md:p-8">
        {hairdressers.map((c) => (
          <HairDresser key={c.name} name={c.name} cover={c.cover} />
        ))}
      </div>
    </section>
  );
};

export default HairdresserList;

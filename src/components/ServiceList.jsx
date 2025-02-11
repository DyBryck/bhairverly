import pinkWave from "../assets/images/light-pink-wave.svg";
import prestations from "../data/prestations.json";
import Heading from "./Heading";
import Service from "./Service";

const ServiceList = () => {
  return (
    <section id="service-list">
      <Heading title="Prestations" borderColor="bg-secondary" />
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white pt-4 pb-4 md:pt-8">
        {prestations.map((p) => (
          <Service key={p.name} image={p.image} name={p.name} price={p.price} />
        ))}
      </div>
      <img src={pinkWave} alt="" className="w-full" />
    </section>
  );
};

export default ServiceList;

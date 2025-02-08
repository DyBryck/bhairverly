import wave from "../assets/images/wave.svg";
import products from "../data/produits.json";
import Product from "./Product";

const Products = () => {
  return (
    <section id="produits" className="bg-light-pink mt-[-1px]">
      <div className="-mt-[1px] flex flex-col items-center justify-center gap-4 pt-4 md:gap-8">
        <div className="h-0.5 w-1/2 bg-slate-50"></div>
        <h2 className="font-title text-center text-xl font-bold uppercase md:text-2xl">
          Produits
        </h2>
        <div className="h-0.5 w-1/2 bg-slate-50"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 py-4 md:py-8">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
      <img src={wave} alt="" className="w-full object-fill" />
    </section>
  );
};

export default Products;

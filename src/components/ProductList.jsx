import wave from "../assets/images/wave.svg";
import products from "../data/produits.json";
import Heading from "./Heading";
import Product from "./Product";

const ProductList = () => {
  return (
    <section id="product-list" className="bg-light-pink mt-[-1px]">
      <Heading title="Produits" borderColor="bg-slate-50" />
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 py-4 md:py-8">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
      <img src={wave} alt="" className="w-full object-fill" />
    </section>
  );
};

export default ProductList;

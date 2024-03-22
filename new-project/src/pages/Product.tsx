import Navbar from "@/components/Navbar";
import ProductPage from "@/components/product-table/page";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-3/6 m-auto">
        <h1 className=" px-7 py-3 font-bold text-5xl text-slate-700 ">
          Product
        </h1>
        <div className=" m-auto">
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Product;

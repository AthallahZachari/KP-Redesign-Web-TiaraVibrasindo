import Navbar from "@/components/Navbar";
import CustomerPage from "@/components/customer-table/customerTable";

const Customer = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-3/4 m-auto">
        <h1 className=" px-7 py-3 font-bold text-5xl text-slate-700 ">Customer</h1>
        <div className="  m-auto">
          <CustomerPage />
        </div>
      </div>
    </div>
  );
};

export default Customer;

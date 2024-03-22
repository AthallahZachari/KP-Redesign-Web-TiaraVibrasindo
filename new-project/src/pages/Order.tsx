import Navbar from "@/components/Navbar";
import OrderTable from "@/components/order-table/orderTable";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-3/4 m-auto">
        <h1 className=" px-7 py-3 font-bold text-5xl text-slate-700 ">Orders</h1>
        <div className="  m-auto">
          <OrderTable/>
        </div>
      </div>
    </div>
  );
};

export default Order;

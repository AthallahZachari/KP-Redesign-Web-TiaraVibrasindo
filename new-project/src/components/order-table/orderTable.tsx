import axios from "axios";
import DataTable from "../ui/dataTable";
import { Order, Columns } from "./orderColumn";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const [customer, setCustomer] = useState<Order[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const res = await axios.get("http://localhost:8081/order")
        console.log(res)
        setCustomer(res.data)
      }catch(err){
        console.error('Data withdrawn but failed to fetch in client-side', err)
      }
    }
    fetchProduct();
  }, [])

  return(
    <div className="container m-auto">
      <DataTable columns={Columns} data={customer} placeholder="Filter Product Name..." searchBy="name"/>
    </div>
  )
}

export default OrderPage;

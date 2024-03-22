import axios from "axios";
import DataTable from "../ui/dataTable";
import { Customer, Columns } from "./customerColumn";
import { useEffect, useState } from "react";

const CustomerPage = () => {
  const [customer, setCustomer] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:8081/customer");
        console.log(res);
        setCustomer(res.data);
      } catch (err) {
        console.error("Data withdrawn but failed to fetch in client-side", err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="container m-auto">
      <DataTable
        columns={Columns}
        data={customer}
        placeholder="Filter Last Name..."
        searchBy="last_name"
      />
    </div>
  );
};

export default CustomerPage;

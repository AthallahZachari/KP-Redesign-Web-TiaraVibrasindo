import axios from "axios";
import DataTable from "../ui/dataTable";
import { Product, Columns } from "./columns";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const res = await axios.get("http://localhost:8081/product")
        console.log(res)
        setProduct(res.data)
      }catch(err){
        console.error('Data withdrawn but failed to fetch in client-side', err)
      }
    }
    fetchProduct();
  }, [])

  return(
    <div className="container mx-auto">
      <DataTable columns={Columns} data={products} placeholder="Filter Product..." searchBy="name"/>
    </div>
  )
}

export default ProductPage;

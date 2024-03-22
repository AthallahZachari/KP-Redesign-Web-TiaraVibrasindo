import axios from "axios";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger, 
} from "../ui/dropdown-menu";

const deleteOrder = async (orderID: string) => {
  try{
    const res = await axios.delete(`localhost:8081/product/:${orderID}`)
    console.log("Data dihapus!")
  }catch(err){
    console.error(err)
    alert('Delete Failed!')
  }
}

export type Customer = {
  customer_id: string;
  first_name: string;
  last_name: string;
  phone: number;
  address: string;
  city: string;
};

export const Columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "first_name",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">First Name</div>
    ),
  },
  {
    accessorKey: "last_name",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">Last Name</div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Phone</div>
    ),
  },
  {
    accessorKey: "address",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Address</div>
    ),
  },
  {
    accessorKey: "city",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">City</div>
    ),
  },
  {
    id: " ",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-2">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-inherit w-inherit hover:bg-inherit" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-[1px] border-slate-300">
            <DropdownMenuLabel className=" text-slate-500">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => deleteOrder(customer.customer_id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

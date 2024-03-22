import axios from "axios";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const deleteOrder = async (orderID: number) => {
  try {
    const res = await axios.delete(`http://localhost:8081/order/${orderID}`);
    console.log("Data berhasil dihapus!", res);
  } catch (err) {
    console.error(err);
    alert("Failed to delete, error in client side, requested ID = " + orderID);
  }
};

export type Order = {
  order_id: number;
  customer_id: number;
  name: string;
  quantity: number;
  first_name: string;
  address: string;
  city: string;
  phone: number;
};

export const Columns: ColumnDef<Order>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">Product Name</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">Qty</div>
    ),
  },
  {
    accessorKey: "order_id",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Order ID</div>
    ),
  },
  {
    accessorKey: "last_name",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Last Name</div>
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
    accessorKey: "phone",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Phone</div>
    ),
  },
  {
    id: " ",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-2">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-inherit w-inherit hover:bg-inherit" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-[1px] border-slate-300">
            <DropdownMenuLabel className=" text-slate-500">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(order.address);
              }}
            >
              Copy Address
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" hover:bg-red-600"
              onClick={() => {
                deleteOrder(order.order_id);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

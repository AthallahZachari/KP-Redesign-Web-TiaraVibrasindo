import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";
import { MoreHorizontal } from "lucide-react";
import axios from "axios";

export type Product = {
  product_id: string;
  name: string;
  quantity_in_stock: number;
  unit_price: number;
};

const deleteProduct = async (productID: string) => {
  try {
    const res = await axios.delete(
      `http://localhost:8081/product/${productID}`
    );
    console.log("Data berhasil dihapus", res);
  } catch (err) {
    console.error(err);
    alert(
      "Failed to delete, error in client side, requested ID = " + productID
    );
  }
};

export const Columns: ColumnDef<Product>[] = [
  {
    accessorKey: "product_id",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">ID</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <div className="text-lg font-semibold text-slate-600">Name</div>
    ),
  },
  {
    accessorKey: "quantity_in_stock",
    header: () => (
      <div className=" text-lg font-semibold text-slate-600">Qty</div>
    ),
  },
  {
    accessorKey: "unit_price",
    header: () => (
      <div className="text-right text-lg font-semibold text-slate-600">
        Header
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("unit_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className=" text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: " ",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-2">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-inherit w-inherit hover:bg-inherit" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-[1px] border-slate-300 bg-gray-950 bg-opacity-75">
            <DropdownMenuLabel className=" text-slate-500">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(product.product_id);
                toast.info('Copied to Clipboard')
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className=" hover:bg-red-700"
              onClick={() => {
                deleteProduct(product.product_id),
                toast.success("Data Deleted!!!")
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
          <Toaster richColors/>
        </DropdownMenu>
      );
    },
  },
];

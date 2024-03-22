import Navbar from "@/components/Navbar";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className=" p-3 font-bold text-5xl text-slate-700 text-center">
        Welcome
      </h1>
      <Button onClick={() => toast.success("Data deleted!")}>Click me</Button>
      <Toaster className=" text-slate-800" richColors />
    </div>
  );
};

export default Home;

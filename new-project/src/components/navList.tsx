import React from "react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NewDivProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  text?: string;
}

const NewList: FC<NewDivProps> = ({ className, text = `Navs`, ...props }) => {
  return (
    <div className={cn(" text-lg text-slate-400 px-3 hover:text-slate-800", { text: "" }, className)} {...props}>
      {text}
    </div>
  );
};

export default NewList;

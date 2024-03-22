import React from "react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NewDivProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  src?: string;
}

const NewImage: FC<NewDivProps> = ({ className, text = `Navs`, src = '', ...props }) => {
  return (
    <div className={cn("h-12 w-44", text, src, className)} {...props}>
      <img src={src} className=" h-full w-full"/>
    </div>
  );
};

export default NewImage;

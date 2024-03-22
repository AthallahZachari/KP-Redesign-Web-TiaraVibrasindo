import { FC } from "react"
import { twMerge } from "tailwind-merge"
import {clsx, type ClassValue} from "clsx"

function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

interface NewDocButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    disabled?: boolean
    text?: string
}

const NewButton: FC<NewDocButtonProps> = ({className, text=`don't forget to change`, ...props}) => {
    
    return(
     <button className={cn( 'border border-slate-300 rounded-md px-5 py-2 font-semibold', {text: ''}, className)} {...props}>
        {text}
     </button>
    );
}

export default NewButton;
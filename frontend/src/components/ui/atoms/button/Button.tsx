
type Button={
    className?: string;
    children: JSX.Element|string;
    onClick?:()=>void
}


export const Button=({ className, children, onClick}:Button)=>{
    return(
        <button type="submit" className={className} onClick={onClick} >
            {children}  
        </button>
    )
}
type Input={
    inputValue: string| number;
    className: string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}


export const Input = ({className, inputValue,setInputValue}:Input)=>{
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }
    return (
        <input type="text" value={inputValue} className={className} onChange={handleChange}/>
    )
}
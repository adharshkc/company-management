import { TextField } from "@mui/material";

type Input = {
    type: string;
  inputValue: string | number;
  className?: string;
  fullWidth?: boolean;
  placeHolder?:string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id?:any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lable?:any;
  sx?:object
  InputProps?:object
  size?: "small" | "medium" | undefined
};

export const Input = ({
  className,
  fullWidth,
  inputValue,
  setInputValue,
  type,
  InputProps,
  placeHolder,
  size,
  ...props
}: Input) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <TextField
      variant="outlined"
      fullWidth={fullWidth}
      placeholder={placeHolder}
      type={type}
      value={inputValue}
      InputProps={InputProps}
      className={className}
      onChange={handleChange}
      size={size}
      sx={props.sx}
    />
  );
};

import { TextField } from "@mui/material";

type Input = {
    type: string;
  inputValue: string | number;
  className?: string;
  fullWidth?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
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

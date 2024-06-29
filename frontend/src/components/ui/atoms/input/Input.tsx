import { TextField } from "@mui/material";

type Input = {
    type: string;
  inputValue: string | number;
  className?: string;
  fullWidth?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  sx?:object
};

export const Input = ({
  className,
  fullWidth,
  inputValue,
  setInputValue,
  type,
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
      className={className}
      onChange={handleChange}
      sx={props.sx}
    />
  );
};

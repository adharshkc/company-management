import { Button as MuiButton, ButtonProps } from "@mui/material";

type Button = {
  className?: string;
  children: JSX.Element | string|string[];
  buttonColor?:ButtonProps['color']
  fullWidth?:boolean;
  disabled?:boolean
  variant?: "contained" | "outlined"
  sx?:object;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>)=>void;
  props?: unknown;
  
};

export const Button = ({ buttonColor,fullWidth, disabled, className,onClick, variant, children, ...props }: Button) => {
  return (
    <MuiButton
      type="submit"
      variant={variant?variant: "contained"}
      color={buttonColor}
      disableRipple
      disabled={disabled}
      disableElevation
      fullWidth={fullWidth}
      className={className}
      sx={props.sx}
      onClick={(e)=>onClick&&onClick(e)}
    //   onClick={onClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

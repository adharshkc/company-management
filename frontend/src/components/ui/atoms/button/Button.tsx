import { Button as MuiButton, ButtonProps } from "@mui/material";

type Button = {
  className?: string;
  children: JSX.Element | string;
  buttonColor?:ButtonProps['color']
  fullWidth?:boolean;
  disabled?:boolean
  sx?:object;
  onClick?: () => void;
  props?: unknown;
  
};

export const Button = ({ buttonColor,fullWidth, disabled, className,onClick, children, ...props }: Button) => {
  return (
    <MuiButton
      type="submit"
      variant="contained"
      color={buttonColor}
      disableRipple
      disabled={disabled}
      disableElevation
      fullWidth={fullWidth}
      className={className}
      sx={props.sx}
      onClick={onClick}
    //   onClick={onClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

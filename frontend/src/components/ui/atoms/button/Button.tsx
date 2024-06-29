import { Button as MuiButton, ButtonProps } from "@mui/material";

type Button = {
  className?: string;
  children: JSX.Element | string;
  buttonColor?:ButtonProps['color']
  fullWidth?:boolean;
  sx?:object;
//   onClick?: () => void;
  props?: unknown;
};

export const Button = ({ buttonColor,fullWidth, className, children, ...props }: Button) => {
  return (
    <MuiButton
      type="submit"
      variant="contained"
      color={buttonColor}
      disableRipple
      disableElevation
      fullWidth={fullWidth}
      className={className}
      sx={props.sx}
    //   onClick={onClick}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

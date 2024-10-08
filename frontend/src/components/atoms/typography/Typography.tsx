/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type Typography = {
  className?: string;
  align?:TypographyProps["align"];
  children?: any
  props?: unknown;
  sx?: object;
  variant?: TypographyProps["variant"];
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement>)=>void;
};

export const Typography = ({
  variant,
  children,
  sx,
  className,
  align,
  onClick,
  ...props
}: Typography) => {
  return (
    <MuiTypography variant={variant} align={align} sx={sx} className={className} onClick={onClick} {...props}>
      {children}
    </MuiTypography>
  );
};

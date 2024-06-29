import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type Typography = {
  className?: string;
  children: JSX.Element | string;
  props?: unknown;
  sx?: object;
  variant: TypographyProps["variant"];
  color?: string;
};

export const Typography = ({
  variant,
  children,
  sx,
  className,
  ...props
}: Typography) => {
  return (
    <MuiTypography variant={variant} sx={sx} className={className} {...props}>
      {children}
    </MuiTypography>
  );
};

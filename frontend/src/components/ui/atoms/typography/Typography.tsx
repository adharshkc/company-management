import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type Typography = {
  className?: string;
  align?:TypographyProps["align"];
  children?: JSX.Element | string| string[] | (JSX.Element | string)[];
  props?: unknown;
  sx?: object;
  variant?: TypographyProps["variant"];
  color?: string;
};

export const Typography = ({
  variant,
  children,
  sx,
  className,
  align,
  ...props
}: Typography) => {
  return (
    <MuiTypography variant={variant} align={align} sx={sx} className={className} {...props}>
      {children}
    </MuiTypography>
  );
};

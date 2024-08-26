import { Typography } from "@components/atoms/typography/Typography";

type HeaderProps ={
    header1:string
    header2:string
}

const Header:React.FC<HeaderProps> = ({header1, header2}) => {
  return (
    <>
      <Typography variant="body1" sx={{ marginTop: "5px" }}>
        <span style={{ color: "#195BA5" }}>{header1} </span>
        <span className="heading2">/ {header2}</span>{" "}
      </Typography>
    </>
  );
};

export default Header;

import NavBar from "@components/organism/Navbar/NavBar";

const HrLayout = () => {
  const username = { name: "adharsh" };

  const layout = [
    { name: "Dashboard" },
    { name: "Employees" },
    { name: "Attendance" },
    { name: "Channels" },
  ];
  return (
    <div>
      <NavBar username={username} />
    </div>
  );
};

export default HrLayout;

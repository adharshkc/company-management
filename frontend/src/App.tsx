import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import HrRoute from "./routes/HrRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/*" element={<UserRoute />} />
        <Route path="/hr/*" element={<HrRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

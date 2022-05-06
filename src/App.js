import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Inventory from "./Components/Inventory/Inventory";
import ManageItems from "./Components/ManageItems/ManageItems";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/manageItems" element={<ManageItems/>}/>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

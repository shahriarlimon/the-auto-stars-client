import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Inventory from "./Components/Inventory/Inventory";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyCars from "./Components/MyCars/MyCars";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Components/Pages/Blogs/Blogs";
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
        <Route path="/manageItems" element={
          <RequireAuth>
            <ManageItems/>
          </RequireAuth>
        }/>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
          <Route
          path="/myCars"
          element={
            <RequireAuth>
              <MyCars />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
      
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

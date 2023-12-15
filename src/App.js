import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import ShowData from "./Components/ShowData";
import EditData from "./Components/EditData";
import AddNew from "./Components/AddNew";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer limit={1} position="top-right" />
      <div className="min-height d-flex flex-column">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addnew" element={<AddNew />} />
            <Route path="/showdata" element={<ShowData />} />
            <Route path="/editdata/:id" element={<EditData />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

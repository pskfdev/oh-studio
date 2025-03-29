import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
//Layout
import Layout from "../layouts/Layout";
//Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Notfound from "../pages/Notfound";

type Props = {};

function AppRoutes({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

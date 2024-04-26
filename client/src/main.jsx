import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Otp from "./pages/Otp.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="sign-in" element={<LogIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verification-code" element={<Otp />} />
      <Route path="message" element={<SuccessPage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

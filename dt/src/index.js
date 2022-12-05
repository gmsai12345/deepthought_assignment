import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Sidebar from "./Sidebar/Sidebar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Sidebar />
    <Home />
  </StrictMode>
);

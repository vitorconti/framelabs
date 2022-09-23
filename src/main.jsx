import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import NavBar from "./navigation/NavBar";
import CadastroOs from "./pages/CadastroOs";
import ConsultaOs from "./pages/ConsultaOs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "ordem-servico/cadastro",
        element: <CadastroOs />,
      },
      {
        path: "ordem-servico/consulta",
        element: <ConsultaOs />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
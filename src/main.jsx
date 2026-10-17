import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Component/Routes/Routes.jsx";
import Provider from "./Component/Context/Provider/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);

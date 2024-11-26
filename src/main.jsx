import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GeneralContextProvider } from "./contexts/GeneralContext.jsx";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Project from "./Pages/Project/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/my-portfolio/",
        element: <Home />,
      },
      {
        path: "/my-portfolio/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/my-portfolio/portfolio/:id",
        element: <Project />,
      },
      {
        path: "/my-portfolio/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>
);

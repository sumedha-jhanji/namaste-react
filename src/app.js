import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <HeaderComponent />
      {/* if path= /  then body component */}
      {/* if path= /about   then aout component*/}
      {/* if path= /contact   then ContactComponent*/}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuComponent />,
      }
    ],
    errorElement: <ErrorComponent />, // for custok error page
  },
  // {
  //   path: "/about",
  //   element: <AboutComponent />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactComponent />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}></RouterProvider>);

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import UserContext from "./utils/userContext";

const AppLayout = () => {
  //suppose some api is giving user details
  //authentication

  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an API call and sdend user name and password
    const data = {
      name: "Sumedha Jhanji",
    };
    setUserName(data.name);
  }, []);

  return (
    //default value of context
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* context: sumedha jhanji */}
      <div className="app">
        {/* Header */}
        {/* <UserContext.Provider value={{ loggedInUser: "Nested Context" }}> */}
        {/* context: Nested Context */}
        <HeaderComponent />
        {/* </UserContext.Provider> */}
        {/* if path= /  then body component */}
        {/* if path= /about   then aout component*/}
        {/* if path= /contact   then ContactComponent*/}
        <Outlet />
        {/* Footer */}
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/GroceryComponent"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuComponent />,
      },
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
